import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons"; // You may need to install a vector icon library
import IconCom from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/Home";
import ListeScreen from "./screens/Liste";
import WalletScreen from "./screens/Wallet";
import GoScreen from "./screens/Go";
import DeliverScreen from "./screens/Deliver";

import { DataProvider } from "./context/DataProvider";
import ChatInit  from "./screens/ChatInit";

const Tab = createBottomTabNavigator();

export default function App() {
  const color = ({ focused }) => {
    `${focused} ? "orange" : "black"`;
  };

  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              tabBarLabelStyle: {
                fontSize: 16,
                marginBottom: -10,
                color: "black",
              },

              tabBarIcon: ({ focused, tintColor }) => {
                const color = `${focused ? "orange" : "black"}`;

                return (
                  <Text style={{ fontSize: 35, fontWeight: 600, color: color }}>
                    M
                  </Text>
                );
              },
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabelStyle: {
                fontSize: 16,
                marginBottom: -10,
                color: "black",
              },

              tabBarIcon: ({ focused, tintColor }) => {
                const iconName = `newspaper${focused ? "" : "-outline"}`;
                return <Ionicons name={iconName} size={35} color={tintColor} />;
              },
            }}
            name="Liste"
            component={ListeScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabelStyle: {
                fontSize: 16,
                marginBottom: -10,
                color: "black",
              },

              tabBarIcon: ({ focused, tintColor }) => {
                const iconName = `wallet${focused ? "" : "-outline"}`;
                return <Ionicons name={iconName} size={35} color={tintColor} />;
              },
            }}
            name="Wallet"
            component={WalletScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabelStyle: {
                fontSize: 16,
                marginBottom: -10,
                color: "black",
              },

              tabBarIcon: ({ focused, tintColor }) => {
                const iconName = `receipt${focused ? "" : "-outline"}`;
                return <Ionicons name={iconName} size={35} color={tintColor} />;
              },
            }}
            name="Go"
            component={GoScreen}
          />
          <Tab.Screen
            options={{
              tabBarLabelStyle: {
                fontSize: 16,
                marginBottom: -10,
                color: "black",
              },

              tabBarIcon: ({ focused, tintColor }) => {
                const iconName = `truck-delivery${focused ? "" : "-outline"}`;
                return <IconCom name={iconName} size={35} color={tintColor} />;
              },
            }}
            name="Settings"
            component={DeliverScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
