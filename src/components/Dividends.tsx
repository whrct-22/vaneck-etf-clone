'use client'

export default function Dividends() {
  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Dividends
        </h2>

        {/* Dividend Yield */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Dividend Yield</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Dividend Frequency</div>
              <div className="text-lg font-semibold">1 each year</div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">12 Month Income Return*</div>
              <div className="text-lg font-semibold">1.21%</div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">12 Month Fund Dividend Yield**</div>
              <div className="text-lg font-semibold">0.98%</div>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-1">Franking Level</div>
              <div className="text-lg font-semibold">—</div>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-gray-600">
            <p>
              *As at 30-Jun-25. Calculated by summing the prior 12 month per unit dividends divided by the fund closing NAV per unit at 12 months ago. This represents the yield as
              investor would have earned if they were invested in the fund for the entire preceding 12 months period. Past performance is not an indicator of future performance.
            </p>
            <p>
              **As at 30-Jun-25. Calculated by summing the prior 12 months per unit dividends divided by the fund closing NAV per unit at the end of the relevant period. Past
              performance is not an indicator of future performance.
            </p>
          </div>
        </div>

        {/* Election of Dividend Reinvestment Plan */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Election of Dividend Reinvestment Plan (DRP)</h3>
          <p className="text-gray-700">
            You can elect DRP by logging into MUFG's Investor Centre. Once you are logged in, please proceed to the "Payments and Tax" tab and
            select "Reinvestment Update".
          </p>
        </div>

        {/* Distribution History */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribution history</h3>
          <p className="text-sm text-gray-600 mb-4">Anticipated dividend & capital gains frequency: One each year</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Dividend Period Ending</th>
                  <th className="px-4 py-3 text-left text-sm">Payment Date</th>
                  <th className="px-4 py-3 text-left text-sm">Cash Dividend (cents per unit, AUD)</th>
                  <th className="px-4 py-3 text-left text-sm">Part subject to interest withholding tax (cents per unit, AUD)</th>
                  <th className="px-4 py-3 text-left text-sm">Part subject to dividend withholding tax (cents per unit, AUD)</th>
                  <th className="px-4 py-3 text-left text-sm">Part subject to fund payment withholding tax (cents per unit, AUD)</th>
                  <th className="px-4 py-3 text-left text-sm">Income year on which the dividend relates</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-24</td>
                  <td className="px-4 py-2">25-Jul-24</td>
                  <td className="px-4 py-2">12.000000</td>
                  <td className="px-4 py-2">0.001600</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.018600</td>
                  <td className="px-4 py-2">2024</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-23</td>
                  <td className="px-4 py-2">25-Jul-23</td>
                  <td className="px-4 py-2">11.000000</td>
                  <td className="px-4 py-2">0.000400</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000100</td>
                  <td className="px-4 py-2">2023</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-22</td>
                  <td className="px-4 py-2">25-Jul-22</td>
                  <td className="px-4 py-2">13.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">2022</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-21</td>
                  <td className="px-4 py-2">25-Jul-21</td>
                  <td className="px-4 py-2">10.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">2021</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-20</td>
                  <td className="px-4 py-2">24-Jul-20</td>
                  <td className="px-4 py-2">12.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">2020</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">30-Jun-19</td>
                  <td className="px-4 py-2">22-Jul-19</td>
                  <td className="px-4 py-2">7.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">0.000000</td>
                  <td className="px-4 py-2">2019</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 mt-4 leading-relaxed">
            Distribution figures in the table above represent past distributions declared and paid by the above Fund. There is no guarantee that a distribution will be declared, or
            that if declared, the amount of any distribution would remain constant or increase over time. Tax consequences of distributions may vary between investors, as
            taxpayers. See the PDS for more details.
          </p>
        </div>
      </div>
    </div>
  )
}
