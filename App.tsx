import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import { useEffect } from "react";
import { login } from "./app/lib/firebase";

export default function App() {
  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
