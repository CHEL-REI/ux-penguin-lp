import PageNav from '../components/PageNav';
import HeroCreators from '../components/HeroCreators';
import Problem from '../components/Problem';
import Modules from '../components/Modules';
import HowItWorks from '../components/HowItWorks';
import Personas from '../components/Personas';
import PricingCreators from '../components/PricingCreators';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useLocale } from '../i18n/useLocale';

export default function Creators() {
  useLocale();
  return (
    <div id="top" className="relative">
      <PageNav />
      <HeroCreators />
      <Problem />
      <div id="modules">
        <Modules />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <Personas />
      <PricingCreators />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
