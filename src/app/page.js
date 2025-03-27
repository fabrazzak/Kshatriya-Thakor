import Banner from "@/component/homepage/Banner/Banner";
import BannerBottom from "@/component/homepage/BannerBottom/BannerBottom";
import BioData from "@/component/homepage/BioData/BioData";
import Pricing from "@/component/homepage/Pricing/Pricing";
import Testimonials from "@/component/homepage/Testimonials/Testimonials";
import WhyUs from "@/component/homepage/WhyUs/WhyUs";


export default function Home() {
  return (
    <div>

      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <BioData></BioData>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
    </div>

  );
}
