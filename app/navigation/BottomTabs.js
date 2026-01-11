import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Create from "../screens/Create";
import Messages from "../screens/Messages";
import AI from "../screens/AI";

const Tab = createBottomTabNavigator();

function PlusButton() {
  return (
    <View style={{
      width: 60,
      height: 40,
      backgroundColor: "#fff",
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{ fontSize: 28 }}>＋</Text>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Accueil" component={Home} />
      <Tab.Screen name="Découvrir" component={Discover} />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <PlusButton />
        }}
      />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="IA" component={AI} />
    </Tab.Navigator>
  );
}
