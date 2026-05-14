import { Stack } from "expo-router";

export default function ItemsLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#111' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="index" options={{title: 'Settings'}} />
    </Stack>
  );
}