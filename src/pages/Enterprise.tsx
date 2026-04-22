import PageNav from '../components/PageNav';
import HeroEnterprise from '../components/HeroEnterprise';
import EnterpriseProblem from '../components/EnterpriseProblem';
import Capabilities from '../components/Capabilities';
import SecurityTable from '../components/SecurityTable';
import PricingEnterprise from '../components/PricingEnterprise';
import ContactCTA from '../components/ContactCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MobileStickyCTA from '../components/MobileStickyCTA';
import { useLocale } from '../i18n/useLocale';

export default function Enterprise() {
  useLocale();
  return (
    <div id="top" className="relative">
      <PageNav />
      <HeroEnterprise />
      <EnterpriseProblem />
      <Capabilities />
      <SecurityTable />
      <PricingEnterprise />
      <ContactCTA />
      <FAQ />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
