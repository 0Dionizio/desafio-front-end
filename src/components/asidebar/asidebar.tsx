import Image from "next/image";
import logo_white from "@/assets/blue_logo_white.svg";
import logo_blue from "@/assets/blue_logo_blue.svg";
import PieChartIcon from "@mui/icons-material/PieChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export function Asidebar() {
  return (
    <aside className="flex w-1/6 h-screen p-9 flex-col bg-white">
      <div className="flex flex-col gap-6 ">
        <div className=" flex flex-row gap-8 items-center">
          <div className="bg-primary-color p-3 rounded-xl">
            <Image
              src={logo_white}
              alt="Logo blue company"
              className=" w-14 -rotate-[32deg]"
            />
          </div>
          <h2>Blue</h2>
        </div>
        <div className="flex flex-col  gap-4    ">
          <div className="m-auto flex gap-6 bg-primary-color p-5 rounded-xl w-full justify-center">
            <PieChartIcon sx={{ fontSize: "36px", color: "white" }} />
            <h2 className="text-white">Dashboard</h2>
          </div>
          <div className="m-auto flex gap-6  p-5  w-full justify-center">
            <LeaderboardIcon sx={{ fontSize: "36px" }} />
            <h2 className="font-medium">Leaderboard</h2>
          </div>
        </div>
      </div>
      <div className="mt-auto   w-full">
        <div className="m-2 text-center rounded-xl bg-[url('/blob.svg')] bg-cover p-4 flex flex-col gap-4 text-white ">
          <Image
            src={logo_blue}
            alt="Logo blue company"
            className="m-auto w-16  bg-white p-3 rounded-lg"
          />
          <h2 className="text-white w-3/4 m-auto">Conheça a Blue</h2>
          <div className="text-sm ">
            Saiba mais informações sobre a Blue, uma operadora de
            saúde Healt Tech
          </div>
          <div className="  py-2 bg-white inline px-6 rounded-lg text-xl font-semibold  ">
            <div className=" text-primary-color  ">Conhecer</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
