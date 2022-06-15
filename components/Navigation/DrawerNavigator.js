import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootNavigator } from "./index";
import { Cart } from "../Cart";

const { Navigator, Screen } = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Navigator>
      <Screen name="Products" component={RootNavigator} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}

export default DrawerNavigator;
