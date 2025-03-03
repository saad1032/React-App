import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen1 from "./screens/Homescreen1";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen1 />
    </View>
  );
}