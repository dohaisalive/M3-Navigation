import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/Navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
