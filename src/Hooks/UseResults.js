import { useEffect, useState } from "react";
import Yelp from "../Api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMesages,setErrorMesages]= useState("")
  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 40,
          term: searchTerm,
          location: "istanbul",
        },
      });
      setResults(response.data.businesses);
      setErrorMesages('')
      
    } catch (error) {
    setErrorMesages('bağlantı hatası')
      
    }
    
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMesages];
};
