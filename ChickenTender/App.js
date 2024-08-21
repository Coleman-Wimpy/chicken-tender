import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import "./global.css"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FindFoodPage from './Screens/findFoodPage';
import ProfilePage from './Screens/profilePage';
import ScheduleMealPage from './Screens/scheduleMealPage';

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Schedule Meal" component={ ScheduleMealPage } />
          <Tab.Screen name="Find Food" component={ FindFoodPage } />
          <Tab.Screen name="Profile" component={ ProfilePage } />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

