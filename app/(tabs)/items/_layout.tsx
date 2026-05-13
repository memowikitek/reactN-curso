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
      <Stack.Screen name="index" options={{title: 'Productos'}} />
      <Stack.Screen name="details" options={{title: 'Detalles'}} />
    </Stack>
  );
}