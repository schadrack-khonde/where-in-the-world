import CountryCardList from "./CountryCardList";
import Header from "./Header";
import SearchCountry from "./SearchCountry";
import { useState , useEffect} from "react";







export default function App (){
  
  const [darkMode , setDarkMod] = useState(false)
  const [countryData, setCountryData] = useState([]);
  const [resetCountryData, setResetCountryData] = useState([]);
  const [searchFieldData, setSearchFieldData] = useState([]);

useEffect( ()=>{
    const fetchData = async() =>{

      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const jsonResponse = await response.json();
      const limitedData = jsonResponse;
      setCountryData(limitedData);
      setResetCountryData(limitedData);
    }
    fetchData();
},[])

//filter by country
const filterByCountry =  (event)=>{
  event.preventDefault();
  const result = countryData.filter( countries => countries.name.toLowerCase() === event.target.value.toLowerCase());
  if(result.length === 1 ){
    setCountryData(result);
  }else if(result.length === 0 && searchFieldData.length >= 1){
    setCountryData(searchFieldData)
  }else if(result.length === 0){
    setCountryData(resetCountryData);
  }
}
//filter by region
const filterByRegion =  (event)=>{
  event.preventDefault();
  const result = resetCountryData.filter( countries => countries.region.toLowerCase() === event.target.value.toLowerCase());
  if(result.length >= 1){
    setCountryData(result);
    setSearchFieldData(result);
  }
}

  //DarkMode button
  const DarkMode = (darkMode)=>{
    darkMode ? setDarkMod(false) : setDarkMod(true)
  }

  return(
    <>  
        <Header toggleDarkMode={DarkMode} darkMode={darkMode}/>
        <div style={darkMode ? {backgroundColor: "hsl(207, 26%, 17%)"} : {backgroundColor: "hsl(0, 0%, 98%)"}}>
            <SearchCountry  searchDarkMode={darkMode} searchByCountry={filterByCountry} selectByRegion={filterByRegion} />
            <CountryCardList cardDarkMode={darkMode} countries={countryData}/>
        </div>
    </>
  )
}


