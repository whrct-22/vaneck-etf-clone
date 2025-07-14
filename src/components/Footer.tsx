'use client'

import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Exchange Traded Funds */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Exchange Traded Funds (ETFs)</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Australian Equities</a></li>
              <li><a href="#" className="hover:text-gray-900">International Equities</a></li>
              <li><a href="#" className="hover:text-gray-900">Sustainable and ESG</a></li>
              <li><a href="#" className="hover:text-gray-900">Sector / Thematic</a></li>
              <li><a href="#" className="hover:text-gray-900">Smart Beta</a></li>
              <li><a href="#" className="hover:text-gray-900">Alternatives</a></li>
              <li><a href="#" className="hover:text-gray-900">Small / Mid Caps</a></li>
              <li><a href="#" className="hover:text-gray-900">Property</a></li>
              <li><a href="#" className="hover:text-gray-900">AUD Hedged - Equities</a></li>
              <li><a href="#" className="hover:text-gray-900">Australian Fixed Income</a></li>
              <li><a href="#" className="hover:text-gray-900">International Fixed Income</a></li>
              <li><a href="#" className="hover:text-gray-900">AUD Hedged - Income</a></li>
            </ul>
          </div>

          {/* Information about */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Information about</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-900">ETF Prices</a></li>
              <li><a href="#" className="hover:text-gray-900">ETF Performance</a></li>
              <li><a href="#" className="hover:text-gray-900">Index Performance</a></li>
              <li><a href="#" className="hover:text-gray-900">Fund Fact Sheets</a></li>
              <li><a href="#" className="hover:text-gray-900">Dividend Reinvestment Plan</a></li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Education</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">ETFs Explained</a></li>
              <li><a href="#" className="hover:text-gray-900">About Smart Beta</a></li>
              <li><a href="#" className="hover:text-gray-900">International Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Emerging Markets</a></li>
              <li><a href="#" className="hover:text-gray-900">Quality Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Moat Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Investing for Income</a></li>
              <li><a href="#" className="hover:text-gray-900">Property Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Investing in Infrastructure</a></li>
              <li><a href="#" className="hover:text-gray-900">Gold Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Expert Insights</a></li>
              <li><a href="#" className="hover:text-gray-900">ViewPoint Quarterly</a></li>
              <li><a href="#" className="hover:text-gray-900">ESG Investing</a></li>
              <li><a href="#" className="hover:text-gray-900">Investing in Healthcare</a></li>
              <li><a href="#" className="hover:text-gray-900">Video Gaming & Esports</a></li>
              <li><a href="#" className="hover:text-gray-900">Investing in Clean Energy</a></li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect with us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Investors: 1300 68 38 37</li>
              <li>Advisers: +61 2 8038 3300</li>
              <li>Media: +61 2 8038 3328</li>
              <li>Trading Desk: +61 2 8038 3317</li>
              <li><a href="mailto:info@vaneck.com.au" className="hover:text-gray-900">info@vaneck.com.au</a></li>
              <li><a href="#" className="hover:text-gray-900">Adviser Services</a></li>
              <li><a href="#" className="hover:text-gray-900">Institutional Services</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>

            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">HOME</a>
              <a href="#" className="hover:text-gray-900">SITEMAP</a>
              <a href="#" className="hover:text-gray-900">PRIVACY</a>
              <a href="#" className="hover:text-gray-900">TERMS & CONDITIONS</a>
              <a href="#" className="hover:text-gray-900">COMPLAINTS & WHISTLEBLOWING</a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="bg-blue-800 text-white py-2 px-4 inline-block">
              © 2025 VANECK AUSTRALIA PTY LTD.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
