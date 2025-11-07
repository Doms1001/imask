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
const FRAME_WIDTH = Math.min(360, SCREEN_WIDTH * 0.9);
const FRAME_HEIGHT = Math.round(FRAME_WIDTH * (812 / 360));

const LandingPage2 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.center}>
        <View style={[styles.phoneFrame, { width: FRAME_WIDTH, height: FRAME_HEIGHT }]}>
          
          <ImageBackground
            source={require("../assets/bg-binan-sunburst.png")}
            style={styles.bgImage}
            imageStyle={styles.bgImageStyle}
            resizeMode="cover"
          >
            {/* Top indicator bars */}
            <View style={styles.topIndicators}>
              <View style={[styles.indicator, styles.green]} />
              <View style={[styles.indicator, styles.darkGray]} />
              <View style={[styles.indicator, styles.darkGray]} />
            </View>

            {/* Top Logos (NOW ONLY ONE LOGO) */}
            <View style={styles.topLogos}>
              <Image
                source={require("../assets/logo-experience.png")}
                style={styles.experienceLogo}
                resizeMode="contain"
              />
            </View>

            {/* Headline text */}
            <View style={styles.headlineWrap}>
              <Text style={styles.headlineLine1}>
                Ai Based Detection and{"\n"}Enforcement Framework for
              </Text>

              <Text style={styles.headlineLine2}>
                <Text style={styles.electric}> Electric Bicycle{"\n"}</Text>
                <Text style={styles.compliance}>Compliance</Text>
              </Text>
            </View>

            {/* Button */}
            <Pressable style={styles.getStartedBtn} onPress={() => {}}>
              <Text style={styles.getStartedText}>Get Started</Text>
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
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },

  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingHorizontal: 18,
    paddingTop: 12,
    position: "relative",
  },

  bgImageStyle: {
    opacity: 0.92,
  },

  /* Top bars */
  topIndicators: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: FRAME_WIDTH * 0.18,
    height: 5,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  green: { backgroundColor: "#2e7d32" },
  darkGray: { backgroundColor: "#333" },

  /* Logos */
  topLogos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  experienceLogo: {
    height: FRAME_WIDTH * 0.12,
    aspectRatio: 3.8,
  },

  /* Texts */
  headlineWrap: {
    marginTop: FRAME_HEIGHT * 0.1,
    paddingHorizontal: 22,
  },
  headlineLine1: {
    fontSize: 20,
    lineHeight: 26,
    color: "#0a3015",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 6,
  },
  headlineLine2: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "700",
    textAlign: "left",
  },
  electric: {
    color: "#fb7a44",
    fontWeight: "700",
  },
  compliance: {
    color: "#0a3015",
  },

  /* Button */
  getStartedBtn: {
    position: "absolute",
    bottom: FRAME_HEIGHT * 0.08,
    alignSelf: "center",
    backgroundColor: "#2e7d32",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default LandingPage2;


