// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsCardGrid from '@/components/StatsGrid';
import SEOLandingPage from '@/components/SeoLandingPage';
import BusinessDataStore from '@/components/Bussinessdata';
import StackerDashboard from '@/components/Dashboard';
import ChangelogCards from '@/components/Logcards';
import StackerFeatures from '@/components/Featurecard';
import StackerCTA from '@/components/Cta';
import MovingText from '@/components/animate';

export default function Home() {
  return (
    <div className=' px-3 bg-white'>
      <Head>
        <title>Stacker - The platform powering your operations</title>
        <meta name="description" content="Build custom CRMs, internal tools, and business applications without coding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <div className='bg-gradient-to-b from-white to-orange-100'>
      <StatsCardGrid/>
      </div>
      <div className='bg-gradient-to-b from-orange-100 to-transparent'>
      <SEOLandingPage/>
      </div>
      <div className='bg-white'>
      <BusinessDataStore/>
      </div>
      <StackerDashboard/>
      <ChangelogCards/>
      <div className='bg-gradient-to-b from-orange-100 to-transparent'>
      <StackerFeatures/>
      </div>
      <StackerCTA/>
      <MovingText/>
      {/* Rest of your homepage content */}
    </div>
  );
}