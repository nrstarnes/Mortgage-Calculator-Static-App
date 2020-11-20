import { isStyledComponent } from "styled-components";
import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%;
    margin: 0 auto;
` 
export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 100px;
    
    
`