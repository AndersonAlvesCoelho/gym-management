// IMPORTS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SERVICES
import { RootNavigationProps } from '../@types/navigation.type';

// SCREENS
import { HomeScreen } from '../screens';

// COMPONENTS
import { View } from 'react-native';
import Colors from '../assets/styles/color';
import styles from './styles';

const Tab = createBottomTabNavigator<RootNavigationProps>();

export default function TabRoutes() {


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.TabBottom,
        tabBarActiveTintColor: Colors.red[600],
        tabBarInactiveTintColor: Colors.zinc[400],
        tabBarLabelStyle: styles.text,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <View style={styles.activeTabIndicator} />}
            </>
          ),
          tabBarLabel: 'Início',
        }}
      />
    </Tab.Navigator>
  );
}
