'use client'

import { Target, Share2, BarChart3, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SidebarActions() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
      <div className="flex flex-col gap-2">
        {/* Invest Now */}
        <Button
          className="w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-none"
          size="icon"
        >
          <div className="flex flex-col items-center gap-1">
            <Target className="w-4 h-4" />
            <span className="text-[8px] leading-none">INVEST NOW</span>
          </div>
        </Button>

        {/* Share */}
        <Button
          className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-none"
          size="icon"
        >
          <div className="flex flex-col items-center gap-1">
            <Share2 className="w-4 h-4" />
            <span className="text-[8px] leading-none">SHARE</span>
          </div>
        </Button>

        {/* Insights */}
        <Button
          className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-none"
          size="icon"
        >
          <div className="flex flex-col items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            <span className="text-[8px] leading-none">INSIGHTS</span>
          </div>
        </Button>

        {/* Help */}
        <Button
          className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-none"
          size="icon"
        >
          <div className="flex flex-col items-center gap-1">
            <HelpCircle className="w-4 h-4" />
            <span className="text-[8px] leading-none">HELP</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
