import styled from "styled-components";

 
export const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    padding-bottom: 3rem;
`
export const Content = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1rem;
`
