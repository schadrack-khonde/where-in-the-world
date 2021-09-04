import { Content, CountryDetails , NavLink,DetailsContainer, LinkContainer} from "./view-card";
 
 
export default function ViewCountryCard(props){

    const {population, region, capital, countryName, flag, darkMode} = props.location.data;
    return(

        <DetailsContainer style={darkMode ? {backgroundColor: "hsl(207, 26%, 17%)"} : {backgroundColor: "hsl(0, 0%, 98%)"}}> 
            <LinkContainer ctDarkMode={darkMode}>
                <NavLink to="/" dtDarkMode={darkMode}>
                    Go back
                </NavLink>
            </LinkContainer>
            <Content ctDarkMode={darkMode}>
                <img src={flag} alt={countryName}/>
                <CountryDetails dtDarkMode={darkMode}>
                    <h3>{countryName}</h3>
                    <p>Population:<span>{population}</span></p>
                    <p>Region:<span>{region}</span></p>
                    <p>Capital:<span>{capital}</span></p>
                </CountryDetails>
            </Content>
        </DetailsContainer>
    )
}