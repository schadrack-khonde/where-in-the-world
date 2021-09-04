import styled from "styled-components";



export const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
`

export const SearchField = styled.form`
    display: flex;
    border-radius: 5px;
    align-self: center;
    justify-content: space-between;
    padding: 0.7rem 1rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${props=> props.darkMode ? "hsl(209, 23%, 22%)" :'hsl(0, 0%, 100%)'};
    input{
        background-color: transparent;
        border: none;
        padding-left: 1rem;
        outline: none;
        color: ${props=> props.darkMode ? "hsl(0,0%,100%)" :'hsl(200, 15%, 8%)'};
        padding-right: 10rem;
        font-family:inherit
    }
    i{
        color: ${props=> props.darkMode ? "hsl(0,0%,100%)" :'hsl(200, 15%, 8%)'};
    }

`
export const SelectField = styled.select`
    border: none;
    outline: none;
    padding: 0.7rem 1rem;
    padding-right: 5rem;
    border-radius: 5px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: ${props=> props.darkMode ? "hsl(209, 23%, 22%)" :'hsl(0, 0%, 100%)'};
    outline: none;
    color: ${props=> props.darkMode ? "hsl(0,0%,100%)" :'hsl(200, 15%, 8%)'};
    font-family: inherit;
`
