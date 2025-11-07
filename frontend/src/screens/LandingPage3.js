// frontend/src/screens/LandingPage3.js
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const FRAME_WIDTH = Math.min(360, SCREEN_WIDTH * 0.95);
const FRAME_HEIGHT = Math.round(FRAME_WIDTH * 2.05);

const LandingPage3 = ({ onNext = () => {} }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.phoneFrame, { width: FRAME_WIDTH, height: FRAME_HEIGHT }]}>

        <Image
          source={require("../../assets/bg.png")}
          resizeMode="cover"
          style={styles.background}
        />

        <View style={styles.overlay} />
        <View style={styles.topBar} />

        <View style={styles.content}>
          <Text style={styles.titleSmall}>BINAN</Text>

          <Text style={styles.headline}>
            <Text style={styles.headlineRegular}>
              Ai Based Detection and Enforcement Framework for{"\n"}
            </Text>
            <Text style={styles.headlineHighlight}>
              Electric Bicycle{"\n"}
            </Text>
            <Text style={styles.headlineRegular}>Compliance</Text>
          </Text>

          <Text style={styles.subheadline}>
            <Text style={styles.subSmart}>Smart</Text>
            <Text style={styles.subRegular}>
              {" "}Ai Solutions for Safer, Compliant{"\n"}E-Bike Use
            </Text>
          </Text>

          <Image
            source={require("../../assets/statue.png")}
            resizeMode="contain"
            style={styles.illustration}
          />
        </View>

        {/* Button without arrow */}
        <Pressable style={styles.nextButton} onPress={onNext}></Pressable>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  phoneFrame: {
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(254,254,254,0.45)",
  },

  topBar: {
    position: "absolute",
    top: 8,
    left: "20%",
    right: "20%",
    height: 6,
    borderRadius: 6,
    backgroundColor: "rgba(2, 80, 36, 0.08)",
  },

  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 48,
    paddingBottom: 28,
    justifyContent: "flex-start",
  },

  titleSmall: {
    alignSelf: "center",
    color: "#ff7a34",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 12,
  },

  headline: {
    marginTop: 8,
    color: "#05321a",
    fontSize: 20,
    lineHeight: 36,
    fontWeight: "700",
  },

  headlineRegular: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },

  headlineHighlight: {
    color: "#fb7a44",
    fontSize: 34,
    fontWeight: "900",
  },

  subheadline: {
    marginTop: 26,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    position: "relative",
  },

  subSmart: {
    color: "#fc8e60",
    fontSize: 28,
    fontWeight: "800",
  },

  subRegular: {
    color: "#113e21",
    fontSize: 20,
  },

  illustration: {
    position: "absolute",
    right: 18,
    bottom: 90,
    width: FRAME_WIDTH * 0.5,
    height: FRAME_HEIGHT * 0.35,
    opacity: 0.95,
  },

  nextButton: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2e7d32",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
});

export default LandingPage3;
