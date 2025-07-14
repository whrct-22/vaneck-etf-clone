'use client'

import { Download } from 'lucide-react'

export default function Documents() {
  return (
    <div className="bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
          Documents & insights
        </h2>

        {/* Research and resources */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Research and resources</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <span className="text-gray-900">CNEW Fact Sheet</span>
              <Download className="w-5 h-5 text-gray-600" />
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <span className="text-gray-900">CNEW quarterly commentary</span>
              <Download className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Documents</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Product Disclosure Statement</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">NZ Investors - Warning Statements</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Interim/Half-year report</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">NAV & premium/discount history</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">A note on China sanctions</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Indicative Dividends Calendar</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Stewardship Policy</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Notice updating the fees and costs information</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Target Market Determination</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Annual Report</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Tax Attribution</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">All CNEW holdings</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">DRP Rules</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Proxy Voting Records</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Stewardship Report</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-300">
                <span className="text-gray-900">Proxy Voting Policy</span>
                <Download className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Market announcements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Market announcements</h3>

          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <span className="text-gray-900">ASX Announcements</span>
            <Download className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* VanEck Logo */}
        <div className="flex justify-center mt-12">
          <img
            src="https://ext.same-assets.com/3759577391/1375921727.svg"
            alt="VanEck"
            className="h-12 opacity-50"
          />
        </div>
      </div>
    </div>
  )
}
