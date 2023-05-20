import BannerSlider from "../components/BannerSlider";
import ContactCard from "@/components/ContactCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="relative overflow-hidden">
        <div className=" sm:pt-36 pt-28">
          <BannerSlider />
          <ContactCard />
        </div>

        <img
          src="/img/food-banner.png"
          className="w-full object-fill sm:h-[600px] h-auto "
          alt="dfsa"
        />
      </div>
      <div className="bg-gray-100 py-5">
        <h6 className="text-center font-semibold">Copyright © 2023 </h6>
      </div>
    </Suspense>
  );
}
