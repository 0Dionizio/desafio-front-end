import Avatar from "@mui/material/Avatar";
import { CardProps } from "@/@types";

export function Card({
  Icon,
  bgColor,
  bgAvatarColor,
  title,
  description,
  details,
}: CardProps) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-52 h-52  rounded-xl p-5 flex-col flex gap-4 bg-white  "
    >
      <Avatar sx={{ backgroundColor: bgAvatarColor }}>
        <Icon sx={{ color: "white", fontSize: "28px" }} />
      </Avatar>
      <h2>{title}</h2>
      <div className="text-neutral-color-2/50 font-bold">
        {description}
      </div>
      <div className="text-sm text-primary-color">{details}</div>
    </div>
  );
}
