import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ResultsDetails = ({ result }) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <View style={styles.textCont}>
        <Text style={styles.contTitle}>{result.name}</Text>
        <Text style={{ top: 10 }}>
          <AntDesign name="star" size={19} color="tomato" />
          {result.rating}, (+{result.review_count}){" "}
        </Text>
      </View>
    </View>
  );
};

export default ResultsDetails;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#E5E7E9",
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: "#E5E7E9",
    borderRadius: 7,
    marginLeft: 10,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
    top: 8,
  },
  contTitle: {
    fontWeight: "bold",
    fontSize:20,
  },
  textCont: {
    marginVertical: 20,
    left:10,
  },
});
