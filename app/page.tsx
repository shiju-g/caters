import BannerSlider from "../components/BannerSlider";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
    <>
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
    </>
  );
}
