import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.title}>Vos cours particuliers.</Text>
      <Text style={styles.text3}>Dans l'heure</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Teach")}
      >
        <Image
          style={styles.imgStyle}
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
          style={styles.imgStyle}
          source={require("../../assets/prof.jpg")}
        />
        <Text style={styles.text}>Donner des cours</Text>
        <Text style={styles.subtitle}>Je suis professeur</Text>
      </TouchableOpacity>
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
  imageStyle: {
    position: "absolute",
    top: 190,
  },
  imgStyle: {
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
  text3: {
    position: "absolute",
    top: 290,
    left: 250,
    fontSize: 20,
    color: "rgb(74,114,172)",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    padding: 30,
    marginTop: 130,
    paddingLeft: 106,
    paddingRight: 106,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgb(74,114,172)",
  },
  btnOrange: {
    alignItems: "center",
    marginTop: 50,
    padding: 30,
    paddingLeft: 108,
    paddingRight: 108,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "orange",
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
});

export default HomeScreen;
