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
      <section className="flex-grow">{children}</section>
      <MainFooter />
    </div>
  );
}
