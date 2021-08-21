import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const Shopping = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PAYMENT SUCCESSFUL</Text>
          <Text style={styles.subText}>
            Ea aliquip laborum exercitation nostrud magna proident non sint
            dolore exercitation ad in. Nostrud in non officia enim. Laborum
            mollit pariatur ut occaecat ut nostrud excepteur. Culpa pariatur
            cupidatat elit velit proident laborum aliquip ex exercitation
            excepteur.
          </Text>
        </View>

        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require("../../assets/payment.png")}
          ></Image>
        </View>

        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.skipView}>
          <TouchableOpacity
            style={styles.skip}
            onPress={() => navigation.navigate("cart")}
          >
            <Text style={styles.skipText}>Previous</Text>
          </TouchableOpacity>
          <View style={styles.pages}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.currentPage}></View>
          </View>
          {/* <TouchableOpacity style={styles.skip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity> */}
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 80,
  },

  imageBox: {
    alignItems: "center",
  },

  image: {
    width: 320,
    height: 320,
  },

  pages: {
    flexDirection: "row",
    alignItems: "center",
    width: 47,
    justifyContent: "space-between",
  },

  skipText: {
    color: "grey",
    fontWeight: "bold",
  },

  skipView: {
    marginTop: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  page: {
    width: 7,
    height: 7,
    backgroundColor: "#c9b1f0",
    borderRadius: 100,
  },

  currentPage: {
    width: 20,
    height: 7,
    backgroundColor: "#480ca8",
    borderRadius: 50,
  },

  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  btnBox: {
    alignItems: "center",
  },

  subText: {
    fontSize: 16,
  },

  btn: {
    backgroundColor: "#480ca8",
    width: 160,
    height: 50,
    borderRadius: 50,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default Shopping;
