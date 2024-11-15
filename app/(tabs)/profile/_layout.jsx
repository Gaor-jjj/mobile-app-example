import { Stack } from 'expo-router';

const ProfileLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="createlisting" options={{ title: 'Create a new listing' }} />
      <Stack.Screen name="mylisting" options={{ title: 'My listings' }} />
    </Stack>
  );
};

export default ProfileLayout;
