import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home";
import Points from "./src/pages/points";
import Details from "./src/pages/Detail";

const AppSatck = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppSatck.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppSatck.Screen name="Home" component={Home} />
        <AppSatck.Screen name="Points" component={Points} />
        <AppSatck.Screen name="Details" component={Details} />
      </AppSatck.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
