import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Create from "../screens/Create";
import Messages from "../screens/Messages";
import AI from "../screens/AI";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Découvrir" component={Discover} />
      <Tab.Screen name="Créer" component={Create} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="IA" component={AI} />
    </Tab.Navigator>
  );
}
