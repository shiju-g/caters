import BannerSlider from "../components/BannerSlider";
import ContactCard from "@/components/ContactCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <div className="relative ">
        <div className="absolute w-full top-0 pt-32">
          <BannerSlider />
          <ContactCard />
        </div>

        <img
          src="/img/food-background.png"
          className="w-full h-screen object-cover"
          alt="dfsa"
        />
      </div>
    </Suspense>
  );
}
