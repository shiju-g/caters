import BannerSlider from "../components/BannerSlider";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
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
  );
}
