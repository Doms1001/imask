// frontend/src/screens/Def2.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const { width: WINDOW_W, height: WINDOW_H } = Dimensions.get("window");
const CARD_W = Math.min(298, WINDOW_W - 40); // narrow column to match screenshot

export default function Def2() {
  const longText = `
SECTION 3. Definition of Terms. The following terms are included pursuant to Land Transportation Office Administrative Order No. 2021-039 dated May 11, 2021, to wit:

Electric Vehicle - a motor vehicle powered by electric motors with power storage charge directly from external sources. The definition excludes hybrid vehicles.

Curb Weight - total unloaded mass of a vehicle with standard equipment and all necessary operating consumables such as fluids, oils, coolant, refrigerant and batteries in the case of electric vehicles.
Unladen Weight - unloaded weight of the vehicle. In the case of electric vehicles, it excludes the weight of the battery.

Category - shall refer to vehicle category as specified in the Philippine National Standards (PS) on Road Vehicles-Classification and Definition PNS 1891/2008 (UN ECE Published 2017) ICS 43.040.01

Electric Mobility Scooter - a two, three, or four-wheeled vehicle, with or without operable pedals, powered by electrical energy with less than 300 wattage capable of propelling the unit up to a maximum speed of 12.5 km/hr.

Category L Electric Vehicle - a motor vehicle with less than four wheels and including 4 wheeled vehicles with restrictions on maximum speed, maximum mass and maximum rated power as in the case of L6 and L7.

Category L1 (e-Moped 2w) - a two-wheeled vehicle, with or without pedals, powered by electrical energy capable of propelling the unit up to a maximum speed of 50 km/hr. For regulation purposes, they are further classified into Category L1a and L1b. E-bikes fall under this category.

Category L2 (e-Moped 3w) - a three-wheeled vehicle, with or without pedals, powered by electrical energy capable of propelling the unit up to a maximum speed of 50 km/hr. For regulation purposes, they are further classified into Category L2a and L2b.

Category L3 (e-Motorcycle) - a two-wheeled vehicle, powered solely by electrical energy capable of propelling the unit more than 50 km/hr.

Category L4 and L5 (e-Tricycle / e-Three Wheeled Vehicle) - a three-wheeled motor vehicle powered solely by electrical energy with a minimum rated power of 1000 W capable of propelling the unit to no more than 50 km/hr and having a maximum curb weight of 600 kg. It is designed for the carriage of goods, cargoes, freights, and passengers.

City Ordinance No. 21-(2023) dated September 4, 2023
`.trim();

  return (
    <SafeAreaView style={styles.screen}>
      {/* Green header area (curved) */}
      <View style={styles.headerGreen}>
        <Text style={styles.headerTitle}>Definition of Terms</Text>
      </View>

      {/* Scrollable content area — card overlaps header */}
      <ScrollView
        contentContainerStyle={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.card, { width: CARD_W }]}>
          {/* green circular accent overlapping the card top-left */}
          <View style={styles.cardTopAccent} />

          {/* long body text */}
          <Text style={styles.bodyText}>
            {longText.split("\n\n").map((paragraph, idx) => (
              <Text key={idx} style={idx === 0 ? styles.sectionHeading : styles.paragraph}>
                {paragraph}
                {"\n\n"}
              </Text>
            ))}
          </Text>

          <Text style={styles.footNote}>
            City Ordinance No. 21-(2023) dated September 4, 2023
          </Text>
        </View>

        {/* spacer */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
  },

  /* green curved header */
  headerGreen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 86,
    backgroundColor: "#2e7d32",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    paddingHorizontal: 12,
  },

  headerTitle: {
    color: "#fff",
    fontFamily: "Karma-Bold",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },

  scrollArea: {
    paddingTop: 64,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
    alignItems: "flex-start",
    position: "relative",
  },

  cardTopAccent: {
    position: "absolute",
    left: -36,
    top: -34,
    width: 110,
    height: 110,
    backgroundColor: "#2e7d32",
    borderRadius: 60,
    zIndex: 0,
  },

  bodyText: {
    width: "100%",
    zIndex: 1,
  },

  sectionHeading: {
    fontFamily: "CrimsonText-Bold",
    fontSize: 14,
    color: "#111",
    marginBottom: 6,
  },

  paragraph: {
    fontFamily: "CrimsonText-Regular",
    fontSize: 13.5,
    color: "#222",
    lineHeight: 20,
  },

  footNote: {
    marginTop: 8,
    fontFamily: "CrimsonText-Regular",
    fontSize: 11,
    color: "#333",
  },
});
