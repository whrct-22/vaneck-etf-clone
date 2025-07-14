'use client'

export default function FundDetails() {
  return (
    <div className="bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Fund Details
        </h2>
        <p className="text-sm text-gray-600 mb-6">as at 14-Jul-25</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Management Style */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">MANAGEMENT STYLE</h4>
            <p className="text-gray-900">Replication</p>
          </div>

          {/* Exchange */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">EXCHANGE</h4>
            <p className="text-gray-900">ASX</p>
          </div>

          {/* ASX Code */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">ASX CODE</h4>
            <p className="text-gray-900">CNEW</p>
          </div>

          {/* Bloomberg Index Code */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">BLOOMBERG INDEX CODE</h4>
            <p className="text-gray-900">MGCNEAUN</p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">NAV</h4>
            <p className="text-gray-900">$7.21</p>
          </div>

          {/* Units Outstanding */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">UNITS OUTSTANDING</h4>
            <p className="text-gray-900">12,964,506</p>
          </div>

          {/* # of Holdings */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2"># OF HOLDINGS</h4>
            <p className="text-gray-900">120</p>
          </div>

          {/* Inception Date */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">INCEPTION DATE</h4>
            <p className="text-gray-900">08-Nov-18</p>
          </div>

          {/* ASX Commencement */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">ASX COMMENCEMENT</h4>
            <p className="text-gray-900">09-Nov-18</p>
          </div>

          {/* Dividend Frequency */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">DIVIDEND FREQUENCY</h4>
            <p className="text-gray-900">One each year</p>
          </div>

          {/* Management Fee */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">MANAGEMENT FEE (P.A.)</h4>
            <p className="text-gray-900">0.95%</p>
          </div>

          {/* Announcements Link */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">ANNOUNCEMENTS LINK</h4>
            <p className="text-blue-600">→</p>
          </div>

          {/* Investment Management Team */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">INVESTMENT MANAGEMENT TEAM</h4>
            <p className="text-blue-600">LINK →</p>
          </div>

          {/* IRESS Code */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">IRESS CODE</h4>
            <p className="text-gray-900">CNEW.AXW</p>
          </div>

          {/* ISIN */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-2">ISIN</h4>
            <p className="text-gray-900">AU0000028185</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 leading-relaxed">
          The NAV is generally calculated daily after all markets at the close price of the securities on the relevant foreign stock exchange. The
          NAV is then converted to AUD based on the relevant London WM Reuters 4pm exchange rate. This means, due to Australia's time zone, that the NAV will generally not
          be updated until around 1pm next business day.
        </div>
      </div>
    </div>
  )
}
