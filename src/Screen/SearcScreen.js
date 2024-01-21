import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearcBar from "../Components/SearcBar";
import ResultList from "../Components/ResultList";
import UseResults from "../Hooks/UseResults";

const SearcScreen = () => {
  const [searchApi, results,errorMesages ] = UseResults();
  const [term,setTerm]= useState('')

  const filterPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearcBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={()=>searchApi(term)}
      
      />
      {errorMesages  ? <Text> {errorMesages} </Text> :  null}
      {results.length == 0 ? <Text > ürün bulunamadı...  </Text>
      : 
     <>
     <ResultList  title="Ucuz Restorantlar" results={filterPrice("₺")} />
      <ResultList title="Uygun Restorantlar" results={filterPrice("₺₺")} />
      
      </> 
      }
     
      
      
    </View>
  );
};

export default SearcScreen;

const styles = StyleSheet.create({});
