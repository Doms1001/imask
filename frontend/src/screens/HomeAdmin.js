// frontend/src/screens/HomeAdmin.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function HomeAdmin() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        {/* AIDE text only */}
        <Text style={styles.brand}>AIDE</Text>

        <TouchableOpacity style={styles.notifButton}>
          <Text style={styles.notifDot}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* greeting + quick buttons */}
        <View style={styles.greetingRow}>
          <View>
            <Text style={styles.greetingSmall}>Hi, Juan</Text>
          </View>

          <View style={styles.quickButtons}>
            <TouchableOpacity style={[styles.pill, styles.pillPrimary]}>
              <Text style={styles.pillTextPrimary}>What's new?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.pill, styles.pillOutline]}>
              <Text style={styles.pillTextOutline}>Ordinance</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Green Route card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Green Route</Text>
          <Text style={styles.cardSub}>some details</Text>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Open Full Map</Text>
          </TouchableOpacity>
        </View>

        {/* New update card */}
        <View style={styles.card}>
          <View style={styles.updateHeader}>
            <Text style={styles.updateTitle}>New update</Text>
            <Text style={styles.updateSubtitle}>Admin quick report</Text>
          </View>

          <Text style={styles.updateHint}>
            You can type a plate number, upload an image, or open camera to capture and save directly.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter plate (e.g. ABC-1234)"
            placeholderTextColor="#666"
          />

          <View style={styles.fileRow}>
            <TouchableOpacity style={styles.fileBtn}>
              <Text style={styles.fileBtnText}>Choose File</Text>
            </TouchableOpacity>
            <Text style={styles.fileName}>No file chosen</Text>
            <TouchableOpacity style={styles.cameraBtn}>
              <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tip}>
            Tip: Use camera button to capture and auto-save (admin only).
          </Text>
        </View>

        {/* News item */}
        <View style={styles.newsItem}>
          <Text style={styles.newsTitle}>News Update Headline</Text>
          <Text style={styles.newsSub}>some details</Text>
          <Text style={styles.newsDate}>Sept 9</Text>
        </View>

        <View style={{ height: 56 }} />
      </ScrollView>

      {/* Bottom Tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabIcon}>📝</Text>
          <Text style={styles.tabLabel}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabIcon}>💳</Text>
          <Text style={styles.tabLabel}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },

  header: {
    height: 56,
    backgroundColor: "#1f7a37",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: { color: "#fff", fontSize: 18 },

  brand: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  notifButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  notifDot: { color: "#fff" },

  content: { padding: 12, paddingTop: 16 },

  greetingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  greetingSmall: { color: "#444", fontSize: 16, fontWeight: "600" },

  quickButtons: { flexDirection: "row", alignItems: "center" },

  pill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 8,
  },
  pillPrimary: { backgroundColor: "#0b7830" },
  pillTextPrimary: { color: "#fff", fontWeight: "700" },
  pillOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pillTextOutline: { color: "#333", fontWeight: "700" },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },

  cardTitle: { fontSize: 16, fontWeight: "700", color: "#222" },
  cardSub: { fontSize: 12, color: "#777", marginBottom: 8 },

  greenButton: {
    marginTop: 8,
    backgroundColor: "#0b7830",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  greenButtonText: { color: "#fff", fontWeight: "700" },

  updateHeader: { flexDirection: "row", justifyContent: "space-between" },
  updateTitle: { fontSize: 15, fontWeight: "700" },
  updateSubtitle: { color: "#888", fontSize: 12 },

  updateHint: { fontSize: 12, marginTop: 8 },

  input: {
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#111",
    marginTop: 10,
  },

  fileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  fileBtn: {
    backgroundColor: "#efefef",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  fileBtnText: { color: "#333" },

  fileName: { marginLeft: 12, color: "#666", flex: 1 },

  cameraBtn: {
    backgroundColor: "#0b7830",
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  cameraIcon: { color: "#fff" },

  tip: { fontSize: 11, color: "#666", marginTop: 8 },

  newsItem: { backgroundColor: "#fff", borderRadius: 10, padding: 12, marginTop: 8 },
  newsTitle: { fontSize: 14, fontWeight: "700" },
  newsSub: { color: "#666", marginTop: 4 },
  newsDate: { color: "#888", marginTop: 6, fontSize: 12 },

  tabBar: {
    height: 62,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: { alignItems: "center" },
  tabIcon: { fontSize: 18 },
  tabLabel: { fontSize: 12, color: "#666" },
});
