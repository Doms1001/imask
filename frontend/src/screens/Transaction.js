// frontend/src/screens/Transaction.js
import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native";

export default function Transaction() {
  // transaction types from screenshot
  const types = [
    { id: "priv_new", label: "Privately-Owned E-Bike — New" },
    { id: "priv_renew", label: "Privately-Owned E-Bike — Renewal" },
    { id: "for_hire", label: "E-Bike for Hire" },
  ];

  const feesByType = {
    priv_new: { registration: 100, permit: 150, metal_plate: 300, sticker: 90 },
    priv_renew: { registration: 100, permit: 150, metal_plate: 300, sticker: 90 },
    for_hire: { registration: 200, permit: 150, metal_plate: 300, sticker: 50 },
  };

  const [selectedType, setSelectedType] = useState("priv_new");
  const [reference, setReference] = useState("");
  const [history, setHistory] = useState([
    {
      id: "h1",
      typeLabel: "Privately-Owned E-Bike — New",
      amount: 640,
      note: "No reference",
      date: "11/11/2025, 9:13:52 PM",
    },
  ]);

  const currentFees = feesByType[selectedType] || {};

  const total = useMemo(
    () =>
      (currentFees.registration || 0) +
      (currentFees.permit || 0) +
      (currentFees.metal_plate || 0) +
      (currentFees.sticker || 0),
    [currentFees]
  );

  const onPay = () => {
    const entry = {
      id: String(Date.now()),
      typeLabel: types.find((t) => t.id === selectedType).label,
      amount: total,
      note: reference.trim() || "No reference",
      date: new Date().toLocaleString(),
    };
    setHistory((h) => [entry, ...h]);
    Alert.alert("Payment simulated", `Paid P${total.toFixed(2)}`);
    setReference("");
  };

  const onReset = () => {
    setReference("");
    setSelectedType("priv_new");
  };

  const cycleType = () => {
    const idx = types.findIndex((t) => t.id === selectedType);
    const next = types[(idx + 1) % types.length];
    setSelectedType(next.id);
  };

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuTxt}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Transaction</Text>

        <View style={styles.rightHeader}>
          <TouchableOpacity style={styles.notifBtn}>
            <Text style={styles.notifTxt}>🔔</Text>
          </TouchableOpacity>
          <View style={styles.redBadge}>
            <Text style={styles.badgeTxt}>6</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* dropdown label */}
        <Text style={styles.labelText}>Select Transaction Type</Text>

        <TouchableOpacity style={styles.picker} onPress={cycleType} activeOpacity={0.8}>
          <Text style={styles.pickerLabel}>
            {types.find((t) => t.id === selectedType).label}
          </Text>
          <Text style={styles.pickerChevron}>▾</Text>
        </TouchableOpacity>

        <Text style={[styles.labelText, { marginTop: 12 }]}>Reference (Plate / Owner)</Text>
        <TextInput
          style={styles.input}
          placeholder="Plate number or owner name"
          placeholderTextColor="#9a9a9a"
          value={reference}
          onChangeText={setReference}
        />

        {/* Fees area */}
        <View style={styles.feesBox}>
          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Registration Fee</Text>
            <Text style={styles.feeValue}>P{(currentFees.registration || 0).toFixed(2)}</Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Permit/License Fee</Text>
            <Text style={styles.feeValue}>P{(currentFees.permit || 0).toFixed(2)}</Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Metal Plate (one-time)</Text>
            <Text style={styles.feeValue}>P{(currentFees.metal_plate || 0).toFixed(2)}</Text>
          </View>

          <View style={styles.feeRow}>
            <Text style={styles.feeLabel}>Sticker (yearly)</Text>
            <Text style={styles.feeValue}>P{(currentFees.sticker || 0).toFixed(2)}</Text>
          </View>

          <View style={styles.separator} />

          <View style={[styles.feeRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <View style={styles.totalPill}>
              <Text style={styles.totalText}>P{total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.payButton} onPress={onPay} activeOpacity={0.85}>
            <Text style={styles.payBtnText}>Pay (simulate)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={onReset} activeOpacity={0.85}>
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction history */}
        <Text style={styles.sectionTitle}>Transaction History</Text>
        {history.map((h) => (
          <View key={h.id} style={styles.historyCard}>
            <View style={styles.historyTop}>
              <Text style={styles.historyType}>{h.typeLabel}</Text>
              <Text style={styles.historyAmount}>P{h.amount.toFixed(2)}</Text>
            </View>
            <Text style={styles.historyNote}>{h.note}</Text>
            <Text style={styles.historyDate}>{h.date}</Text>
          </View>
        ))}

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* bottom tab */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>📋</Text>
          <Text style={styles.tabLabel}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.tabActive]}>
          <Text style={[styles.tabIcon, styles.tabActiveIcon]}>💳</Text>
          <Text style={[styles.tabLabel, styles.tabActiveLabel]}>Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f2f2f2" },

  /* header */
  header: {
    height: 56,
    backgroundColor: "#1f7a37",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  menuBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.06)",
    alignItems: "center",
    justifyContent: "center",
  },
  menuTxt: { color: "#fff", fontSize: 18 },
  headerTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },

  rightHeader: { width: 56, alignItems: "flex-end", justifyContent: "center" },
  notifBtn: { width: 36, height: 36, alignItems: "center", justifyContent: "center" },
  notifTxt: { color: "#fff", fontSize: 16 },
  redBadge: {
    position: "absolute",
    right: 2,
    top: 8,
    backgroundColor: "#e53935",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeTxt: { color: "#fff", fontSize: 10, fontWeight: "700" },

  content: { padding: 14 },

  labelText: { color: "#333", fontSize: 13, marginBottom: 6 },

  picker: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 12 : 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pickerLabel: { color: "#222", fontSize: 14 },
  pickerChevron: { color: "#666", fontSize: 18 },

  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 14,
    color: "#222",
  },

  feesBox: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  feeRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 6 },
  feeLabel: { color: "#444", fontSize: 13 },
  feeValue: { color: "#444", fontSize: 13, fontWeight: "700" },

  separator: { height: 1, backgroundColor: "#eee", marginVertical: 8 },

  totalRow: { alignItems: "center" },
  totalLabel: { fontSize: 15, fontWeight: "700", color: "#222" },
  totalPill: {
    backgroundColor: "#e6f5ea",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 8,
  },
  totalText: { fontWeight: "700", color: "#1f7a37" },

  buttonsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },
  payButton: {
    flex: 1,
    backgroundColor: "#1f7a37",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 8,
  },
  payBtnText: { color: "#fff", fontWeight: "700" },
  resetButton: {
    width: 110,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resetBtnText: { color: "#333", fontWeight: "700" },

  sectionTitle: { marginTop: 18, marginBottom: 8, color: "#333", fontWeight: "700" },
  historyCard: { backgroundColor: "#fff", borderRadius: 8, padding: 12, marginBottom: 10 },
  historyTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  historyType: { fontWeight: "700", color: "#222" },
  historyAmount: { fontWeight: "700", color: "#1f7a37" },
  historyNote: { color: "#666", fontSize: 12 },
  historyDate: { color: "#999", fontSize: 12, marginTop: 6 },

  tabBar: {
    height: 64,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabItem: { alignItems: "center", justifyContent: "center" },
  tabIcon: { fontSize: 18 },
  tabLabel: { fontSize: 11, color: "#666" },

  tabActive: {},
  tabActiveIcon: { color: "#1f7a37" },
  tabActiveLabel: { color: "#1f7a37", fontWeight: "700" },
});
