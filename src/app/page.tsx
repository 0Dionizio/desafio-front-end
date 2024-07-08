import { Navbar } from "@/components/navbar/navbar";
import { Asidebar } from "@/components/asidebar/asidebar";
import { FirstSection } from "@/components/first-section/first-section";
import { ChartSection } from "@/components/first-section/chart-section";
import { SecondSection } from "@/components/second-section/second-section";
import { SecondChartSection } from "@/components/second-section/second-chart-section";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Asidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <div className="p-8 flex flex-row gap-4">
          <FirstSection />
          <ChartSection />
        </div>
        <div className="p-8 flex flex-row gap-4">
          <SecondSection />
          <div className="w-8/12 bg-white rounded-xl">
            <SecondChartSection />
          </div>
          <div className="w-8/12 bg-white rounded-xl">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
