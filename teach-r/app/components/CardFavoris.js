import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const CardFavoris = () => {
  return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/bilel.png")}
        />
        <Text style={styles.title}>Bilel Sekarna</Text>
        <View>
          <Text style={styles.formation}>Formation</Text>
          <Text style={styles.parcour}>Epitech Marseille</Text>
        </View>
        <View>
          <Text style={styles.formation}>Description</Text>
          <Text style={styles.parcour}>
            Calme et patient, je sais m'adapter à l'élève et comprendre sa
            méthode d'apprentissage afin de l'aider à progresser au mieux.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnBlue}
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          >
            <Text style={styles.text}>Prendre un cour avec ce Teach'r </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRed}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.text2}>Retirer ce Teach'r de mes favoris </Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
 
  cardContainer: {
    width: deviceWidth - 100,
    backgroundColor: "white",
    height: 500,
    borderRadius: 10,
    shadowColor: "lightgray",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    elevation: 9,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 75,
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    position: "absolute",
    left: 130,
    top: 60,
  },
  formation: {
    fontSize: 15,
    color: "grey",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  parcour: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 30,
  },
  btnBlue: {
    backgroundColor: "rgb( 0, 113, 204)",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  text: {
    color: "white",
  },
  btnRed: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "red",
    marginHorizontal: 20,
  },
  text2: {
    color: "red",
  },
});

export default CardFavoris;
