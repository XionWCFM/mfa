import { HomeIcon, PersonIcon, ReaderIcon, TextAlignLeftIcon } from "@radix-ui/react-icons";
import { BottomNavigation as Navigation } from "@xionwcfm/xds/bottom-navigation";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    value: "/",
    icon: <HomeIcon />,
  },
  {
    value: "/todo",
    icon: <TextAlignLeftIcon />,
  },
  {
    value: "/memo",
    icon: <ReaderIcon />,
  },
  {
    value: "/info",
    icon: <PersonIcon />,
  },
];

export default function BottomNavigation() {
  const navigate = useNavigate();
  return (
    <Navigation.Root>
      {actions.map((action) => (
        <Navigation.Action
          key={action.value}
          value={action.value}
          icon={action.icon}
          onClick={() => navigate(action.value)}
        />
      ))}
    </Navigation.Root>
  );
}
