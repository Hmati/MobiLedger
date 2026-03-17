'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setUploading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      alert('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white border-b border-border px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brown-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ML
            </div>
            <span className="font-head font-bold text-lg text-brown-700">
              MobileLedger<span className="text-gold">KE</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-text-mid">Dashboard</span>
            <span className="text-text-mid">Reports</span>
            <span className="text-text-mid">Account</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">
        {/* Upload Section */}
        {!data && (
          <div className="mb-8">
            <h1 className="text-2xl font-head font-bold text-text-dark mb-4">Upload Your Financial Data</h1>
            <div className="border-2 border-dashed border-brown-300 rounded-xl p-8 text-center bg-white hover:border-brown-500 transition-colors">
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-4xl mb-4">📂</div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {uploading ? 'Processing...' : 'Click to Upload Financial File'}
                </h3>
                <p className="text-text-mid text-sm">Supports CSV, Excel (.xlsx/.xls), M-Pesa statements</p>
              </label>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {data && (
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-head font-bold text-text-dark">Your Financial Dashboard</h1>
              <p className="text-text-mid">Analysis of {data.transactions_count} transactions</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-text-light text-sm uppercase tracking-wide">Revenue</div>
                <div className="text-2xl font-head font-bold text-text-dark">
                  KES {data.summary.total_income.toLocaleString()}
                </div>
                <div className="text-success text-sm">↑ 12% vs last month</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-text-light text-sm uppercase tracking-wide">Expenses</div>
                <div className="text-2xl font-head font-bold text-text-dark">
                  KES {data.summary.total_expenses.toLocaleString()}
                </div>
                <div className="text-danger text-sm">↑ 8% vs last month</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-text-light text-sm uppercase tracking-wide">Est. Profit</div>
                <div className="text-2xl font-head font-bold text-text-dark">
                  KES {data.summary.estimated_profit.toLocaleString()}
                </div>
                <div className="text-success text-sm">↑ 18% vs last month</div>
              </div>
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="text-text-light text-sm uppercase tracking-wide">Transactions</div>
                <div className="text-2xl font-head font-bold text-text-dark">
                  {data.summary.transaction_count}
                </div>
                <div className="text-success text-sm">+23 vs last month</div>
              </div>
            </div>

            {/* Charts Placeholder */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-text-dark mb-4">Monthly Revenue vs Expenses</h3>
                <div className="h-48 bg-brown-50 rounded flex items-center justify-center text-text-mid">
                  Chart will be implemented with Chart.js
                </div>
              </div>
              <div className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-text-dark mb-4">Expense Breakdown</h3>
                <div className="h-48 bg-brown-50 rounded flex items-center justify-center text-text-mid">
                  Pie chart for categories
                </div>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold text-text-dark">Recent Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-brown-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wide">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wide">Description</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wide">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wide">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wide">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.transactions.slice(0, 10).map((t: any, i: number) => (
                      <tr key={i} className="border-b border-brown-50">
                        <td className="px-4 py-3 text-sm text-text-dark">{t.date || 'N/A'}</td>
                        <td className="px-4 py-3 text-sm text-text-dark">{t.description}</td>
                        <td className={`px-4 py-3 text-sm font-semibold ${t.amount > 0 ? 'text-success' : 'text-danger'}`}>
                          {t.amount > 0 ? '+' : ''}KES {Math.abs(t.amount).toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-text-dark">{t.category}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${t.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {t.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}