import styled from "styled-components";

export const Div = styled.div`
width:200px;
height: 300px;
border: 2px solid black;
box-shadow: inset 0 0 0 red;

&.Alive {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    height: 40px;
    position: relative;
    top: -100px;
}

&.unknown {
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 40px;
    position: relative;
    top: -100px;
}

&.unknown> h3 {
    color: white;
}

&.Dead {
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 40px;
    position: relative;
    top: -100px;
}

&.Dead h3 {
    color: white;
}

`

export const Img = styled.img`
width: 100%;
`

export const H2 = styled.h2`
font-size: 2.5vh;
`