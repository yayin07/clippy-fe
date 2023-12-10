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
      <section className="max-w-[1366px] mx-auto flex-1">{children}</section>
      <MainFooter />
    </div>
  );
}
