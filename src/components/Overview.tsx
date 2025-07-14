'use client'

export default function Overview() {
  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Overview
        </h2>

        {/* Fund Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Fund Description</h3>
          <p className="text-gray-700 leading-relaxed">
            CNEW gives investors a portfolio of fundamentally sound companies in China having growth prospects in sectors making up "New
            Economy", namely technology, health care, consumer staples and consumer discretionary. CNEW aims to provide investment returns,
            before fees and other costs, which track the performance of the Index.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key benefits</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Step into China's future prosperity today</h4>
              <p className="text-gray-700">Access companies at the forefront of China's transformation representing the New Economy.</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Diversified across companies and sectors</h4>
              <p className="text-gray-700">Target New Economy companies within the technology, health care, consumer staples and consumer discretionary sectors.</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">A portfolio of China A-shares comprising fundamentally strong companies</h4>
              <p className="text-gray-700">Invests in 120 fundamentally sound and attractively valued companies with growth prospects in China's New Economy.</p>
            </div>
          </div>
        </div>

        {/* Key Risks */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Risks</h3>
          <p className="text-gray-700 leading-relaxed">
            An investment in this China equities ETF carries risks associated with: ASX trading time differences, China, financial markets generally,
            individual company management, industry sectors, foreign currency, sector concentration, political, regulatory and tax risks, fund
            operations, liquidity and tracking an index. See the VanEck China New Economy ETF PDS and TMD for more details.
          </p>
        </div>
      </div>
    </div>
  )
}
