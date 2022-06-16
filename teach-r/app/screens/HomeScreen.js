import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.header}
        source={require("../../assets/header.png")}
      />
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.title}>Vos cours particuliers.</Text>
      <Text style={styles.textBold}>Dans l'heure</Text>
      <TouchableOpacity
        style={styles.btnBlue}
        onPress={() => navigation.navigate("Teach")}
      >
        <Image
          style={styles.icone}
          source={require("../../assets/elevee.jpg")}
        />
        <Text style={styles.text}>Prendre des cours</Text>
        <Text style={styles.subtitle}>Je suis parent / élève</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnOrange}
        onPress={() => navigation.navigate("Teach")}
      >
        <Image
          style={styles.icone}
          source={require("../../assets/prof.jpg")}
        />
        <Text style={styles.text}>Donner des cours</Text>
        <Text style={styles.subtitle}>Je suis professeur</Text>
      </TouchableOpacity>
      <Image
        style={styles.footer}
        source={require("../../assets/footer.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header:{
    position: "absolute",
    top: -30,
  },
  logo: {
    position: "absolute",
    top: 190,
  },
  icone: {
    // backgroundPosition: "50%",
    width: 80,
    height: 80,
    borderRadius: 75,
    marginLeft: -270,
    marginBottom: -60,
  },
  title: {
    position: "absolute",
    top: 290,
    left: 50,
    fontSize: 20,
    color: "rgb(74,114,172)",
  },
  textBold: {
    position: "absolute",
    top: 290,
    left: 250,
    fontSize: 20,
    color: "rgb(74,114,172)",
    fontWeight: "bold",
  },
  btnBlue: {
    alignItems: "center",
    padding: 20,
    paddingBottom:30,
    marginTop: 130,
    paddingLeft: 106,
    paddingRight: 106,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(74,114,172)",
       shadowColor: "rgb(74,114,172)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
  },
  btnOrange: {
    alignItems: "center",
    marginTop: 50,
    padding: 20,
    paddingBottom:30,
    paddingLeft: 108,
    paddingRight: 108,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(238,123,89)",
    shadowColor: "rgb(238,123,89)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
  },
  text: {
    color: "rgb(74,114,172)",
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",    
  },
  subtitle: {
    color: "black",
  },
  footer:{
    position: "absolute",
    bottom:-30,
  }
});

export default HomeScreen;
