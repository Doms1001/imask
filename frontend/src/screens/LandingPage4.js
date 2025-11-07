// frontend/src/screens/LandingPage4.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const FRAME_WIDTH = Math.min(360, SCREEN_WIDTH * 0.94);
const FRAME_HEIGHT = Math.round(FRAME_WIDTH * (812 / 360));

const LandingPage4 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.center}>
        <View style={[styles.phoneFrame, { width: FRAME_WIDTH, height: FRAME_HEIGHT }]}>

          <ImageBackground
            source={require("../assets/bg-blurred.png")}
            style={styles.bgImage}
            imageStyle={styles.bgImageStyle}
            resizeMode="cover"
          >
            {/* Top indicator bars */}
            <View style={styles.topIndicators}>
              <View style={[styles.indicator, styles.indGreen]} />
              <View style={[styles.indicator, styles.indDark]} />
              <View style={[styles.indicator, styles.indDark]} />
            </View>

            {/* Script Logo */}
            <Image
              source={require("../assets/the-city-of-life.png")}
              style={[styles.cityScript, { width: FRAME_WIDTH * 0.6, height: FRAME_WIDTH * 0.18 }]}
              resizeMode="contain"
            />

            {/* Headline */}
            <View style={styles.headlineWrap}>
              <Text style={styles.headlineLine1}>
                From Detection to{"\n"}Action:
                <Text style={styles.space}> </Text>
                <Text style={styles.ai}>AI</Text>
              </Text>

              <Text style={styles.headlineLine2}>
                <Text style={styles.headlineNormal}> Framework for E-Bike{"\n"}</Text>
                <Text style={styles.headlineNormal}>Compliance</Text>
              </Text>
            </View>

            {/*  Decorative LARGE IMAGE REMOVED here */}

            {/* Sign-in pill button */}
            <Pressable
              style={[
                styles.signInWrapper,
                { left: FRAME_WIDTH * 0.12, bottom: FRAME_HEIGHT * 0.06 },
              ]}
              onPress={() => {}}
            >
              <View style={styles.signInPill}>
                <Text style={styles.signInText}>Sign in</Text>
              </View>
            </Pressable>
          </ImageBackground>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "transparent" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },

  phoneFrame: {
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },

  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  bgImageStyle: {
    opacity: 0.96,
  },

  /* Top indicator bars */
  topIndicators: {
    width: "100%",
    height: 20,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: FRAME_WIDTH * 0.18,
    height: 4,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  indGreen: { backgroundColor: "#2e7d32" },
  indDark: { backgroundColor: "#333" },

  /* Script logo */
  cityScript: {
    alignSelf: "center",
    marginTop: 6,
    opacity: 0.98,
  },

  /* Headline */
  headlineWrap: {
    marginTop: FRAME_HEIGHT * 0.06,
    paddingHorizontal: 8,
    width: "100%",
  },
  headlineLine1: {
    fontSize: 22,
    lineHeight: 30,
    color: "#113e21",
    fontWeight: "800",
    textAlign: "left",
  },
  space: {
    fontSize: 22,
  },
  ai: {
    color: "#fc8e60",
    fontWeight: "900",
    fontSize: 22,
  },
  headlineLine2: {
    marginTop: 6,
  },
  headlineNormal: {
    fontSize: 22,
    lineHeight: 30,
    color: "#113e21",
    fontWeight: "800",
    textAlign: "left",
  },

  /* Sign-in button */
  signInWrapper: {
    position: "absolute",
  },
  signInPill: {
    backgroundColor: "#2e7d32",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 18,
    minWidth: 84,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 5,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default LandingPage4;


