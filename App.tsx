// IMPORTS
import { stylesGlobal } from '@/assets/styles/styles';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

// SERVICES
import { SystemProvider } from '@/contexts/system.context';
import Routes from '@/routes';

// COMPONENTS
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return;
  }

  return (
    <GestureHandlerRootView style={stylesGlobal.container}>
      <StatusBar style="auto" />
      <SystemProvider>
        <Routes />
      </SystemProvider>
    </GestureHandlerRootView>
  );
}
