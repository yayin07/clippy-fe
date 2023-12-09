import MainFooter from "./components/footer";
import MainHeader from "./components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen flex flex-col bg-black">
      <MainHeader />
      <section className="flex-grow max-w-[1366px] mx-auto">{children}</section>
      <MainFooter />
    </div>
  );
}
