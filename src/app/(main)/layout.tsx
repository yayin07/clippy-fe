import MainFooter from "./components/footer";
import MainHeader from "./components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black">
      <MainHeader />
      <section className="max-w-[1366px] mx-auto">{children}</section>
      <MainFooter />
    </div>
  );
}
