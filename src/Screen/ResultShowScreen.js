import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Yelp from "../Api/Yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ResultShowScreen = ({ route }) => {
  const [results, setResult] = useState(null);

  const id = route.params.id;

  const getResults = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);
  if (!results) {
    return null;
  }

  return (
    <View>
      <View style={styles.resWrapper}>
        <Text style={styles.resTitle}> {results.name} </Text>
        <Text tyle={styles.resphone}> {results.display_phone} </Text>
        {results.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>

      <FlatList
        data={results.photos}
        renderItem={({ item }) => {
          return <Image style={styles.resImage} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  resWrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: 8,
    backgroundColor: "#E5E7E9",
    padding: 5,
  },
  resImage: {
    width: 320,
    height: 180,
    marginVertical: 15,
    margin: 40,
    borderRadius: 10,
  },
  resTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 4,
  },
  resphone: {
    marginVertical: 4,
  },
});
