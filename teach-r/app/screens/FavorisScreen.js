import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Card from '../components/CardFavoris';

const FavorisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Card/>
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
