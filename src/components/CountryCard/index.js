import { Content, CountryDetails ,NavLink} from "./card-style";

 
export default function CountryCard({population, region, capital, countryName, flag, darkMode}){
    return(
        
        <NavLink to={{
            pathname: `/details`,
            data:{
                population: population,
                region: region,
                capital: capital,
                countryName: countryName,
                flag: flag,
                darkMode: darkMode
            }
        }}>
            <Content ctDarkMode={darkMode}>
                <img src={flag} alt={countryName}/>
                <CountryDetails dtDarkMode={darkMode}>
                    <h3>{countryName}</h3>
                    <p>Population:<span>{population}</span></p>
                    <p>Region:<span>{region}</span></p>
                    <p>Capital:<span>{capital}</span></p>
                </CountryDetails>
            </Content>
        </NavLink>
    )
}