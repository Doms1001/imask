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

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PAGE_WIDTH = Math.min(360, SCREEN_WIDTH);
const CARD_WIDTH = 314;
const HEADER_HEIGHT = 78;

// Replace these with actual image assets in your project
const ICON_BACK = require("../../assets/ic_back.png");
const ICON_CHEVRON = require("../../assets/chevron-right.png");

export default function Settings({ navigation }) {
  const onBack = () => {
    if (navigation?.goBack) navigation.goBack();
  };

  // handlers for rows (no-op by default)
  const onPressEmail = () => {};
  const onPressPassword = () => {};
  const onPress2Step = () => {};
  const onPressLogout = () => {};
  const onPressDeleteAccount = () => {};

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backWrap}>
            <Image source={ICON_BACK} style={styles.backIcon} resizeMode="contain" />
          </Pressable>
          <Text style={styles.title}>Settings</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Top spacing */}
          <View style={{ height: 12 }} />

          {/* Name pill (top) */}
          <View style={styles.namePill}>
            <Text style={styles.nameText}>Name</Text>
          </View>

          {/* Account Security card */}
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>Account Security</Text>

            <Pressable style={styles.row} onPress={onPressEmail}>
              <Text style={styles.rowLabel}>Email</Text>
              <Image source={ICON_CHEVRON} style={styles.chevron} resizeMode="contain" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row} onPress={onPressPassword}>
              <View>
                <Text style={styles.rowLabel}>Password</Text>
                <Text style={styles.rowSub}>Set a permanent password to login your account.</Text>
              </View>
              <Image source={ICON_CHEVRON} style={styles.chevron} resizeMode="contain" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row} onPress={onPress2Step}>
              <View style={{ flex: 1 }}>
                <Text style={styles.rowLabelBold}>2-step verification</Text>
                <Text style={styles.rowSub}>Add an additional layer of security to your account during sign in</Text>
              </View>
              <Image source={ICON_CHEVRON} style={styles.chevron} resizeMode="contain" />
            </Pressable>
          </View>

          {/* Spacer */}
          <View style={{ height: 18 }} />

          {/* Support card */}
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>Support</Text>

            <Pressable style={styles.row} onPress={onPressLogout}>
              <View>
                <Text style={styles.rowLabelBold}>Logout</Text>
                <Text style={styles.rowSub}>Log out this one active session.</Text>
              </View>
              <Image source={ICON_CHEVRON} style={styles.chevron} resizeMode="contain" />
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.row} onPress={onPressDeleteAccount}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.rowLabelBold, { color: "#e8151b" }]}>Delete my Account</Text>
                <Text style={[styles.rowSub, { color: "#9e9e9e" }]}>
                  Permanently delete the account and remove access from all devices.
                </Text>
              </View>
              <Image source={ICON_CHEVRON} style={styles.chevron} resizeMode="contain" />
            </Pressable>
          </View>

          {/* bottom spacer */}
          <View style={{ height: 36 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2b2727", // dark frame like screenshot
    alignItems: "center",
  },

  container: {
    width: PAGE_WIDTH,
    flex: 1,
    backgroundColor: "#fefefe",
  },

  /* Header */
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: "#2e7d32",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backWrap: {
    position: "absolute",
    left: 12,
    top: (HEADER_HEIGHT - 36) / 2,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  /* Content area */
  content: {
    paddingHorizontal: 12,
    paddingTop: 12,
    alignItems: "center",
  },

  namePill: {
    width: CARD_WIDTH,
    height: 48,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 14,
    paddingVertical: 8,
    // subtle shadow
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: "#f1f1f1",
  },

  sectionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#9e9e9e",
    paddingHorizontal: 12,
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  rowLabel: {
    fontSize: 18,
    color: "#9e9e9e",
    fontWeight: "600",
  },
  rowLabelBold: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
  },
  rowSub: {
    marginTop: 6,
    fontSize: 14,
    color: "#9e9e9e",
    width: CARD_WIDTH - 120,
  },
  chevron: {
    width: 18,
    height: 18,
    tintColor: "#9e9e9e",
    marginLeft: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 6,
  },
});
