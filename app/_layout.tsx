import { Drawer } from 'expo-router/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Drawer
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        {/* Dashboard = isi Tabs */}
        <Drawer.Screen
          name="(tabs)"
          options={{ title: 'Dashboard' }}
        />
        {/* Settings = screen terpisah */}
        <Drawer.Screen
          name="settings"
          options={{ title: 'Settings' }}
        />
      </Drawer>
    </SafeAreaProvider>
  );
}
