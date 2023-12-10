import Image from "next/image";
import HomeBanner from "./components/banner";
import FeaturedItems from "./components/featured-items";

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <div className="lg:py-16 bg-black    ">
        <div className="relative bg-gradient-to-t from-black xl:h-28 h-0 " />
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
      </div>
    </main>
  );
}
