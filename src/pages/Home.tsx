import Hero from '../components/Hero';
import Compare from '../components/Compare';
import Problem from '../components/Problem';
import Modules from '../components/Modules';
import HowItWorks from '../components/HowItWorks';
import Personas from '../components/Personas';
import PricingCreators from '../components/PricingCreators';
import EnterpriseCallout from '../components/EnterpriseCallout';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useLocale } from '../i18n/useLocale';

export default function Home() {
  useLocale();
  return (
    <div id="top">
      <Hero />
      <Compare />
      <Problem />
      <Modules />
      <HowItWorks />
      <Personas />
      <PricingCreators />
      <EnterpriseCallout />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
