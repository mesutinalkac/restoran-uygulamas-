import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultsDetails from "./ResultsDetails";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();
  return (
    <View tyle={{ marginVertical: 20 }}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResulScreen", { id: item.id })
              }
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 10,
    fontWeight: "bold",
  },
});
