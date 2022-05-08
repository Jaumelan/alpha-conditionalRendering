import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
height: 160px;
background-color: blue;
justify-content: center;
align-items: center;

&.input-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`

export const Input = styled.input`
 width: 130px;
`