import react, {useEffect} from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();