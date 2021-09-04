import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    border: 1px solid white;
    padding: 1rem 1.5rem;
    text-decoration: none;
    display: block;
    color:${props=> props.dtDarkMode ?  "hsl(0, 0%, 100%)" : 'hsl(200, 15% ,8%)'};
`
export const LinkContainer = styled.div`
    background-color: ${props=> props.ctDarkMode ? "hsl(209, 23%, 22%)" :'hsl(0, 0%, 100%)'};
    width: max-content;
    border-radius: 5px;
    margin-right: 3rem;
`
export const DetailsContainer = styled.div`
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    border-radius: 5px;
    width: 210px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  
    background-color: ${props=> props.ctDarkMode ? "hsl(209, 23%, 22%)" :'hsl(0, 0%, 100%)'};
    img{
        height: 150px;
        width:100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
`
export const CountryDetails = styled.div`
    padding: 1rem ;
    padding-bottom: 3rem;
    color: ${props=> props.dtDarkMode ? "hsl(0,0%,100%)" :'hsl(200, 15%, 8%)'};
    h3{
        text-transform: capitalize;
        padding-bottom: 1rem;
        color:inherit;
    }
    p{
        padding: 0.2rem 0;
        color:inherit;
        span{
            color:inherit
        }
    }

`