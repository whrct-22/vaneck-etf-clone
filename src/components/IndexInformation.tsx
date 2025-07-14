'use client'

export default function IndexInformation() {
  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Index Key points</h2>

        {/* Underlying Index */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Underlying index:</h3>
          <p className="text-gray-700">MarketGrader China New Economy Index</p>
        </div>

        {/* Underlying universe */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Underlying universe:</h3>
          <p className="text-gray-700 leading-relaxed">
            All A-shares listed on the Shanghai and Shenzhen Stock Exchanges that are covered and rated by MarketGrader, that are classified as
            consumer discretionary, consumer staples, health care or technology, and which have not suffered losses for two or more
            consecutive years.
          </p>
        </div>

        {/* Selection criteria */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Selection criteria:</h3>
          <p className="text-gray-700 leading-relaxed">
            All index components are selected based on their overall MarketGrader grade. Built on a scale between 0 and 100, the MarketGrader
            grade is based on 24 fundamental indicators, which are broken down into four analytical categories: growth, value, profitability and
            cash flow. All of MarketGrader's indicators and overall grades are calculated daily for all companies under coverage.
          </p>
        </div>

        {/* Weighting */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Weighting:</h3>
          <p className="text-gray-700">The index is equally weighted.</p>
        </div>

        {/* Market Capitalisation requirements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Capitalisation requirements:</h3>
          <p className="text-gray-700 leading-relaxed">
            All index constituents must have a minimum total market cap of USD 500 million. At least 20% of all index constituents (24
            companies, 6 from each sector) must be designated as large or mid-caps according to MarketGrader's annual size classification of all
            Shanghai and Shenzhen-listed equities under coverage.
          </p>
        </div>

        {/* Liquidity requirements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Liquidity requirements:</h3>
          <p className="text-gray-700">A minimum 3-month daily traded value of USD 5 million.</p>
        </div>

        {/* Rebalance frequency */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rebalance frequency:</h3>
          <p className="text-gray-700 leading-relaxed">
            The index is reconstituted and rebalanced twice a year on the next trading day after the close of trading on the second Friday in June
            and December.
          </p>
        </div>

        <div className="mb-8">
          <a href="#" className="text-blue-600 hover:text-blue-800">For full details of the methodology, click here.</a>
        </div>

        {/* Index Profile */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">Index Profile</h2>
          <p className="text-sm text-gray-600 mb-6">as at 14-Jul-25</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">LAUNCH DATE</h4>
              <p className="text-gray-900 font-semibold">15-Jun-17</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">BASE DATE</h4>
              <p className="text-gray-900 font-semibold">31-Dec-07</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">REBALANCE FREQUENCY</h4>
              <p className="text-gray-900 font-semibold">Semi-Annually</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
