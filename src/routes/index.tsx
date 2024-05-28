import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigationProps } from '../@types/navigation.type';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator<RootNavigationProps>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabRoutes} />
        {/* <Stack.Screen name="Login" component={render} />
        <Stack.Screen name="Register" component={render} />
        <Stack.Screen name="PasswordRecovery" component={render} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
