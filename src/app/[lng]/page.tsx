import Content from "@/components/Content";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/ParnerLogos";
import PartnerWithUs from "@/components/PartnerWithUs";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonals from "@/components/Testimonals";
import WorkWithUs from "@/components/WorkWithUs";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection lng={lng} />
      <PartnerLogos />
      <Services lng={lng} />
      <Content lng={lng} />
      <Testimonals />
      <WorkWithUs lng={lng} />
      <PartnerWithUs lng={lng} />
      <Stats lng={lng} />
    </main>
  );
}
