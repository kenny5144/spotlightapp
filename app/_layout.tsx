 import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider>
<Slot/>
  <SafeAreaProvider>
    <SafeAreaView style={{flex:1, backgroundColor:"black"}}>

  <Stack screenOptions={{headerShown:false,}}>
    <Stack.Screen name="index" options={{title:"feed"}}/>
    <Stack.Screen name="Notifications" options={{headerShown:false, title:"feed"}}/>

  </Stack>
    </SafeAreaView>

  </SafeAreaProvider>
    </ClerkProvider>
  )
}
