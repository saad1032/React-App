import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen1 from "./screens/Homescreen1";
import SubScreen from "./screens/SubScreen";
import SurahDetailScreen from "./screens/SurahDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubScreen"
          component={SubScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SurahDetail"
          component={SurahDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

