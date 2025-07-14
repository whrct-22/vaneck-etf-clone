'use client'

export default function Holdings() {
  return (
    <div className="bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Holdings & allocations
        </h2>

        {/* Yields Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Yields</h3>
          <p className="text-sm text-gray-600 mb-4">as at 30-Jun-25</p>

          <div className="mb-4">
            <span className="text-sm font-medium text-gray-600">DIVIDEND YIELD (%)</span>
            <div className="text-xl font-bold text-gray-900">1.95</div>
            <p className="text-sm text-gray-600 mt-1">
              Dividend Yield is the weighted average of each portfolio security's distributed income during the prior twelve months.
            </p>
          </div>
        </div>

        {/* Sector Weightings */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector weightings (%)</h3>
          <p className="text-sm text-gray-600 mb-6">as at 30-Jun-25</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Technology Hardware & Equipment - 18.7% */}
                  <path d="M 100 20 A 80 80 0 0 1 156.6 45.4 L 100 100 Z" fill="#1e3a8a" />

                  {/* Food, Beverage & Tobacco - 17.7% */}
                  <path d="M 156.6 45.4 A 80 80 0 0 1 186.3 120.7 L 100 100 Z" fill="#1e40af" />

                  {/* Pharmaceuticals, Biotechnology - 16.9% */}
                  <path d="M 186.3 120.7 A 80 80 0 0 1 143.2 171.3 L 100 100 Z" fill="#3b82f6" />

                  {/* Consumer Durables & Apparel - 7.8% */}
                  <path d="M 143.2 171.3 A 80 80 0 0 1 100 180 L 100 100 Z" fill="#14b8a6" />

                  {/* Capital Goods - 5.9% */}
                  <path d="M 100 180 A 80 80 0 0 1 71.7 170.2 L 100 100 Z" fill="#06b6d4" />

                  {/* Materials - 5.8% */}
                  <path d="M 71.7 170.2 A 80 80 0 0 1 43.4 154.6 L 100 100 Z" fill="#6b7280" />

                  {/* Health Care Equipment & Services - 5.6% */}
                  <path d="M 43.4 154.6 A 80 80 0 0 1 20 100 L 100 100 Z" fill="#4b5563" />

                  {/* Semiconductors - 3.7% */}
                  <path d="M 20 100 A 80 80 0 0 1 30.9 70.7 L 100 100 Z" fill="#ef4444" />

                  {/* Automobiles & Components - 2.7% */}
                  <path d="M 30.9 70.7 A 80 80 0 0 1 43.4 45.4 L 100 100 Z" fill="#f87171" />

                  {/* Software & Services - 1.6% */}
                  <path d="M 43.4 45.4 A 80 80 0 0 1 56.8 28.7 L 100 100 Z" fill="#a855f7" />

                  {/* Retailing - 1.6% */}
                  <path d="M 56.8 28.7 A 80 80 0 0 1 70.2 20.4 L 100 100 Z" fill="#ec4899" />

                  {/* Food & Staples Retailing - 1.4% */}
                  <path d="M 70.2 20.4 A 80 80 0 0 1 83.0 17.3 L 100 100 Z" fill="#f97316" />

                  {/* Commercial & Professional Services - 0.8% */}
                  <path d="M 83.0 17.3 A 80 80 0 0 1 91.5 18.7 L 100 100 Z" fill="#eab308" />

                  {/* Consumer Services - 0.8% */}
                  <path d="M 91.5 18.7 A 80 80 0 0 1 100 20 L 100 100 Z" fill="#22c55e" />

                  {/* Inner circle */}
                  <circle cx="100" cy="100" r="30" fill="white" />
                </svg>
              </div>
            </div>

            {/* Sector Data */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Sector</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-800 rounded-full"></div>
                    <span>Technology Hardware & Equipment</span>
                    <span className="ml-auto font-medium">18.7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Food, Beverage & Tobacco</span>
                    <span className="ml-auto font-medium">17.7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Pharmaceuticals, Biotechnology</span>
                    <span className="ml-auto font-medium">16.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    <span>Consumer Durables & Apparel</span>
                    <span className="ml-auto font-medium">7.8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
                    <span>Capital Goods</span>
                    <span className="ml-auto font-medium">5.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span>Materials</span>
                    <span className="ml-auto font-medium">5.8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span>Health Care Equipment & Services</span>
                    <span className="ml-auto font-medium">5.6</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Weightings (%)</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Semiconductors & Semiconductor Equipment</span>
                    <span className="ml-auto font-medium">3.7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                    <span>Automobiles & Components</span>
                    <span className="ml-auto font-medium">2.7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>Software & Services</span>
                    <span className="ml-auto font-medium">1.6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span>Retailing</span>
                    <span className="ml-auto font-medium">1.6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>Food & Staples Retailing</span>
                    <span className="ml-auto font-medium">1.4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Commercial & Professional Services</span>
                    <span className="ml-auto font-medium">0.8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Consumer Services</span>
                    <span className="ml-auto font-medium">0.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Composition */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio composition (%)</h3>
          <p className="text-sm text-gray-600 mb-4">as at 11-Jul-25</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Asset classes</th>
                  <th className="px-4 py-3 text-left text-sm">% of fund net assets</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Stocks</td>
                  <td className="px-4 py-2">99.87</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Bonds</td>
                  <td className="px-4 py-2">0.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Other</td>
                  <td className="px-4 py-2">0.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Cash</td>
                  <td className="px-4 py-2">0.13</td>
                </tr>
                <tr className="border-b border-gray-200 font-semibold">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2">100.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* All Holdings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">All holdings (%)</h3>
          <p className="text-sm text-gray-600 mb-4">as at 11-Jul-25</p>
          <p className="text-sm text-gray-600 mb-4">No. of holdings : 120</p>

          <div className="mb-4">
            <a href="#" className="text-blue-600 text-sm">Download all holdings ↓</a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Holding name</th>
                  <th className="px-4 py-3 text-left text-sm">Ticker</th>
                  <th className="px-4 py-3 text-left text-sm">No. of securities held</th>
                  <th className="px-4 py-3 text-left text-sm">Market value</th>
                  <th className="px-4 py-3 text-left text-sm">% of fund net assets</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Zhejiang Tiantao Vehicles Co Ltd</td>
                  <td className="px-4 py-2">301345 CH</td>
                  <td className="px-4 py-2">45,300</td>
                  <td className="px-4 py-2">1,389,238</td>
                  <td className="px-4 py-2">1.48</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Guangzhou Biosystem Tech Co Ltd</td>
                  <td className="px-4 py-2">003010 CH</td>
                  <td className="px-4 py-2">96,100</td>
                  <td className="px-4 py-2">1,105,577</td>
                  <td className="px-4 py-2">1.19</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Shenzhen Binghuasui Network Co Ltd</td>
                  <td className="px-4 py-2">300533 CH</td>
                  <td className="px-4 py-2">135,700</td>
                  <td className="px-4 py-2">1,079,985</td>
                  <td className="px-4 py-2">1.16</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            These are not recommendations to buy or sell any security.
          </p>
        </div>
      </div>
    </div>
  )
}
