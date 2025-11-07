// frontend/src/screens/TermsService.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const PAGE_WIDTH = Math.min(360, SCREEN_WIDTH);
const HEADER_HEIGHT = 78;

// Replace these with your assets
const MENU_ICON = require("../../assets/ic_menu.png");    // left chevron/menu (white)
const BELL_ICON = require("../../assets/ic_bell.png");    // bell icon (white)
const LOGO = require("../../assets/aide_logo.png");       // small logo if needed

export default function TermsService({ onBack = () => {} }) {
  const content = `This summary is provided for convenience. Please review the Terms of Service below for important information and legal conditions that apply to your use of the A.I.D.E. Biñan (AI Detection and Enforcement for Electric Bicycle Compliance) application. The system is intended to assist the City of Biñan in monitoring, detecting, and enforcing e-bike regulations using artificial intelligence to promote public safety and responsible riding.

USE OF APPLICATION
By using the A.I.D.E. Biñan app, you agree to these Terms of Service and all applicable laws. You must use the system only for lawful, authorized purposes and avoid any misuse, tampering, or unauthorized data access. All enforcement actions and official decisions remain under the authority of human officers and government agencies.

DATA COLLECTION AND PRIVACY
The system may collect images, plate numbers, timestamps, and location details for e-bike compliance and traffic monitoring. All data gathered is handled according to the Data Privacy Act of 2012 (RA 10173) and used only for official enforcement and reporting. Personal or unrelated data is not shared with any third party.

LIMITATIONS AND ACCURACY
While the system uses advanced AI detection, performance may vary due to lighting, weather, or camera conditions. A.I.D.E. Biñan does not guarantee 100% accuracy in detection or reporting. The application serves as a tool to support, not replace, official human enforcement.`;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.outer}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.leftIcon}>
            <Image source={MENU_ICON} style={styles.iconImage} resizeMode="contain" />
          </Pressable>

          <Text style={styles.title}>Terms of Service</Text>

          <View style={styles.rightIcon}>
            <Image source={BELL_ICON} style={styles.iconImage} resizeMode="contain" />
          </View>
        </View>

        {/* Content card */}
        <View style={styles.cardWrap}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.paragraph}>
              {`This summary is provided for convenience. Please review the Terms of Service below for important information and legal conditions that apply to your use of the A.I.D.E. Biñan (AI Detection and Enforcement for Electric Bicycle Compliance) application. The system is intended to assist the City of Biñan in monitoring, detecting, and enforcing e-bike regulations using artificial intelligence to promote public safety and responsible riding.`}
            </Text>

            <Text style={styles.sectionTitle}>USE OF APPLICATION</Text>
            <Text style={styles.paragraph}>
              {`By using the A.I.D.E. Biñan app, you agree to these Terms of Service and all applicable laws. You must use the system only for lawful, authorized purposes and avoid any misuse, tampering, or unauthorized data access. All enforcement actions and official decisions remain under the authority of human officers and government agencies.`}
            </Text>

            <Text style={styles.sectionTitle}>DATA COLLECTION AND PRIVACY</Text>
            <Text style={styles.paragraph}>
              {`The system may collect images, plate numbers, timestamps, and location details for e-bike compliance and traffic monitoring. All data gathered is handled according to the Data Privacy Act of 2012 (RA 10173) and used only for official enforcement and reporting. Personal or unrelated data is not shared with any third party.`}
            </Text>

            <Text style={styles.sectionTitle}>LIMITATIONS AND ACCURACY</Text>
            <Text style={styles.paragraph}>
              {`While the system uses advanced AI detection, performance may vary due to lighting, weather, or camera conditions. A.I.D.E. Biñan does not guarantee 100% accuracy in detection or reporting. The application serves as a tool to support, not replace, official human enforcement.`}
            </Text>

            {/* bottom spacer */}
            <View style={{ height: 36 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2b2727",
    alignItems: "center",
  },

  outer: {
    width: PAGE_WIDTH,
    flex: 1,
    backgroundColor: "#fefefe",
  },

  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#2e7d32",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  leftIcon: {
    position: "absolute",
    left: 12,
    top: (HEADER_HEIGHT - 36) / 2,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  rightIcon: {
    position: "absolute",
    right: 12,
    top: (HEADER_HEIGHT - 36) / 2,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  cardWrap: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  scroll: { width: "100%" },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },

  paragraph: {
    fontSize: 13,
    lineHeight: 20,
    color: "#222",
    marginBottom: 12,
  },

  sectionTitle: {
    marginTop: 6,
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#2e7d32",
  },
});
