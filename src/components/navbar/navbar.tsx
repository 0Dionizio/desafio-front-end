import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import flag from "@/assets/brazil_flag.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";

export function Navbar() {
  return (
    <nav className=" flex flex-row h-36  items-center gap-8 bg-white  w-full p-8">
      <h1 className=" ">Dashboard</h1>
      <div className=" w-full flex flex-row gap-2  bg-neutral-color-1 p-4 rounded-xl ">
        <SearchIcon sx={{ fontSize: "36px", color: "#2500FF" }} />
        <input
          type="text"
          className="w-full bg-neutral-color-1 outline-none"
          placeholder="Pesquisar informações"
        />
      </div>
      <div className="bg-[#FFFAF1] rounded-lg p-2  ">
        <Badge color="error" variant="dot">
          <NotificationsNoneIcon
            className="text-[#FFA412]"
            sx={{ fontSize: "36px" }}
          />
        </Badge>
      </div>
      <div className=" w-1/4 flex flex-row items-center gap-2 font-bold justify-center ">
        <Avatar alt="Bandeira do Brasil" src={flag.src} />
        PT (BR) <ExpandMoreIcon />
      </div>
      <div className="hover:bg-neutral-color-1 rounded-lg cursor-pointer flex flex-row gap-4 w-1/4">
        <Avatar alt="Avatar do usuario" className="m-auto">
          <PersonIcon />
        </Avatar>
        <div className="flex flex-col ">
          <div className="font-bold flex flex-row items-center">
            Douglas Dionizio <ExpandMoreIcon />
          </div>
          <div>Comercial</div>
        </div>
      </div>
    </nav>
  );
}
