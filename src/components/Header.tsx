'use client'

import { Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <img src="https://ext.same-assets.com/3759577391/2480852088.png" alt="Australia" className="w-5 h-3" />
            <span>AUSTRALIA / INDIVIDUAL INVESTOR</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-4 h-4" />
            <span>SEARCH</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="https://ext.same-assets.com/3759577391/1375921727.svg" alt="VanEck" className="h-8" />
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              <span className="hover:text-gray-900 cursor-pointer">INVESTMENTS</span>
              <span className="hover:text-gray-900 cursor-pointer">FUND CENTRE</span>
              <span className="hover:text-gray-900 cursor-pointer">LEARNING HUB</span>
              <span className="hover:text-gray-900 cursor-pointer">INVESTOR CENTRE</span>
              <span className="hover:text-gray-900 cursor-pointer">INSIGHTS</span>
              <span className="hover:text-gray-900 cursor-pointer">OUR FIRM</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>← EQUITY</span>
            <span className="ml-auto">FUND DETAILS ▼</span>
          </div>
        </div>
      </div>
    </header>
  )
}
