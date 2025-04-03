import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import IntegrationSection from "./IntegrationSection";
import CtaSection from "./CtaSection";
import { products } from "./_shared/constants";

export default function Home() {
  return (
    <>
      <HeroSection products={products} />
      <AboutSection />
      <ProductsSection products={products} />
      <IntegrationSection products={products} />
      <CtaSection />
    </>
  );
}
