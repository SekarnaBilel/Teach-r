import * as React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import FavorisScreen from "./app/screens/FavorisScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Teach"
          component={FavorisScreen}
          options={{
            title: "Teach'rs favoris",
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "rgb( 0, 113, 204)",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
