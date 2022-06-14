import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Card from '../components/CardFavoris';
import Carousel from "react-native-snap-carousel";
import React from 'react'

data = [];

const FavorisScreen = () => {
  const isCarousel = React.useRef(null)
  return (
    <View style={styles.container}>
          <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={Card}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  });

export default FavorisScreen;
