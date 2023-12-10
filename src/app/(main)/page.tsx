import Image from "next/image";
import HomeBanner from "./components/banner";
import FeaturedItems from "./components/featured-items";

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <div className="md:py-16">
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
        <FeaturedItems />
      </div>
    </main>
  );
}
