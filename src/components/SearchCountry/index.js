import {  SearchField, SelectField, Wrapper } from "./search-country-style";





export default function SearchCountry({searchDarkMode, searchByCountry,selectByRegion}){
    
    return (
        <Wrapper>
            <SearchField darkMode={searchDarkMode}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search for a country" 
                onChange={ searchByCountry} />
            </SearchField>
            <SelectField darkMode={searchDarkMode} 
            onChange={selectByRegion}>
                    <option value='default'>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
            </SelectField>
        </Wrapper>
    )
}