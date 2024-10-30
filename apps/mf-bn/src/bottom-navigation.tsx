import { BottomNavigation as Navigation } from "@xionwcfm/xds/bottom-navigation";
export default function BottomNavigation() {
  return (
    <Navigation.Root>
      <Navigation.Action value="hello" icon={<>dsadsa</>} />
      <Navigation.Action value="hello" icon={<>dsa</>} />
      <Navigation.Action value="hello" icon={<>dsa</>} />
    </Navigation.Root>
  );
}
