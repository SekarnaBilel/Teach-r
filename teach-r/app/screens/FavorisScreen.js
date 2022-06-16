import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Carousel from '../components/Carousel';

const FavorisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Carousel/>
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
