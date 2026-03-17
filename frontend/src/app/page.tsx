export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brown-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ML
            </div>
            <span className="font-head font-bold text-lg text-brown-700">
              MobileLedger<span className="text-gold">KE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-text-mid hover:text-brown-700 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-text-mid hover:text-brown-700 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-text-mid hover:text-brown-700 transition-colors"
            >
              FAQ
            </a>
            <button className="bg-brown-600 text-white px-4 py-2 rounded-lg hover:bg-brown-700 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brown-800 via-brown-600 to-brown-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
            🇰🇪 Built for Kenyan SMEs
          </div>
          <h1 className="text-4xl md:text-6xl font-head font-bold mb-6">
            Smart Finance for<br />
            <span className="text-gold-light">Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Upload your M-Pesa statements, sales records, or Excel files. Get instant insights,
            professional reports, and AI-powered advice — no accountant needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gold text-brown-900 px-8 py-4 rounded-xl font-semibold hover:bg-gold-light transition-colors">
              Start Free — Upload Your First File
            </button>
            <a
              href="#demo"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              See Demo Dashboard
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-head font-bold text-gold-light">2,400+</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">SMEs Served</div>
            </div>
            <div>
              <div className="text-2xl font-head font-bold text-gold-light">KES 1.2B</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">Transactions Analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-head font-bold text-gold-light">99 KES</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">Per Report</div>
            </div>
            <div>
              <div className="text-2xl font-head font-bold text-gold-light">5 mins</div>
              <div className="text-xs text-white/60 uppercase tracking-wide">To Your First Insight</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-brown-50 border-b border-border py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 flex-wrap text-sm text-text-mid">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Free first upload
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            M-Pesa statement support
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            No accounting knowledge needed
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            GDPR & Data Act compliant
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            Kenyan business focus
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">How It Works</div>
          <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
            From Upload to Insight in Minutes
          </h2>
          <p className="text-text-mid text-lg">Three simple steps and your finances are clear.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-border"></div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brown-600 text-white rounded-full flex items-center justify-center font-head font-bold text-xl mx-auto mb-4 border-4 border-cream">
              1
            </div>
            <h3 className="font-semibold text-text-dark mb-2">Upload Your File</h3>
            <p className="text-text-mid text-sm">Drop in your M-Pesa statement, Excel sheet, CSV, or POS export. We accept any format.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brown-600 text-white rounded-full flex items-center justify-center font-head font-bold text-xl mx-auto mb-4 border-4 border-cream">
              2
            </div>
            <h3 className="font-semibold text-text-dark mb-2">AI Cleans & Analyzes</h3>
            <p className="text-text-mid text-sm">Our engine auto-detects columns, fixes messy data, and categorizes every transaction.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brown-600 text-white rounded-full flex items-center justify-center font-head font-bold text-xl mx-auto mb-4 border-4 border-cream">
              3
            </div>
            <h3 className="font-semibold text-text-dark mb-2">Get Your Dashboard</h3>
            <p className="text-text-mid text-sm">Instant charts, insights, and a plain-language summary of your business health.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brown-600 text-white rounded-full flex items-center justify-center font-head font-bold text-xl mx-auto mb-4 border-4 border-cream">
              4
            </div>
            <h3 className="font-semibold text-text-dark mb-2">Download Your Report</h3>
            <p className="text-text-mid text-sm">PDF or Excel report ready to share with partners, banks, or keep for your records.</p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Data Ingestion</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Upload Any Financial File
            </h2>
            <p className="text-text-mid text-lg">Our smart parser handles messy, real-world business files automatically.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="border-2 border-dashed border-brown-300 rounded-xl p-8 text-center bg-white hover:border-brown-500 transition-colors cursor-pointer">
                <div className="text-4xl mb-4">📂</div>
                <h3 className="font-semibold text-text-dark mb-2">Drag & Drop or Click to Upload</h3>
                <p className="text-text-mid text-sm mb-4">Supports M-Pesa CSV/Excel, POS exports, and bank statements</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-xs">M-Pesa CSV</span>
                  <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-xs">Excel .xlsx</span>
                  <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-xs">CSV</span>
                  <span className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-xs">Bank PDF</span>
                </div>
              </div>
              <div className="mt-6 bg-white border border-border rounded-xl p-6">
                <h4 className="font-semibold text-text-dark mb-4">What We Auto-Detect</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">Transaction dates</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">Amounts & balances</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">M-Pesa references</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">Phone numbers</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">Income vs expense</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-green-500">✓</span>
                    <span className="text-text-mid">Payment method</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="bg-brown-700 p-4 text-white text-sm font-semibold">
                Processing Queue
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 p-3 border-b border-brown-50">
                  <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center">📊</div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-dark text-sm">mpesa_statement_feb2024.csv</div>
                    <div className="text-text-light text-xs">847 transactions · 2.3 MB</div>
                    <div className="w-full bg-brown-100 rounded-full h-1 mt-1">
                      <div className="bg-brown-600 h-1 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="text-success font-semibold text-xs">Done ✓</div>
                </div>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 bg-brown-100 rounded-lg flex items-center justify-center">📗</div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-dark text-sm">january_sales_ledger.xlsx</div>
                    <div className="text-text-light text-xs">312 rows · 156 KB</div>
                    <div className="w-full bg-brown-100 rounded-full h-1 mt-1">
                      <div className="bg-brown-600 h-1 rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  <div className="text-gold font-semibold text-xs">78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Data Table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Sample Data</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              See How We Process Your Data
            </h2>
            <p className="text-text-mid text-lg">Upload any format and we'll automatically detect, clean, and categorize your transactions.</p>
          </div>
          <div className="bg-white border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brown-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Reference</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Amount (KES)</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-text-light uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown-50">
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">02 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Customer Payment - Jane Mwangi</td>
                    <td className="px-4 py-3 text-sm text-text-dark">QHR8892K1</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">+KES 4,500.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Sales Revenue</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Income</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">02 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Wholesale Supplier - Eastleigh Beauty</td>
                    <td className="px-4 py-3 text-sm text-text-dark">OGT4421P2</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">-KES 12,000.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Inventory Purchase</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expense</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">03 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Till Payment - Walk-in Customer</td>
                    <td className="px-4 py-3 text-sm text-text-dark">POS-00441</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">+KES 2,800.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">POS Revenue</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Income</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">03 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Safaricom Airtime Purchase</td>
                    <td className="px-4 py-3 text-sm text-text-dark">ADM9931T0</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">-KES 500.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Utilities</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expense</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">05 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">MPESA - Rent Payment Landlord</td>
                    <td className="px-4 py-3 text-sm text-text-dark">QMN7712S4</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">-KES 18,000.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Rent</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expense</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">06 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Customer Deposit - Wig Order</td>
                    <td className="px-4 py-3 text-sm text-text-dark">RTP5543W9</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">+KES 8,000.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Sales Revenue</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Income</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">07 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Staff Salary - Aisha Hassan</td>
                    <td className="px-4 py-3 text-sm text-text-dark">SAL-0012</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">-KES 15,000.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Staff Salaries</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expense</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">08 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Social Media Marketing - Canva</td>
                    <td className="px-4 py-3 text-sm text-text-dark">FBK-9922</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">-KES 1,200.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Marketing</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Expense</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-brown-50">
                    <td className="px-4 py-3 text-sm text-text-dark">09 Feb 2024</td>
                    <td className="px-4 py-3 text-sm text-text-dark">Bulk Customer Payment - M-Pesa</td>
                    <td className="px-4 py-3 text-sm text-text-dark">QHK2219L3</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">+KES 6,200.00</td>
                    <td className="px-4 py-3 text-sm text-text-mid">Sales Revenue</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Income</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <section className="py-20 px-6 bg-cream" id="demo">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Dashboard Preview</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Your Financial Dashboard
            </h2>
            <p className="text-text-mid text-lg">Interactive charts, insights, and professional reports in one place.</p>
          </div>
          <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="bg-brown-700 text-white p-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-white/10 rounded px-3 py-1 text-sm flex-1 text-center">
                MobileLedgerKE Dashboard
              </div>
            </div>
            <div className="grid md:grid-cols-4 min-h-96">
              <div className="bg-brown-50 border-r border-border p-4">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-white border border-border cursor-pointer hover:bg-brown-100">
                    📊 Overview
                  </div>
                  <div className="p-2 rounded-lg bg-brown-100 border border-brown-300 cursor-pointer">
                    💰 Transactions
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-border cursor-pointer hover:bg-brown-100">
                    📈 Reports
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-border cursor-pointer hover:bg-brown-100">
                    ⚙️ Settings
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-cream p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brown-700">KES 2.4M</div>
                    <div className="text-xs text-text-light uppercase">Total Revenue</div>
                  </div>
                  <div className="bg-cream p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brown-700">KES 1.8M</div>
                    <div className="text-xs text-text-light uppercase">Total Expenses</div>
                  </div>
                  <div className="bg-cream p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">KES 600K</div>
                    <div className="text-xs text-text-light uppercase">Net Profit</div>
                  </div>
                  <div className="bg-cream p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-brown-700">25%</div>
                    <div className="text-xs text-text-light uppercase">Profit Margin</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cream p-4 rounded-lg">
                    <h4 className="font-semibold text-text-dark mb-3">Revenue vs Expenses</h4>
                    <div className="h-32 bg-white rounded border border-border flex items-end justify-center gap-2 p-4">
                      <div className="w-8 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                      <div className="w-8 bg-red-500 rounded-t" style={{height: '60%'}}></div>
                      <div className="w-8 bg-green-500 rounded-t" style={{height: '90%'}}></div>
                      <div className="w-8 bg-red-500 rounded-t" style={{height: '50%'}}></div>
                    </div>
                  </div>
                  <div className="bg-cream p-4 rounded-lg">
                    <h4 className="font-semibold text-text-dark mb-3">Top Categories</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sales Revenue</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div className="w-full bg-brown-100 rounded-full h-2">
                        <div className="bg-brown-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cost of Goods</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="w-full bg-brown-100 rounded-full h-2">
                        <div className="bg-brown-600 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Features</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Everything You Need for Financial Clarity
            </h2>
            <p className="text-text-mid text-lg">Powerful tools designed specifically for Kenyan SMEs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                🤖
              </div>
              <h3 className="font-semibold text-text-dark mb-2">AI Financial Assistant</h3>
              <p className="text-text-mid text-sm">Ask questions about your business in plain Swahili or English. Get cash flow warnings, unusual spending alerts, and growth opportunities automatically.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                📱
              </div>
              <h3 className="font-semibold text-text-dark mb-2">M-Pesa Statement Analysis</h3>
              <p className="text-text-mid text-sm">Upload your M-Pesa CSV directly. We parse all transactions, separate personal from business, and give you a clean business ledger.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                📊
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Smart Categorization</h3>
              <p className="text-text-mid text-sm">Transactions are auto-tagged into income and expense categories. Manually correct any misclassification with one click.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                📈
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Profit Estimation</h3>
              <p className="text-text-mid text-sm">Get a clear estimated profit figure each month. No accounting degree needed — just upload and we handle the calculations.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                📋
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Downloadable Reports</h3>
              <p className="text-text-mid text-sm">Professional PDF and Excel reports for your records, loan applications, or sharing with a business partner or investor.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4">
                🔒
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Secure & Private</h3>
              <p className="text-text-mid text-sm">Your financial data is encrypted in transit and at rest. We never share or sell your data. Full compliance with Kenya's Data Protection Act 2019.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Categories */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Categories</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Smart Transaction Categorization
            </h2>
            <p className="text-text-mid text-lg">We automatically organize your transactions into meaningful business categories.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-text-dark mb-4 pb-2 border-b border-brown-300">Income Categories</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-text-dark">Sales Revenue</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-text-dark">Customer Payments</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-sm text-text-dark">POS / Till Revenue</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>
                  <span className="text-sm text-text-dark">Service Income</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-lime-600 rounded-full"></div>
                  <span className="text-sm text-text-dark">Deposits Received</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                  <span className="text-sm text-text-dark">Other Income</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text-dark mb-4 pb-2 border-b border-brown-300">Expense Categories</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-text-dark">Inventory & Stock</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="text-sm text-text-dark">Rent & Premises</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-red-700 rounded-full"></div>
                  <span className="text-sm text-text-dark">Staff Salaries</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-red-800 rounded-full"></div>
                  <span className="text-sm text-text-dark">Transport</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-sm text-text-dark">Utilities & Airtime</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-text-dark">Marketing</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-text-dark">Miscellaneous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">AI Insights</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Smart Business Recommendations
            </h2>
            <p className="text-text-mid text-lg">Get actionable insights to grow your business and improve cash flow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">Rent is 28% of Monthly Expenses</h4>
              <p className="text-text-mid text-sm mb-3">Your rent payment (KES 18,000) represents a significant share of total spending and limits your profitability.</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-yellow-600">Recommendation:</strong> Consider negotiating a fixed-term lease extension in exchange for a reduced rate, or explore shared business spaces in your area.
              </div>
            </div>
            <div className="bg-cream border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">Revenue Up 15% from Last Month</h4>
              <p className="text-text-mid text-sm mb-3">Your sales in February (KES 89,200) grew compared to January (KES 77,600). Strong performance, keep it up!</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-green-600">Recommendation:</strong> Identify which products or services drove the increase and promote them more actively in March.
              </div>
            </div>
            <div className="bg-cream border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">Inventory Costs Exceed Weekly Sales</h4>
              <p className="text-text-mid text-sm mb-3">You spent KES 20,786 on inventory but only earned KES 15,200 in the same period. This signals potential overstock.</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-red-600">Recommendation:</strong> Review slow-moving products and pause reordering until current stock is sold. Prioritize high-margin items.
              </div>
            </div>
            <div className="bg-cream border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">Weekends Drive 42% of Revenue</h4>
              <p className="text-text-mid text-sm mb-3">Saturday and Sunday consistently generate the highest sales. Your weekend foot traffic is your strongest asset.</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-green-600">Recommendation:</strong> Consider extra staff, special promotions, or new product launches on weekends to maximize this pattern.
              </div>
            </div>
            <div className="bg-cream border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">Cash Flow Tight Mid-Month</h4>
              <p className="text-text-mid text-sm mb-3">Your balance dips below KES 5,000 between the 12th–18th of each month, creating a recurring gap period.</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-yellow-600">Recommendation:</strong> Time your supplier payments for after the 20th when customer payments typically arrive, to avoid a cash squeeze.
              </div>
            </div>
            <div className="bg-cream border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-text-dark mb-2">3 Repeat Customers = 22% of Revenue</h4>
              <p className="text-text-mid text-sm mb-3">A small group of loyal clients represents a large portion of your income. Protecting these relationships is critical.</p>
              <div className="bg-white p-3 rounded text-sm">
                <strong className="text-blue-600">Recommendation:</strong> Create a simple loyalty reward (e.g. a free service after 5 visits) to keep your top customers coming back.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Reports</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Professional Financial Reports
            </h2>
            <p className="text-text-mid text-lg">Generate comprehensive reports for banks, investors, and tax authorities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🏢
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Business Financial Summary</h3>
              <p className="text-text-mid text-sm mb-4">Complete overview: revenue, expenses, profit, and trends for your period</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-brown-600 text-white px-3 py-2 rounded text-sm hover:bg-brown-700">📄 PDF</button>
                <button className="flex-1 bg-white border border-border text-brown-600 px-3 py-2 rounded text-sm hover:bg-brown-50">📗 Excel</button>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                📈
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Monthly Revenue Report</h3>
              <p className="text-text-mid text-sm mb-4">Daily and weekly revenue breakdown with trend charts and growth metrics</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-brown-600 text-white px-3 py-2 rounded text-sm hover:bg-brown-700">📄 PDF</button>
                <button className="flex-1 bg-white border border-border text-brown-600 px-3 py-2 rounded text-sm hover:bg-brown-50">📗 Excel</button>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                💸
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Expense Analysis Report</h3>
              <p className="text-text-mid text-sm mb-4">Categorized spending breakdown, top expenses, and cost reduction opportunities</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-brown-600 text-white px-3 py-2 rounded text-sm hover:bg-brown-700">📄 PDF</button>
                <button className="flex-1 bg-white border border-border text-brown-600 px-3 py-2 rounded text-sm hover:bg-brown-50">📗 Excel</button>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                💰
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Cash Flow Statement</h3>
              <p className="text-text-mid text-sm mb-4">Day-by-day money movement with opening/closing balances and cash position</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-brown-600 text-white px-3 py-2 rounded text-sm hover:bg-brown-700">📄 PDF</button>
                <button className="flex-1 bg-white border border-border text-brown-600 px-3 py-2 rounded text-sm hover:bg-brown-50">📗 Excel</button>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Profit Estimation Report</h3>
              <p className="text-text-mid text-sm mb-4">Estimated gross and net profit with AI-powered profitability recommendations</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-brown-600 text-white px-3 py-2 rounded text-sm hover:bg-brown-700">📄 PDF</button>
                <button className="flex-1 bg-white border border-border text-brown-600 px-3 py-2 rounded text-sm hover:bg-brown-50">📗 Excel</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Pricing</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-text-mid text-lg">Start free, pay only for the reports you need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">Free</h3>
                <div className="text-3xl font-bold text-brown-600 mb-1">KSh 0</div>
                <p className="text-text-mid text-sm">Forever free</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Upload 1 file per month</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Basic financial summary</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Revenue & expense charts</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Export to PDF</span>
                </li>
              </ul>
              <button className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 font-medium">
                Get Started Free
              </button>
            </div>
            <div className="bg-white border-2 border-brown-600 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">Pay-Per-Report</h3>
                <div className="text-3xl font-bold text-brown-600 mb-1">KSh 500</div>
                <p className="text-text-mid text-sm">Per report</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited file uploads</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>All report types</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>AI-powered insights</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Export to PDF & Excel</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 font-medium">
                Start Now
              </button>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">Starter</h3>
                <div className="text-3xl font-bold text-brown-600 mb-1">KSh 2,500</div>
                <p className="text-text-mid text-sm">Per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Everything in Pay-Per-Report</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Up to 50 reports/month</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Data backup</span>
                </li>
              </ul>
              <button className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 font-medium">
                Choose Starter
              </button>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text-dark mb-2">Business</h3>
                <div className="text-3xl font-bold text-brown-600 mb-1">KSh 7,500</div>
                <p className="text-text-mid text-sm">Per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Unlimited reports</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 font-medium">
                Choose Business
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Technology</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Built for Scale & Security
            </h2>
            <p className="text-text-mid text-lg">Enterprise-grade infrastructure with bank-level security.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brown-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ☁️
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Cloud Infrastructure</h3>
              <p className="text-text-mid text-sm">Hosted on AWS with 99.9% uptime, automatic scaling, and global CDN.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brown-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Bank-Level Security</h3>
              <p className="text-text-mid text-sm">AES-256 encryption, SOC 2 compliance, and regular security audits.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brown-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🤖
              </div>
              <h3 className="font-semibold text-text-dark mb-2">AI-Powered Processing</h3>
              <p className="text-text-mid text-sm">Machine learning algorithms trained on millions of financial transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">Security & Compliance</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Your Data is Safe With Us
            </h2>
            <p className="text-text-mid text-lg">We take data protection seriously and comply with Kenyan and international standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🔐
              </div>
              <h3 className="font-semibold text-text-dark mb-2">End-to-End Encryption</h3>
              <p className="text-text-mid text-sm">All data encrypted with AES-256 during transmission and storage.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                📋
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Data Protection Act</h3>
              <p className="text-text-mid text-sm">Fully compliant with Kenya's Data Protection Act 2019.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🗑️
              </div>
              <h3 className="font-semibold text-text-dark mb-2">Data Deletion</h3>
              <p className="text-text-mid text-sm">You control your data - delete anytime with permanent removal.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                👁️
              </div>
              <h3 className="font-semibold text-text-dark mb-2">No Data Mining</h3>
              <p className="text-text-mid text-sm">We don't sell or analyze your data for marketing purposes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-brown-500 font-semibold uppercase tracking-wide mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-head font-bold text-text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-mid text-lg">Everything you need to know about MobileLedgerKE.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                Do I need to understand accounting to use MobileLedgerKE?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                No. MobileLedgerKE is built for business owners who are not accountants. Just upload your M-Pesa statement or sales file, and we turn it into plain-language summaries and charts. No jargon, no complicated forms.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                What file formats can I upload?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                We support CSV files, Excel workbooks (.xlsx), M-Pesa statements (the CSV you download from MySafaricom app), POS system exports, and bank statement downloads. If you are unsure about your format, contact us on WhatsApp and we will help you.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                How do I get my M-Pesa statement?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Open the MySafaricom app, go to M-Pesa, select Statement, choose your date range (up to 3 months), and request the statement. It will be emailed to you as a CSV or PDF. Download it and upload it directly to MobileLedgerKE.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                Is my financial data safe?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Yes. We take data security very seriously. Your files are encrypted using AES-256 encryption both when uploaded and when stored. We comply with Kenya's Data Protection Act 2019 and do not sell or share your data with anyone. You can delete your data at any time.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                How do I pay? Do you accept M-Pesa?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Yes, we accept M-Pesa payments (Paybill or Till number), debit/credit cards, and bank transfers. Payments are one-time — you pay for a package and use it until your upload/report credits run out. There is no automatic monthly billing.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                Can the AI make mistakes in categorizing transactions?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Yes, occasionally the AI might miscategorize an unusual transaction. That's why we allow you to manually correct any category with a single click. The more you use the platform, the better it learns your specific business patterns.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                Can I use this for my salon, shop, or market stall?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Absolutely. MobileLedgerKE is designed for salons, cosmetics shops, wig businesses, candle businesses, restaurants, kiosks, market traders, retail dukas, and any other small or medium business. If you receive money and spend money, we can help you understand your finances.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                What is the difference between the packages?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                The main differences are how many document uploads and report downloads you can do, and whether you get AI-powered insights. The free tier lets you try the platform once. Pay-Per-Report is for occasional use. Starter and Business are for regular use, and Premium is for businesses that analyze finances frequently.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                How long does it take to analyze a file?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Most files are processed within 1–3 minutes. Large M-Pesa statements with thousands of transactions may take up to 5 minutes. You will receive a notification when your analysis is ready, and you can close the browser and come back.
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <button className="w-full text-left p-6 font-semibold text-text-dark hover:bg-brown-50 flex justify-between items-center">
                Can I share reports with my bank or SACCO?
                <span className="text-brown-500 text-xl">▼</span>
              </button>
              <div className="px-6 pb-6 text-text-mid">
                Yes. Our PDF reports are formatted professionally and can be shared with banks, SACCOs, investors, or grant applications. They include your business name, period, revenue, expenses, and profit estimates in a clean, readable format.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Contact */}
      <section className="py-20 px-6 bg-brown-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-head font-bold mb-4">
            Need Help? We're Here for You
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get instant support via WhatsApp or email. Our team of financial experts is ready to help.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hi%20MobileLedgerKE%20team%2C%20I%20need%20help%20with..."
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors text-lg"
          >
            <span className="text-2xl">💬</span>
            Chat on WhatsApp
          </a>
          <p className="text-white/60 text-sm mt-4">
            Response time: Usually within 2 hours during business hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-white/60 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-head font-bold text-lg text-white mb-4">
                <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2">
                  ML
                </div>
                MobileLedger<span className="text-gold-light">KE</span>
              </div>
              <p className="text-sm">Smart financial analysis for Kenya's small and medium businesses. No accounting knowledge required.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#demo" className="block hover:text-white transition-colors">Dashboard Demo</a>
                <a href="/dashboard" className="block hover:text-white transition-colors">Upload Files</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
                <a href="https://wa.me/254700000000" className="block hover:text-white transition-colors">WhatsApp Support</a>
                <a href="mailto:support@mobileledger.co.ke" className="block hover:text-white transition-colors">Email Support</a>
                <a href="#" className="block hover:text-white transition-colors">User Guide (PDF)</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-white transition-colors">Data Protection</a>
                <a href="#" className="block hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 MobileLedgerKE. All rights reserved. Nairobi, Kenya.</p>
            <div className="flex gap-4">
              <span className="bg-white/8 border border-white/20 rounded px-3 py-1 text-xs">Kenya Data Protection Act 2019</span>
              <span className="bg-white/8 border border-white/20 rounded px-3 py-1 text-xs">AES-256 Encrypted</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
