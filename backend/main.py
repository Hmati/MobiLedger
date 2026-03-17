from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from typing import List, Dict, Any
import json
from datetime import datetime

app = FastAPI(title="MobileLedgerKE API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "MobileLedgerKE API"}

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    """
    Upload and process financial document
    """
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file provided")

    # Check file extension
    allowed_extensions = ['.csv', '.xlsx', '.xls']
    file_ext = file.filename.lower().split('.')[-1]
    if f'.{file_ext}' not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Unsupported file type")

    try:
        # Read file content
        content = await file.read()

        # Parse file
        if file_ext == 'csv':
            df = pd.read_csv(io.StringIO(content.decode('utf-8')))
        else:
            df = pd.read_excel(io.BytesIO(content))

        # Process transactions
        transactions = process_transactions(df)

        return {
            "message": "File processed successfully",
            "transactions_count": len(transactions),
            "transactions": transactions[:10],  # Return first 10 for preview
            "summary": generate_summary(transactions)
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

def process_transactions(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """
    Process and normalize transaction data
    """
    transactions = []

    # Column detection
    date_col = find_column(df.columns, ['date', 'Date', 'DATE', 'time', 'Time'])
    desc_col = find_column(df.columns, ['description', 'desc', 'Description', 'Details', 'detail'])
    amount_col = find_column(df.columns, ['amount', 'Amount', 'AMOUNT', 'value', 'Value'])
    balance_col = find_column(df.columns, ['balance', 'Balance', 'BALANCE'])

    for _, row in df.iterrows():
        try:
            # Parse date
            date = None
            if date_col:
                date_val = row[date_col]
                if pd.notna(date_val):
                    if isinstance(date_val, str):
                        # Try different date formats
                        for fmt in ['%Y-%m-%d', '%d/%m/%Y', '%m/%d/%Y', '%d-%m-%Y']:
                            try:
                                date = datetime.strptime(date_val, fmt).date()
                                break
                            except:
                                continue
                    else:
                        date = date_val.date() if hasattr(date_val, 'date') else date_val

            # Parse amount
            amount = 0
            if amount_col:
                amt_val = row[amount_col]
                if pd.notna(amt_val):
                    if isinstance(amt_val, str):
                        # Remove currency symbols and commas
                        amt_val = amt_val.replace('KES', '').replace('KSh', '').replace(',', '').strip()
                        try:
                            amount = float(amt_val)
                        except:
                            amount = 0
                    else:
                        amount = float(amt_val) if pd.notna(amt_val) else 0

            # Description
            description = str(row[desc_col]) if desc_col and pd.notna(row[desc_col]) else ""

            # Categorize
            category = categorize_transaction(description, amount)

            transaction = {
                "date": date.isoformat() if date else None,
                "description": description,
                "amount": amount,
                "category": category,
                "type": "income" if amount > 0 else "expense"
            }
            transactions.append(transaction)

        except Exception as e:
            # Skip problematic rows
            continue

    return transactions

def find_column(columns: pd.Index, possible_names: List[str]) -> str:
    """
    Find column name that matches possible names
    """
    columns_lower = [col.lower() for col in columns]
    for name in possible_names:
        if name.lower() in columns_lower:
            return columns[columns_lower.index(name.lower())]
    return None

def categorize_transaction(description: str, amount: float) -> str:
    """
    Categorize transaction based on description
    """
    desc_lower = description.lower()

    # Income categories
    if amount > 0:
        if any(word in desc_lower for word in ['customer', 'payment', 'sale', 'pos', 'till']):
            return 'Sales Revenue'
        return 'Other Income'

    # Expense categories
    if any(word in desc_lower for word in ['rent', 'lease']):
        return 'Rent'
    elif any(word in desc_lower for word in ['salary', 'staff', 'payroll']):
        return 'Staff Salaries'
    elif any(word in desc_lower for word in ['inventory', 'stock', 'purchase', 'supplier']):
        return 'Inventory Purchase'
    elif any(word in desc_lower for word in ['utility', 'electricity', 'water', 'airtime']):
        return 'Utilities'
    elif any(word in desc_lower for word in ['marketing', 'advertising']):
        return 'Marketing'
    elif any(word in desc_lower for word in ['transport', 'fuel']):
        return 'Transport'
    else:
        return 'Miscellaneous'

def generate_summary(transactions: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Generate financial summary
    """
    total_income = sum(t['amount'] for t in transactions if t['amount'] > 0)
    total_expenses = abs(sum(t['amount'] for t in transactions if t['amount'] < 0))
    profit = total_income - total_expenses

    # Category breakdown
    categories = {}
    for t in transactions:
        cat = t['category']
        categories[cat] = categories.get(cat, 0) + abs(t['amount'])

    return {
        "total_income": total_income,
        "total_expenses": total_expenses,
        "estimated_profit": profit,
        "transaction_count": len(transactions),
        "categories": categories
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)