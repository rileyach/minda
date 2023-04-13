import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import BreathingApp from "./screens/BreathingApp";
import EventTracker from "./screens/EventTracker";
import AIBot from "./screens/AIBot";
import Insights from "./screens/Insights";


// Screen names
const homeName = "Home";
const breathingApp = "Breathe";
const eventTracker = "Events";
const aiBot = "Help";
const inSights = "Insights";
const eventPage = "EventPage";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#6658c5",
            height: 100,
            paddingTop: 15,
          },
          tabBarActiveTintColor: "#ffa433",
          tabBarInactiveTintColor: "#f0eef9",
          headerStyle: { backgroundColor: "#f0eef9" },
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "Gilroy-Regular",
            fontSize: 13,
            paddingTop: 3,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === breathingApp) {
              iconName = focused ? "color-filter" : "color-filter-outline";
            } else if (rn == eventTracker) {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (rn == aiBot) {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (rn == inSights) {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={eventTracker} component={EventTracker} />

        <Tab.Screen name={breathingApp} component={BreathingApp} />

        <Tab.Screen name={inSights} component={Insights} />

        <Tab.Screen name={aiBot} component={AIBot} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
