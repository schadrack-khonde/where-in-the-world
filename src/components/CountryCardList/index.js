import CountryCard from "../CountryCard";
import { Content, Wrapper } from "./Country-list-style";




export default function CountryCardList ({countries, cardDarkMode}){
    
    
    return(
        <Wrapper>
            <Content>
                {
                    countries.map(
                        (country) => 
                    <CountryCard key={country.name}  darkMode={cardDarkMode}  population={country.population} region={country.region} capital={country.capital} countryName={country.name} flag={country.flag}/> 
                    ) 
                }

            </Content>
        </Wrapper>
    )
}