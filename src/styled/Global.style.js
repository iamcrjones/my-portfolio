import { createGlobalStyle } from "styled-components";
//import Navigation from '../components/Navigation'
const colors = {
    color1: '#CEB5B7',
    color2: '#E69597',
    color3: '#FF7477',
    color4: '#B5D6D6',
    color5: '#9CF6F6',
    color6: '#EFF1F3',
    color7: '#223843'
}

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${colors.color6};
        // color: ${colors.color3}
        font-family: 'IBM Plex Sans', sans-serif;
    }
    .navBar {
        display: flex;
        align-items: flex-start;
        border: 1px solid black;
        background-color: ${colors.color2};
        color: ${colors.color3};
    }
    .navBar ul {
        display: flex;
        justify-content: flex-start;
        border: 2px solid red;
        padding: 0;
    }
    .navBar li {
        display: flex;
        list-style-type: none;
        border: 2px solid ${colors.color1};
        padding: 5px;
        margin: 5px;
        background-color: ${colors.color3};
        color: black;
    }
    .banner {
        display: flex;
        justify-content: center;
        border: 2px solid red;
        background-color: ${colors.color5};
        padding: 0.5em 0;
    }
    .aboutContent {
        padding: 0 5%;
    }
`
export default GlobalStyles;