import HeaderTailwind from "./components/HeaderTailwind";
import Footer from "./components/Footer";
import Landing from "./components/Landind";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen flex-grow">
      <HeaderTailwind/>

      <Landing />

      <Footer />
    </div>
  );
}
