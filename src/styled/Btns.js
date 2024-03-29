import styled from "styled-components"
import "@fontsource/noto-sans-kr/300.css"

export const MoreBtn = styled.button`
    width: 320px;
    height: 50px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    margin: 0 auto;
    display: block;
    transition: .5s;
    &:hover{
        background-color:rgba(255,255,255,.3);
    }
`
export const BmoreBtn = styled(MoreBtn)`
    color: #1b1b1b;
    border: 1px solid black;
    &:hover{
        background-color:rgba(0, 0, 0, 0.085);
    }
`

export const GreenBtn = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    width: 320px;
    border-radius: 10px;
    background-color: #5A7E62;
    color: white;
    padding: 15px 0;
    border: none;
    &:hover{
        background-color:#48644e;
    }
`
