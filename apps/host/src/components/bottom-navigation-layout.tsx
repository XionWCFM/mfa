import BottomNavigation from "@mf-xion-bn/bottom-navigation";
import { Outlet } from "react-router-dom";

export const BottomNavigationLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
};
