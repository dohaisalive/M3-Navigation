import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../Cart";
import { CartIcon } from "../CartIcon";
import { Product } from "../Product";
import { ProductDetails } from "../ProductDetail";
import { ProductsList } from "../ProductsList";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

export function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Navigator
      initialRouteName="ProductsList"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Cart" component={Cart} />
      <Screen name="CartIcon" component={CartIcon} />
      <Screen name="Product" component={Product} />
      <Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Cart")}
              title="Info"
              color="black"
            />
          ),
        }}
      />
    </Navigator>
  );
}
