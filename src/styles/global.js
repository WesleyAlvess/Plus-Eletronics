import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    transition: .2s ease-in-out;
}

body{
    font-family: 'Montserrat', sans-serif;
    background: #ecf1f8;
    color: #333;
    /* Deixa a font mais bonita */
    -webkit-font-smoothing: antialiased !important;

}

`;
