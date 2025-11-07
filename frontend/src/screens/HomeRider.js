// HomeRider.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const HomeRider = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.view}>

        {/* Header */}
        <View style={styles.headerWrapper}>
          <Pressable style={styles.hamburger}>
            <Image
              source={require("../assets/menu.png")}
              style={styles.iconSmall}
              resizeMode="contain"
            />
          </Pressable>

          <View style={styles.aideParent}>
            <Text style={styles.aide}>AIDE</Text>
            <Image
              source={require("../assets/logo-small.png")}
              style={styles.transparentLogo1Icon}
              resizeMode="contain"
            />
          </View>

          <Pressable style={styles.bell}>
            <Image
              source={require("../assets/bell.png")}
              style={styles.iconSmall}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        {/* Greeting */}
        <View style={styles.greet}>
          <Text style={[styles.hiJuan, styles.aideTypo]}>
            <Text style={styles.hi}>Hi,</Text>
            <Text style={styles.juanTypo}> Juan</Text>
          </Text>
          <Text style={[styles.quoteOrGreetings, styles.septTypo]}>
            Quote or greetings
          </Text>
        </View>

        {/* Options Row */}
        <View style={styles.options}>
          <View style={styles.whatsNew}>
            <View style={styles.whatsNewChild} />
            <Text style={[styles.dashboardRiderWhatsNew, styles.dashboardTypo]}>
              What’s new?
            </Text>
          </View>

          <Pressable style={styles.ordinance}>
            <View style={styles.ordinanceChild} />
            <Text style={[styles.dashboardRiderOrdinance, styles.dashboardTypo]}>
              Ordinance
            </Text>
          </Pressable>
        </View>

        {/* Map Card */}
        <View style={styles.map}>
          <View style={styles.mapChild} />
          <Image
            source={require("../assets/basemap-thumb.png")}
            style={styles.basemapImageIcon}
            resizeMode="cover"
          />

          <Image
            source={require("../assets/marker.png")}
            style={styles.vectorIcon4}
            resizeMode="contain"
          />

          <Text style={[styles.greenRoute, styles.greenRouteTypo]}>Green Route</Text>
          <Text style={[styles.someDetails2, styles.greenRouteTypo]}>
            some details
          </Text>

          <View style={styles.mapItem} />
          <Text style={[styles.openFullMap, styles.septTypo]}>Open Full Map</Text>
        </View>

        {/* News Cards */}
        <View style={styles.news1}>
          <View style={styles.news2Child} />
          <Text style={[styles.dashboardRiderNewsUpdateHeadline, styles.septTypo]}>
            News Update Headline
          </Text>
          <Text style={[styles.dashboardRiderSomeDetails, styles.septTypo]}>
            some details
          </Text>
          <Text style={[styles.dashboardRiderSept9, styles.septTypo]}>Sept 9</Text>
        </View>

        <View style={styles.news2}>
          <View style={styles.news2Child} />
          <Text style={[styles.newsUpdateHeadline, styles.septTypo]}>
            News Update Headline
          </Text>
          <Text style={[styles.someDetails, styles.septTypo]}>some details</Text>
          <Text style={[styles.sept9, styles.septTypo]}>Sept 9</Text>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.navItem}>
          <View style={styles.homeChild} />
          <Image
            source={require("../assets/home-icon.png")}
            style={styles.iconNav}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <View style={styles.navDefault} />
          <Image
            source={require("../assets/violation-icon.png")}
            style={styles.iconNav}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Violation</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <View style={styles.navDefault} />
          <Image
            source={require("../assets/transactions-icon.png")}
            style={styles.iconNav}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Transaction</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <View style={styles.navDefault} />
          <Image
            source={require("../assets/news-icon.png")}
            style={styles.iconNav}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Feed</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <View style={styles.navDefault} />
          <Image
            source={require("../assets/me-icon.png")}
            style={styles.iconNav}
            resizeMode="contain"
          />
          <Text style={styles.navText}>Me</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeRider;

/* -------------------- STYLES -------------------- */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    flex: 1,
  },

  view: {
    width: "100%",
    minHeight: 800,
    overflow: "hidden",
    paddingBottom: 90,
  },

  /* HEADER */
  headerWrapper: {
    width: "100%",
    height: 79,
    backgroundColor: "#2e7d32",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  hamburger: { width: 32, height: 32, justifyContent: "center" },
  bell: { width: 32, height: 32, justifyContent: "center" },
  iconSmall: { width: 22, height: 22, tintColor: "#fff" },

  aideParent: {
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  aide: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
    left: 28,
  },
  transparentLogo1Icon: {
    width: 28,
    height: 28,
    position: "absolute",
    left: 0,
  },

  /* GREETING */
  greet: { marginTop: 20, paddingHorizontal: 22, height: 68 },
  hiJuan: { color: "#333", fontSize: 24 },
  hi: { fontWeight: "600" },
  juanTypo: { fontWeight: "700" },
  quoteOrGreetings: {
    marginTop: 8,
    color: "#9e9e9e",
    fontSize: 16,
  },

  /* OPTIONS */
  options: {
    marginTop: 18,
    marginLeft: 36,
    width: 288,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whatsNew: { width: 125, height: 45 },
  whatsNewChild: {
    borderRadius: 10,
    width: 125,
    height: 45,
    backgroundColor: "#2e7d32",
    position: "absolute",
  },
  dashboardRiderWhatsNew: {
    left: 14,
    color: "#fff",
    position: "absolute",
    top: 13,
    fontSize: 16,
  },

  ordinance: { width: 125, height: 45 },
  ordinanceChild: {
    backgroundColor: "#9e9e9e",
    borderRadius: 10,
    width: 125,
    height: 45,
    position: "absolute",
  },
  dashboardRiderOrdinance: {
    left: 23,
    color: "#fff",
    position: "absolute",
    top: 13,
    fontSize: 16,
  },

  /* MAP CARD */
  map: { marginTop: 22, marginLeft: 37, width: 287, height: 148 },
  mapChild: {
    borderWidth: 1,
    borderColor: "#2e7d32",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: 285,
    height: 148,
    position: "absolute",
  },
  basemapImageIcon: {
    top: 1,
    borderRadius: 10,
    width: 163,
    height: 145,
    left: 8,
    position: "absolute",
  },
  vectorIcon4: {
    height: 30,
    width: 30,
    top: 25,
    left: 40,
    position: "absolute",
    tintColor: "#2e7d32",
  },
  greenRoute: { top: 27, color: "#333", fontSize: 20, left: 156 },
  someDetails2: { top: 51, color: "#9e9e9e", fontSize: 16, left: 156 },
  mapItem: {
    top: 104,
    left: 155,
    borderRadius: 5,
    borderColor: "#9e9e9e",
    width: 118,
    height: 24,
    borderWidth: 1,
    backgroundColor: "#fff",
    position: "absolute",
  },
  openFullMap: { top: 107, left: 160, fontSize: 16, color: "#333" },

  /* NEWS */
  news1: { marginTop: 22, marginLeft: 39, width: 285, height: 120 },
  news2: { marginTop: 10, marginLeft: 40, width: 285, height: 120 },
  news2Child: {
    borderColor: "#2e7d32",
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    width: 285,
    height: 120,
    position: "absolute",
  },
  dashboardRiderNewsUpdateHeadline: {
    top: 12,
    color: "#333",
    fontSize: 20,
    left: 16,
  },
  dashboardRiderSomeDetails: {
    top: 36,
    color: "#9e9e9e",
    fontSize: 16,
    left: 16,
  },
  dashboardRiderSept9: {
    top: 74,
    color: "#9e9e9e",
    fontSize: 16,
    left: 15,
  },

  newsUpdateHeadline: {
    top: 11,
    color: "#333",
    fontSize: 20,
    left: 16,
  },
  someDetails: {
    top: 35,
    color: "#9e9e9e",
    fontSize: 16,
    left: 16,
  },
  sept9: {
    top: 73,
    color: "#9e9e9e",
    fontSize: 16,
    left: 15,
  },

  /* BOTTOM NAV */
  bottomBar: {
    height: 66,
    width: SCREEN_WIDTH,
    backgroundColor: "#2e7d32",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    width: 70,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  homeChild: {
    backgroundColor: "#113e21",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  navDefault: {
    backgroundColor: "#2e7d32",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  iconNav: {
    width: 24,
    height: 24,
    tintColor: "#fff",
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: "#f0f0f0",
  },

  /* Typography */
  aideTypo: { fontSize: 30 },
  septTypo: { fontWeight: "500", letterSpacing: 0.1 },
});
