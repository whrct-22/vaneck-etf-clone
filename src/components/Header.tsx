'use client'

import { Search, ChevronDown, Menu } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

// 动画变体定义
const headerVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const navItemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05 + 0.3,
      duration: 0.3
    }
  })
}

export default function ModernHeader() {
  const [hovered, setHovered] = useState<string | null>(null)

  const navItems = [
    'INVESTMENTS', 'FUND CENTRE', 'LEARNING HUB',
    'INVESTOR CENTRE', 'INSIGHTS', 'OUR FIRM'
  ]

  return (
    <motion.header 
      className="bg-white font-sans"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 移除了顶部的国家/地区选择栏 */}

      {/* Main navigation */}
      <div className="px-6 border-b border-neutral-200">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <img src="https://ext.same-assets.com/3759577391/1375921727.svg" alt="VanEck" className="h-7" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                className="relative"
                onHoverStart={() => setHovered(item)}
                onHoverEnd={() => setHovered(null)}
                custom={i}
                variants={navItemVariants}
              >
                <a href="#" className="block px-4 py-2 text-sm font-medium text-neutral-700 transition-colors duration-300 hover:text-black">
                  {item}
                </a>
                {hovered === item && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
               <ClickableItem>
                 <Search className="w-4 h-4 text-neutral-500" />
                 <span className="text-xs">SEARCH</span>
               </ClickableItem>
            </div>
            <div className="lg:hidden">
              <button className="p-2 rounded-md hover:bg-neutral-100">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb / Secondary Nav */}
      <div className="px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between text-sm text-neutral-500">
          <ClickableItem>← EQUITY</ClickableItem>
          <ClickableItem>
            <span>FUND DETAILS</span>
            <ChevronDown className="w-4 h-4" />
          </ClickableItem>
        </div>
      </div>
    </motion.header>
  )
}

// 可点击项的辅助组件
const ClickableItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 cursor-pointer text-neutral-600 hover:text-black transition-colors duration-300">
    {children}
  </div>
)