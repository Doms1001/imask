// frontend/src/screens/ConfirmationAdmin.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width: WINDOW_W } = Dimensions.get("window");
const CARD_W = Math.min(300, WINDOW_W - 40);

export default function ConfirmationAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      {/* faint background seal */}
      <Image
        source={require("../../assets/binan-seal-large.png")} // replace with your asset
        style={styles.bgSeal}
        resizeMode="cover"
      />

      {/* Title */}
      <Text style={styles.title}>Almost There!</Text>

      {/* circular emblem overlapping the card (top-right) */}
      <Image
        source={require("../../assets/scooter-emblem.png")} // replace with your asset
        style={styles.emblem}
        resizeMode="contain"
      />

      {/* Card */}
      <View style={[styles.card, { width: CARD_W }]}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your Email"
          placeholderTextColor="#8b8b8b"
          style={styles.input}
        />

        <Text style={[styles.label, { marginTop: 14 }]}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your Password"
          placeholderTextColor="#8b8b8b"
          secureTextEntry
          style={styles.input}
        />

        <Text style={[styles.label, { marginTop: 14 }]}>Confirm Password</Text>
        <TextInput
          value={confirm}
          onChangeText={setConfirm}
          placeholder="Confirm your Password"
          placeholderTextColor="#8b8b8b"
          secureTextEntry
          style={styles.input}
        />

        {/* checkbox + terms */}
        <View style={styles.termsRow}>
          <TouchableOpacity
            onPress={() => setAccepted(!accepted)}
            style={[styles.checkbox, accepted ? styles.checkboxChecked : null]}
            activeOpacity={0.9}
          >
            {accepted ? <View style={styles.checkboxTick} /> : null}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            I have read and accept <Text style={styles.termsLink}>terms</Text> of use.
          </Text>
        </View>

        {/* Submit button */}
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.9}
          onPress={() => {
            // submit handler
          }}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2e7d32", // green background
    alignItems: "center",
  },

  /* background faint seal */
  bgSeal: {
    position: "absolute",
    top: -30,
    left: -20,
    width: 380,
    height: 380,
    opacity: 0.18,
  },

  title: {
    marginTop: 28,
    fontSize: 30,
    color: "#f0f0f0",
    fontFamily: "Freeman",
    fontWeight: "700",
    textAlign: "center",
  },

  emblem: {
    position: "absolute",
    top: 90,
    right: (WINDOW_W - CARD_W) / 2 - 10, // visually overlaps card top-right
    width: 100,
    height: 100,
  },

  card: {
    marginTop: 38,
    backgroundColor: "#f0f0f0",
    borderRadius: 34,
    paddingVertical: 18,
    paddingHorizontal: 14,
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
    alignItems: "flex-start",
  },

  label: {
    fontSize: 16,
    fontFamily: "Karma-Bold",
    fontWeight: "700",
    color: "#000",
    marginLeft: 6,
  },

  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    fontFamily: "Karma-Bold",
    color: "#333",
    // subtle raised look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    paddingHorizontal: 4,
  },

  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#9f9ab4",
    backgroundColor: "#fff",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2e7d32",
    borderColor: "#2e7d32",
  },
  checkboxTick: {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
  },

  termsText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Karma-Bold",
  },
  termsLink: {
    color: "#113e21",
    fontWeight: "700",
  },

  submitBtn: {
    alignSelf: "center",
    marginTop: 16,
    width: 134,
    height: 46,
    borderRadius: 20,
    backgroundColor: "#113e21",
    alignItems: "center",
    justifyContent: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 6,
  },
  submitText: {
    color: "#f0f0f0",
    fontSize: 18,
    fontFamily: "Freeman",
    fontWeight: "700",
  },
});


