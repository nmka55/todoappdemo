import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import NotificationsScreen from "./pages/notificationsScreen/notificationScreen";
import React from "react";
import TabA from "./pages/home/tabA";
import TabADetails from "./pages/home/tabADetails";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

const HomeTabAStackNav = createStackNavigator();
function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator initialRouteName="Ongoing">
      <HomeTabAStackNav.Screen
        name="Ongoing"
        component={TabA}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <HomeTabAStackNav.Screen
        name="ToDo Details"
        component={TabADetails}
        options={({}) => ({
          headerShown: false,
        })}
      />
    </HomeTabAStackNav.Navigator>
  );
}

const HomeTabBStackNav = createStackNavigator();
function HomeTabBStack() {
  return (
    <HomeTabBStackNav.Navigator initialRouteName="Completed">
      <HomeTabBStackNav.Screen
        name="Completed"
        component={TabA}
        options={({}) => ({
          headerShown: false,
        })}
      />
      <HomeTabBStackNav.Screen
        name="ToDo Details"
        component={TabADetails}
        options={({}) => ({
          headerShown: false,
        })}
      />
    </HomeTabBStackNav.Navigator>
  );
}

const HomeTabNav = createBottomTabNavigator();
function HomeTab() {
  return (
    <HomeTabNav.Navigator
      tabBarOptions={{
        activeTintColor: "#4b78ec",
        inactiveTintColor: "gray",
        showIcon: true,
        showLabel: true,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Ongoing":
              iconName = focused ? "clipboard-list" : "clipboard-list-outline";
              break;
            case "Completed":
              iconName = focused
                ? "clipboard-check-multiple"
                : "clipboard-check-multiple-outline";
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <HomeTabNav.Screen name="Ongoing" component={HomeTabAStack} />
      <HomeTabNav.Screen name="Completed" component={HomeTabBStack} />
    </HomeTabNav.Navigator>
  );
}

const NotificationStackNav = createStackNavigator();
function NotificationsStack() {
  return (
    <NotificationStackNav.Navigator>
      <NotificationStackNav.Screen
        name="Notfications"
        component={NotificationsScreen}
        options={({}) => ({
          headerShown: false,
        })}
      />
    </NotificationStackNav.Navigator>
  );
}

function RootContainer({ user }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeTab} />
        <Drawer.Screen name="Notifications" component={NotificationsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return { user: state?.user };
};
export default connect(mapStateToProps)(RootContainer);
