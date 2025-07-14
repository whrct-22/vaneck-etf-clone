import Header from '@/components/Header'
import ETFHero from '@/components/ETFHero'
import SidebarActions from '@/components/SidebarActions'
import Overview from '@/components/Overview'
import FundDetails from '@/components/FundDetails'
import IndexInformation from '@/components/IndexInformation'
import Performance from '@/components/Performance'
import Holdings from '@/components/Holdings'
import Dividends from '@/components/Dividends'
import Documents from '@/components/Documents'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="relative">
        <ETFHero />
        <SidebarActions />
        <Overview />
        <FundDetails />
        <IndexInformation />
        <Performance />
        <Holdings />
        <Dividends />
        <Documents />
      </main>
      <Footer />
    </div>
  )
}
