







// frontend/src/screens/RegisterAdmin.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: WINDOW_W } = Dimensions.get("window");
const CARD_W = Math.min(360, WINDOW_W - 30); // card width similar to screenshot

const RegisterAdmin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header - green bar with small logo/title */}
      <View style={styles.header}>
        {/* Replace with your logo */}
        <Image
          source={require("../../assets/aide-logo.png")}
          style={styles.headerLogo}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {/* Card */}
        <View style={styles.card}>
          {/* Title */}
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.subtitle}>Already have an account? Log in</Text>
          </View>

          {/* Section: Personal Information */}
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.field}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} placeholder="Enter your first name" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Middle Name</Text>
            <TextInput style={styles.input} placeholder="Enter your Middle name" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input} placeholder="Enter your last name" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Birthday</Text>
            <View style={styles.row}>
              <TextInput style={[styles.input, styles.dateInput]} placeholder="MM/DD/YYYY" />
              {/* calendar icon placeholder */}
              <Image
                source={require("../../assets/calendar-outline.png")}
                style={styles.calendarIcon}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput style={styles.input} placeholder="Enter your Contact Number" keyboardType="phone-pad" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={[styles.input, styles.multiline]} placeholder="Enter your full address" multiline />
          </View>

          {/* Section: Work Information */}
          <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Work Information</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Employee Number</Text>
            <TextInput style={styles.input} placeholder="Enter your employee number" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Department</Text>
            <TextInput style={styles.input} placeholder="Enter your department" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Position</Text>
            <TextInput style={styles.input} placeholder="Enter your position" />
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation bar with Back and Next buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => { /* navigation?.goBack() */ }}>
          <Text style={styles.backText}>◀ Back</Text>
        </TouchableOpacity>

        {/* centered small emblem - replace with your icon */}
        <View style={styles.emblemWrap}>
          <Image
            source={require("../../assets/emblem.png")}
            style={styles.emblem}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={() => { /* proceed to next */ }}>
          <Text style={styles.nextText}>Next ▶</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterAdmin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
  },

  header: {
    width: "100%",
    backgroundColor: "#2e7d32", // deep green from screenshot
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogo: {
    height: 34,
    width: 120,
  },

  scrollArea: {
    alignItems: "center",
    paddingVertical: 14,
    paddingBottom: 120, // leave room for footer
  },

  card: {
    width: CARD_W,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 18,
    // shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    // elevation for Android
    elevation: 6,
  },

  titleBlock: {
    marginBottom: 6,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontFamily: "System",
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Karma-Bold",
    color: "#000",
  },

  sectionTitle: {
    fontSize: 28,
    fontFamily: "Freeman", // if unavailable will fallback
    fontWeight: "700",
    color: "#000",
    marginTop: 12,
    marginBottom: 8,
  },

  field: {
    marginTop: 12,
    width: "100%",
  },
  label: {
    fontSize: 20,
    fontFamily: "Karma-Bold",
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    fontSize: 15,
    fontFamily: "Karma-Bold",
    color: "#333",
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: "top",
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateInput: {
    flex: 1,
  },
  calendarIcon: {
    width: 22,
    height: 22,
    marginLeft: 10,
    tintColor: "#333",
  },

  footer: {
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#113e21", // deep green background
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },

  backBtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  backText: {
    color: "#fffbfb",
    fontSize: 18,
    fontFamily: "Karma-Bold",
    fontWeight: "700",
  },

  emblemWrap: {
    width: 42,
    height: 42,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e7d32",
  },
  emblem: {
    width: 36,
    height: 36,
  },

  nextBtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  nextText: {
    color: "#fffbfb",
    fontSize: 18,
    fontFamily: "Karma-Bold",
    fontWeight: "700",
  },
});


