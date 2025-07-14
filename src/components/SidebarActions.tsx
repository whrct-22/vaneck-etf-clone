'use client'

import { Target, Share2, BarChart3, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import React, { useState, ReactNode } from 'react'

// Self-contained Tooltip Component
interface CustomTooltipProps {
  content: string;
  children: ReactNode;
}

const CustomTooltip = ({ content, children }: CustomTooltipProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {children}
      {isTooltipVisible && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mx-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap pointer-events-none"
        >
          {content}
        </div>
      )}
    </div>
  );
};

// Modernized Sidebar Component with the custom tooltip
export default function ModernSidebarActions() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg">
          {/* Invest Now */}
          <CustomTooltip content="Invest Now">
            <Button
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-110 shadow-md"
              size="icon"
            >
              <Target className="w-6 h-6" />
            </Button>
          </CustomTooltip>

          {/* Share */}
          <CustomTooltip content="Share">
            <Button
              className="w-11 h-11 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-110"
              size="icon"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </CustomTooltip>

          {/* Insights */}
          <CustomTooltip content="Insights">
            <Button
              className="w-11 h-11 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-110"
              size="icon"
            >
              <BarChart3 className="w-5 h-5" />
            </Button>
          </CustomTooltip>

          {/* Help */}
          <CustomTooltip content="Help">
            <Button
              className="w-11 h-11 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full transition-all duration-300 ease-in-out hover:scale-110"
              size="icon"
            >
              <HelpCircle className="w-5 h-5" />
            </Button>
          </CustomTooltip>
        </div>
    </div>
  )
}