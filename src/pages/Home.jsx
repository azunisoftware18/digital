import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/sections/Hero';
import Brands from '../components/sections/Brands';
import HomeAbout from '../components/sections/HomeAbout';
import HomeServices from '../components/sections/HomeServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Statistics from '../components/sections/Statistics';
import ExecutiveTeam from '../components/sections/ExecutiveTeam';
import Process from '../components/sections/Process';
import CaseStudies from '../components/sections/CaseStudies';

export const Home = () => {
  return (
    <PageTransition>
      <main className="w-full overflow-hidden">
        <Hero />
        <Brands />
        <HomeAbout />
        <HomeServices />
        <WhyChooseUs />
        <Statistics />
        <ExecutiveTeam />
        <Process />
        <CaseStudies />
      </main>
    </PageTransition>
  );
};

export default Home;
