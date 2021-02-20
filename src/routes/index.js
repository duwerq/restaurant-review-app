import React from "react";
import { View, Text, Dimensions, Platform, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EstablishmentsListView from '../screens/EstablishmentsListView';

const Home = () => (
  <EstablishmentRoutes.Navigator
    screenOptions={{
    headerShown: false,
    }}
  >
    {/* <View style={{height: '100%', width: '100%', flex: 1, backgroundColor: 'blue'}}><Text styles={{fontWeight: 80}}>hello</Text></View> */}
    <EstablishmentRoutes.Screen name="Home" component={EstablishmentsListView} />
    <EstablishmentRoutes.Screen name="Search" component={Search} />
    <EstablishmentRoutes.Screen name="EstablishmentDetails" component={EstablishmentDetailView}/>
  </EstablishmentRoutes.Navigator>
);


const Search = () => (
  <View
    style={{ height: "100%", width: "100%", flex: 1, backgroundColor: "blue" }}
  >
    <Text styles={{ fontWeight: 80 }}>Search</Text>
  </View>
);

const EstablishmentDetailView = (props) => {

  return (
  <View
    style={{ height: "100%", width: "100%", flex: 1, backgroundColor: "blue" }}
  >
    <Text styles={{ fontWeight: 80 }}>Establishment Details</Text>
  </View>
)};

const Profile = () => (
  <View
    style={{ height: "100%", width: "100%", flex: 1, backgroundColor: "blue" }}
  >
    <Text styles={{ fontWeight: 80 }}>Profile</Text>
  </View>
);

const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    screens: {
      AppContainer: {
        screens: {
          Home: {
            screens: {
              Home: "/",
              Search: "/search",
              EstablishmentDetails: "/establishment/:id",
            },
            path: "/",
          },
          // Search: '/search',
          Profile: "/profile",
        },
        path: "/"
      },
    },
  },
};

const Tabs = createBottomTabNavigator();

const EstablishmentRoutes = createStackNavigator();

const DesktopRoutes = createStackNavigator();

const TabsStack = (props) => (
  <Tabs.Navigator
  // screenOptions={{
  //   headerShown: false,
  // }}
  >
    <Tabs.Screen name="Home" component={Home} />
    {/* <Tabs.Screen name="Search" component={Search} /> */}
    <Tabs.Screen name="Profile" component={Profile}  />
  </Tabs.Navigator>
)

const DesktopStack = (props) => {
  return (
    <DesktopRoutes.Navigator  
      screenOptions={{
        headerShown: false,
      }}
    >
      <DesktopRoutes.Screen name="Home" component={Home} />
      <DesktopRoutes.Screen name="Profile" component={Profile} />
    </DesktopRoutes.Navigator>
  )
}
const RootStack = createStackNavigator();

function App() {
  const { height, width } = useWindowDimensions();
  console.log({height, width})
  const windowSize = width <= 768 ? "Mobile" : "Desktop";
  return (
    <View style={{ height, width }}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="AppContainer" component={windowSize === "Mobile" ? TabsStack : DesktopStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
