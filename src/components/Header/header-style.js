import styled from "styled-components";

  

export const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    padding:  1.5rem;
    background-color: ${props=> props.darkMode ? "hsl(209, 23%, 22%)" :'hsl(0, 0%, 100%)'}
`
export const Switcher = styled.div`
    display: flex;
    align-items: center;
    color:${props=> props.darkMode ?  "hsl(0, 0%, 100%)" : 'hsl(200, 15% ,8%)'};
    h4{
        padding-left: 0.5rem;
        color:inherit;
    }
    i{
        cursor: pointer;
        color: inherit;
    }
`
export const ContentContainer = styled.div`
    width: 95%;
    margin: 0 auto;
`


export const Content = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:${props=> props.darkMode ?"hsl(0, 0%, 100%)": 'hsl(200, 15% ,8%)' };
    h3{
        color: inherit;
    }
`

