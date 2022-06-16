import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

import Carousel from "react-native-snap-carousel";

const exampleItems = [
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
  {
    img : require("../../assets/bilel.png"),
    name : "Bilel Sekarna",
    formation : "Epitech Marseille",
    description: "Calme et patient, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
    id_teacher: '',
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        source={item.img}
      />
      <Text style={styles.name}>{item.name}</Text>
      <View>
        <Text style={styles.formation}>Formation</Text>
        <Text style={styles.parcour}>{item.formation}</Text>
      </View>
      <View>
        <Text style={styles.formation}>Description</Text>
        <Text style={styles.parcour}>{item.description}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnBlue}
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        >
          <Text style={styles.textBtnBlue}>Prendre un cour avec ce Teach'r </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRed}
          onPress={() => navigation.navigate("")}
        >
          <Text style={styles.textBtnRed}>Retirer ce Teach'r de mes favoris </Text>
        </TouchableOpacity>
      </View>
    </View>
    ),
    []
  );

  return (
    <SafeAreaView style={styles.cardContainer}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
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
  name: {
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
  textBtnBlue: {
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
  textBtnRed: {
    color: "red",
  },
});

export default CustomCarousel;
