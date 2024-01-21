import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearcBar = ({ onTermChange, onTermSubmit, term }) => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1" size={20} color="black" />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Ara..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearcBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E5E7E9",
    padding: 4,
    margin: 5,
    borderRadius: 9,
  },
  input: {
    fontSize: 20,
    left: 6,
  },
});
