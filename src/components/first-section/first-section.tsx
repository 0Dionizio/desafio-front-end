import InsertChartIcon from "@mui/icons-material/InsertChart";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SellIcon from "@mui/icons-material/Sell";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Card } from "./card";

export function FirstSection() {
  return (
    <div className="bg-white p-8 rounded-xl w-full ">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2>Vendas Hoje</h2>
          <div className="mt-2 font-bold text-neutral-color-2/50">
            Resumo de vendas
          </div>
        </div>
        <div className="flex gap-2 border-2 p-2 rounded-xl font-semibold text-neutral-color-2/50">
          Exportar <IosShareIcon />
        </div>
      </div>
      <div className="mt-8 flex flex-row gap-4 flex-wrap">
        <Card
          Icon={InsertChartIcon}
          bgAvatarColor="#FA5A7D"
          bgColor="#FFE2E5"
          title="R$ 1,000"
          description="Total de vendas"
          details="+8% a mais que ontem"
        />
        <Card
          Icon={DescriptionIcon}
          bgAvatarColor="#FF947A"
          bgColor="#FFF4DE"
          title="300"
          description="Total de contratos"
          details="+5% a mais que ontem"
        />
        <Card
          Icon={SellIcon}
          bgAvatarColor="#3CD856"
          bgColor="#DCFCE7"
          title="5"
          description="Implantadas"
          details="+1,2% a mais que ontem"
        />
        <Card
          Icon={PersonAddAlt1Icon}
          bgAvatarColor="#BF83FF"
          bgColor="#F3E8FF"
          title="8"
          description="Total de contratos"
          details="+0,5% a mais que ontem"
        />
      </div>
    </div>
  );
}
