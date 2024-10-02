import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
      <Stack>
          <Stack.Screen name="index" options={{ headerShown: true}}/>
          <Stack.Screen name="(auth)" options={{ headerShown: true}}/>
          <Stack.Screen name="(tabs)" options={{ headerShown: true}}/>
      </Stack>
  )
}

export default RootLayout