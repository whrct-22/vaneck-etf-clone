'use client'

import { TrendingUp, Info } from 'lucide-react'

export default function ETFHero() {
  return (
    <div className="bg-white px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - ETF info */}
          <div className="flex-1">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  CNEW | VanEck China New Economy ETF
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {/* NAV */}
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      NAV <Info className="w-3 h-3" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">$7.21</div>
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <TrendingUp className="w-3 h-3" />
                      as at 14-Jul-25
                    </div>
                  </div>

                  {/* Total Net Assets */}
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      TOTAL NET ASSETS <Info className="w-3 h-3" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">$93.46M</div>
                  </div>

                  {/* Dividend Frequency */}
                  <div>
                    <div className="text-sm text-gray-600 mb-1">DIVIDEND FREQUENCY</div>
                    <div className="text-xl font-bold text-gray-900">1 each year</div>
                  </div>

                  {/* Management Fee */}
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      MANAGEMENT FEE (P.A.) <Info className="w-3 h-3" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">0.95%</div>
                  </div>

                  {/* Number of Securities */}
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      NUMBER OF SECURITIES <Info className="w-3 h-3" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">120</div>
                  </div>

                  {/* Inception Date */}
                  <div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      INCEPTION DATE <Info className="w-3 h-3" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">08-Nov-18</div>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600 leading-relaxed">
                  The NAV is generally calculated daily after all markets at the close price of the securities
                  on the relevant foreign stock exchange. The NAV is then converted to AUD based on the relevant London WM Reuters
                  4pm exchange rate. This means, due to Australia's time zone, that the NAV will generally not be updated until around
                  1pm next business day.
                </div>
              </div>

              {/* Right side - Chart/Image */}
              <div className="w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img
                  src="https://ext.same-assets.com/3759577391/441169834.webp"
                  alt="China New Economy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
