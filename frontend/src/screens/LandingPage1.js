import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";

import bgImage from "../../assets/bg-background.png";
import logoLeft from "../../assets/logo-left.png";
import logoRight from "../../assets/logo-right.png";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const LOGO_SIZE = Math.round(SCREEN_WIDTH * 0.25); 
const LOGO_SPACING = Math.round(SCREEN_WIDTH * 0.06); 

const LandingPage1 = ({
  onPressLeftLogo = () => {},
  onPressRightLogo = () => {},
}) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Background */}
        <Image source={bgImage} style={styles.bgImage} resizeMode="cover" />

        {/* Two centered circular logos */}
        <View
          style={[
            styles.logoContainer,
            { transform: [{ translateY: -LOGO_SIZE / 2 }] },
          ]}
        >
          {/* Left logo */}
          <Pressable
            onPress={onPressLeftLogo}
            style={[styles.logoPress, { marginRight: LOGO_SPACING }]}
          >
            <Image
              source={logoLeft}
              style={[
                styles.logoImage,
                {
                  width: LOGO_SIZE,
                  height: LOGO_SIZE,
                  borderRadius: LOGO_SIZE / 2,
                },
              ]}
            />
          </Pressable>

          {/* Right logo */}
          <Pressable
            onPress={onPressRightLogo}
            style={[styles.logoPress, { marginLeft: LOGO_SPACING }]}
          >
            <Image
              source={logoRight}
              style={[
                styles.logoImage,
                {
                  width: LOGO_SIZE,
                  height: LOGO_SIZE,
                  borderRadius: LOGO_SIZE / 2,
                },
              ]}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoPress: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  logoImage: {
    resizeMode: "cover",
    overflow: "hidden",
  },
});

export default LandingPage1;


