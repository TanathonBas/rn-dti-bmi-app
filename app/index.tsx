import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmi");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/bmi.png")} style={styles.img} />
      <Text style={[styles.appName, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[styles.appName, { fontSize: 20 }]}>คำนวณดัชนีมวลกาย</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    marginTop: 20,
    color: "#fff",
    fontFamily: "Kanit-700bold",
  },

  img: {
    width: 200,
    height: 200,
  },

  container: {
    flex: 1,
    backgroundColor: "#369e16",
    alignItems: "center",
    justifyContent: "center",
  },
});
