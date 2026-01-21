import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen"; // แก้ไข: ต้อง import จาก expo-splash-screen
import { useEffect } from "react";

// ป้องกันไม่ให้ Splash Screen หายไปเอง จนกว่าเราจะสั่ง hideAsync
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // ซ่อน Splash Screen เมื่อฟอนต์โหลดเสร็จ
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bmi"
        options={{
          title: "BMI Calculator",
          headerStyle: { backgroundColor: "#45922e" },
          headerTitleStyle: {
            color: "#fff",
            fontFamily: "Kanit-700Bold",
            fontSize: 24,
          },
        }}
      />
    </Stack>
  );
}
