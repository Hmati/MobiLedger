# MobileLedgerKE

Smart financial analysis platform for Kenya's small and medium businesses (SMEs).

## Overview

MobileLedgerKE helps SMEs analyze their finances by importing data from various sources and providing automated insights, categorization, and professional reports.

## Features

- **File Upload**: Support for CSV, Excel, M-Pesa statements, POS exports
- **Auto-Categorization**: AI-powered transaction categorization
- **Financial Analytics**: Revenue, expense, profit analysis
- **Dashboard**: Interactive charts and metrics
- **Reports**: Downloadable PDF/Excel reports
- **AI Insights**: Business recommendations and warnings

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Chart.js (for visualizations)

### Backend
- Python FastAPI
- Pandas (data processing)
- OpenPyXL (Excel parsing)
- SQLAlchemy (database ORM)
- PostgreSQL (database)

## Setup Instructions

### Prerequisites
- Node.js 18+
- Python 3.8+
- PostgreSQL

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Activate virtual environment:
```bash
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables (create .env file):
```env
DATABASE_URL=postgresql://user:password@localhost/mobileledgerke
SECRET_KEY=your-secret-key
```

5. Run database migrations (if using Alembic):
```bash
alembic upgrade head
```

6. Start the server:
```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000

## Database Schema

### Core Tables

- **businesses**: Business information
- **users**: User accounts
- **transactions**: Individual financial transactions
- **imports**: File upload records
- **categories**: Transaction categories
- **reports**: Generated reports
- **insights**: AI-generated insights

## API Endpoints

- `POST /api/upload`: Upload and process financial files
- `GET /api/transactions`: Get transactions for a business
- `GET /api/analytics`: Get financial analytics
- `POST /api/reports`: Generate reports

## Sample Data

Sample datasets are provided in the `sample_data/` directory for testing.

## Deployment

### Backend
- Use Railway, Render, or AWS for hosting
- Set up PostgreSQL database
- Configure environment variables

### Frontend
- Deploy to Vercel or Netlify
- Update API base URL in environment variables

## Pricing Model

- **Free Tier**: 1 upload, 1 report
- **Pay-Per-Report**: KES 99 per report
- **Starter**: KES 499 (5 uploads/reports)
- **Business**: KES 999 (15 uploads/reports)
- **Premium**: KES 2500 (unlimited)

## Security

- AES-256 encryption for data at rest
- JWT authentication
- GDPR and Kenya Data Protection Act 2019 compliance
- Audit logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

© 2024 MobileLedgerKE. All rights reserved.