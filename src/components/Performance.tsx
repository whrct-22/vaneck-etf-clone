'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Performance() {
  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Performance
        </h2>

        {/* Prices Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prices</h3>
          <p className="text-sm text-gray-600 mb-4">as at 14-Jul-25</p>

          {/* Price Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">Volume 30-day Avg</th>
                  <th className="px-4 py-3 text-left text-sm">Daily change NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">YTD change NAV/ Last trade</th>
                  <th className="px-4 py-3 text-left text-sm">Premium/ Discount</th>
                  <th className="px-4 py-3 text-left text-sm">Premium/ Discount Distribution Charts</th>
                  <th className="px-4 py-3 text-left text-sm">NAV & Premium/Discount History</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3">
                    <div>CNEW</div>
                    <div className="font-semibold">$7.21</div>
                    <div className="font-semibold">$7.14</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>$2084.50</div>
                    <div>40967.00</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>▲ $0 / +0.74%</div>
                    <div>▲ $0 / —</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>—</div>
                    <div>—</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>4.07</div>
                    <div>-0.96%</div>
                  </td>
                  <td className="px-4 py-3">
                    <Select>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="SELECT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chart">Chart</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance History */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance history (%)</h3>

          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-gray-600 text-white text-sm">Month End as at 30-Jun-25</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm">Quarter End as at 30-Jun-25</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">1 Mth</th>
                  <th className="px-4 py-3 text-left text-sm">3 Mths</th>
                  <th className="px-4 py-3 text-left text-sm">6 Mths</th>
                  <th className="px-4 py-3 text-left text-sm">1 Yr</th>
                  <th className="px-4 py-3 text-left text-sm">3 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">5 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">10 Yrs p.a.</th>
                  <th className="px-4 py-3 text-left text-sm">ETF Inception p.a.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Price return</td>
                  <td className="px-4 py-2">1.00</td>
                  <td className="px-4 py-2">-1.11</td>
                  <td className="px-4 py-2">0.72</td>
                  <td className="px-4 py-2">21.83</td>
                  <td className="px-4 py-2">-3.43</td>
                  <td className="px-4 py-2">-3.84</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">5.69</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Income return</td>
                  <td className="px-4 py-2">1.00</td>
                  <td className="px-4 py-2">0.98</td>
                  <td className="px-4 py-2">0.99</td>
                  <td className="px-4 py-2">1.21</td>
                  <td className="px-4 py-2">1.45</td>
                  <td className="px-4 py-2">1.39</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">1.55</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Total return</td>
                  <td className="px-4 py-2">2.00</td>
                  <td className="px-4 py-2">-0.13</td>
                  <td className="px-4 py-2">1.71</td>
                  <td className="px-4 py-2">23.04</td>
                  <td className="px-4 py-2">-1.98</td>
                  <td className="px-4 py-2">-2.45</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2">7.24</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">Index (MGCNEAUN)</td>
                  <td className="px-4 py-2">2.00</td>
                  <td className="px-4 py-2">-0.03</td>
                  <td className="px-4 py-2">2.06</td>
                  <td className="px-4 py-2">24.22</td>
                  <td className="px-4 py-2">-2.89</td>
                  <td className="px-4 py-2">-1.37</td>
                  <td className="px-4 py-2">1.68</td>
                  <td className="px-4 py-2">8.47</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-600 text-sm">View all indices</a>
            <a href="#" className="text-blue-600 text-sm">View all ETFs</a>
          </div>

          <p className="text-xs text-gray-600 mt-4 leading-relaxed">
            The tables above show past performance of the ETF from 8 November 2018. Index performance shown prior to 15 June 2017 is simulated based on the current index
            methodology. The change of name in the index was to continue the existing methodology when the original index methodology was changed in September 2021. Results are
            calculated to the last trading day of the month in China and assume immediate reinvestment of distributions. ETF results are net of management fees and costs, but before
            brokerage fees or bid/ask spreads incurred when investors buy/sell on the ASX. Returns for periods longer than one year are annualised. Past performance is not a reliable
            indicator of current or future performance which may be lower or higher.
          </p>
        </div>

        {/* Calendar Year Returns Chart */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar year returns (%)</h3>
          <p className="text-sm text-gray-600 mb-4">as at 31-Dec-24</p>

          {/* Chart */}
          <div className="bg-white p-6 border rounded">
            <div className="flex items-center gap-4 text-xs mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span>CNEW (Nav)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded"></div>
                <span>Benchmark Index (MGCNEAUN)</span>
              </div>
            </div>

            <div className="relative h-64">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                {/* Y-axis labels */}
                <text x="30" y="20" className="text-xs fill-gray-600">40</text>
                <text x="30" y="50" className="text-xs fill-gray-600">20</text>
                <text x="30" y="80" className="text-xs fill-gray-600">0</text>
                <text x="30" y="110" className="text-xs fill-gray-600">-20</text>
                <text x="30" y="140" className="text-xs fill-gray-600">-40</text>

                {/* X-axis labels */}
                <text x="80" y="190" className="text-xs fill-gray-600">2019</text>
                <text x="160" y="190" className="text-xs fill-gray-600">2020</text>
                <text x="240" y="190" className="text-xs fill-gray-600">2021</text>
                <text x="320" y="190" className="text-xs fill-gray-600">2022</text>
                <text x="400" y="190" className="text-xs fill-gray-600">2023</text>
                <text x="480" y="190" className="text-xs fill-gray-600">2024</text>

                {/* Grid lines */}
                <line x1="50" y1="20" x2="550" y2="20" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="50" y1="80" x2="550" y2="80" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="50" y1="110" x2="550" y2="110" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="50" y1="140" x2="550" y2="140" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="50" y1="170" x2="550" y2="170" stroke="#374151" strokeWidth="2"/>

                {/* 2019 bars */}
                <rect x="70" y="40" width="15" height="40" fill="#2563eb"/>
                <rect x="90" y="38" width="15" height="42" fill="#14b8a6"/>

                {/* 2020 bars */}
                <rect x="150" y="45" width="15" height="35" fill="#2563eb"/>
                <rect x="170" y="43" width="15" height="37" fill="#14b8a6"/>

                {/* 2021 bars */}
                <rect x="230" y="50" width="15" height="30" fill="#2563eb"/>
                <rect x="250" y="48" width="15" height="32" fill="#14b8a6"/>

                {/* 2022 bars (negative) */}
                <rect x="310" y="80" width="15" height="35" fill="#2563eb"/>
                <rect x="330" y="80" width="15" height="32" fill="#14b8a6"/>

                {/* 2023 bars (small positive) */}
                <rect x="390" y="75" width="15" height="5" fill="#2563eb"/>
                <rect x="410" y="76" width="15" height="4" fill="#14b8a6"/>

                {/* 2024 bars */}
                <rect x="470" y="65" width="15" height="15" fill="#2563eb"/>
                <rect x="490" y="66" width="15" height="14" fill="#14b8a6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
