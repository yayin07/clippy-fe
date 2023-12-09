import Image from "next/image";
import HomeBanner from "./components/banner";
import FeaturedItems from "./components/featured-items";

export default function HomePage() {
  return (
    <main className="">
      <HomeBanner />
      <FeaturedItems />
    </main>
  );
}
