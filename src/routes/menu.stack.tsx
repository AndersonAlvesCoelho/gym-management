// IMPORTS'S
import React from 'react';

// SERVICE'S
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigationProps } from '../@types/navigation.type';

// SCREEN'S

// COMPONENT'S
import { Text, View } from 'react-native';

const Stack = createStackNavigator<RootNavigationProps>();

export default function MenuStack() {
  const { name } = useRoute();

  const render = () => {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BenefitsStack" component={render} />
      <Stack.Screen name="ContactUs" component={render} />
      <Stack.Screen name="Profile" component={render} />
      <Stack.Screen name="FAQ" component={render} />
      
    </Stack.Navigator>
  );
}
