 import InitialLayout from '@/component/InitialLayout';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      {/* < Slot/> */}
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
          <InitialLayout/>
        
        </SafeAreaView>

      </SafeAreaProvider>
    </ClerkProvider>
  )
}
