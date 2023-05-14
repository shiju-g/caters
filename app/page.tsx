import BannerSlider from "../components/BannerSlider";
import ContactCard from "@/components/ContactCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <div className="relative overflow-hidden">
        <div className="absolute w-full top-0 sm:pt-36 pt-28">
          <BannerSlider />
          <ContactCard />
        </div>

        <img
          src="/img/food-background.png"
          className="w-full h-screen object-cover sm:pt-0 pt-32"
          alt="dfsa"
        />
      </div>
    </Suspense>
  );
}
