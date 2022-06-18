import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Carousel from "react-native-snap-carousel";

const CustomCarousel = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    getTeachr();
  }, []);

  const getTeachr = () => {
    console.log("bilel")
    const uri = "https://3010-78-199-7-184.eu.ngrok.io/teachrs" 
    try{

      fetch(uri).then((r) => 
        r.json()).then((j) => {
          console.log(j.data.teachrs)
          setCarouselItems(j.data.teachrs)
          
        })
    }catch(error){
      console.log(error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }) => (
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageStyle}
          source={{uri: `data:image/gif;base64,${item.image}`}}
        />
        <Text style={styles.name}>{item.prenom}</Text>
        <View>
          <Text style={styles.title}>Formation</Text>
          <Text style={styles.text}>{item.formation}</Text>
        </View>
        <View>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnBlue}
            onPress={() => navigation.navigate("Teach")}
          >
            <Text style={styles.textBtnBlue}>
              Prendre un cour avec ce Teach'r{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRed}
            onPress={() => navigation.navigate("Teach")}
          >
            <Text style={styles.textBtnRed}>
              Retirer ce Teach'r de mes favoris{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    []
  );

  return (
    <SafeAreaView style={styles.cardContainer}>
      <View>
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
    marginHorizontal: -15,
  },
  title: {
    fontSize: 15,
    color: "grey",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  text: {
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
