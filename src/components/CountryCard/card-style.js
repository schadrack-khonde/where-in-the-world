import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavLink = styled(Link)`
    text-decoration: none;

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