// screens/Login.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function Login() {
  // form state (example)
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    contact: "",
    address: "",
    category: "",
    model: "",
    color: "",
    chassis: "",
    plate: "",
  });

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const onBack = () => {
    console.log("Back pressed");
  };

  const onNext = () => {
    console.log("Form data:", form);
  };

  return (
    <SafeAreaView style={s.screen}>
      {/* Header */}
      <View style={s.headerWrap}>
        <View style={s.headerInner}>
          <Text style={s.headerText}>AIDE BINAN</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={s.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={s.card}>
            <Text style={s.title}>Create an account</Text>
            <Text style={s.sub}>Already have an account? Log in</Text>

            <Text style={s.sectionTitle}>Personal Information</Text>

            <Text style={s.label}>First Name</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your first name"
              placeholderTextColor="#9a9a9a"
              value={form.firstName}
              onChangeText={(v) => update("firstName", v)}
            />

            <Text style={s.label}>Middle Name</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your middle name"
              placeholderTextColor="#9a9a9a"
              value={form.middleName}
              onChangeText={(v) => update("middleName", v)}
            />

            <Text style={s.label}>Last Name</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your last name"
              placeholderTextColor="#9a9a9a"
              value={form.lastName}
              onChangeText={(v) => update("lastName", v)}
            />

            <View style={s.row}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <Text style={s.label}>Birthday</Text>
                <TextInput
                  style={s.input}
                  placeholder="MM/DD/YYYY"
                  placeholderTextColor="#9a9a9a"
                  value={form.birthday}
                  onChangeText={(v) => update("birthday", v)}
                />
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <Text style={s.label}>Contact Number</Text>
                <TextInput
                  style={s.input}
                  placeholder="Enter your contact number"
                  placeholderTextColor="#9a9a9a"
                  keyboardType="phone-pad"
                  value={form.contact}
                  onChangeText={(v) => update("contact", v)}
                />
              </View>
            </View>

            <Text style={s.label}>Address</Text>
            <TextInput
              style={[s.input, { height: 80 }]}
              placeholder="Enter your full address"
              placeholderTextColor="#9a9a9a"
              multiline
              value={form.address}
              onChangeText={(v) => update("address", v)}
            />

            <Text style={[s.sectionTitle, { marginTop: 18 }]}>
              E-Bike Information
            </Text>

            <Text style={s.label}>Category</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your E-Bike Category"
              placeholderTextColor="#9a9a9a"
              value={form.category}
              onChangeText={(v) => update("category", v)}
            />

            <Text style={s.label}>E-Bike Model</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your E-Bike model"
              placeholderTextColor="#9a9a9a"
              value={form.model}
              onChangeText={(v) => update("model", v)}
            />

            <Text style={s.label}>E-Bike Color</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your E-Bike color"
              placeholderTextColor="#9a9a9a"
              value={form.color}
              onChangeText={(v) => update("color", v)}
            />

            <Text style={s.label}>Chassis number</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your chassis number"
              placeholderTextColor="#9a9a9a"
              value={form.chassis}
              onChangeText={(v) => update("chassis", v)}
            />

            <Text style={s.label}>Plate number</Text>
            <TextInput
              style={s.input}
              placeholder="Enter your plate number"
              placeholderTextColor="#9a9a9a"
              value={form.plate}
              onChangeText={(v) => update("plate", v)}
            />

            <View style={{ height: 24 }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer actions */}
      <View style={s.footer}>
        <TouchableOpacity style={s.backBtn} onPress={onBack}>
          <Text style={s.backTxt}>◂ Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.nextBtn} onPress={onNext}>
          <Text style={s.nextTxt}>Next ▸</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#2e7d32" },

  headerWrap: {
    height: 64,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 8,
    backgroundColor: "#2e7d32",
  },
  headerInner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 6,
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    backgroundColor: "#1f7a37",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },

  scrollContainer: {
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  card: {
    width: Math.min(360, 360),
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "left",
    color: "#111",
  },

  sub: {
    marginTop: 6,
    color: "#333",
    fontWeight: "600",
    fontSize: 13,
  },

  sectionTitle: {
    marginTop: 14,
    fontWeight: "700",
    fontSize: 18,
    color: "#113e21",
  },

  label: {
    marginTop: 12,
    color: "#333",
    fontSize: 14,
    fontWeight: "600",
  },

  input: {
    marginTop: 6,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    color: "#111",
  },

  row: {
    flexDirection: "row",
    alignItems: "stretch",
  },

  footer: {
    height: 64,
    backgroundColor: "#2e7d32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  backBtn: {
    backgroundColor: "#113e21",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backTxt: { color: "#fff", fontWeight: "700" },

  nextBtn: {
    backgroundColor: "#113e21",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  nextTxt: { color: "#fff", fontWeight: "700" },
});


