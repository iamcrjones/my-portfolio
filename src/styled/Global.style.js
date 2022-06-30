import { createGlobalStyle } from "styled-components";
const colors = {
    color1: '#CEB5B7',
    color2: '#E69597',
    color3: '#FF7477',
    color4: '#B5D6D6',
    color5: '#9CF6F6',
    color6: '#EFF1F3',
    color7: '#223843'
}
const pallet= {
    color1: '#D4F1F4',
    color2: '#75E6DA',
    color3: '#189AB4',
    color4: '#05445E',
    emerald: '#50c878',
    forest: '#228b22',
    lime: '#98fb98'
}

export const lightTheme = {
    body: "#fff",
    color: "#000"
}

export const darkTheme = {
    body: "#000",
    color: "#fff"
}

export const GlobalStyles = createGlobalStyle`
    .MuiButton-root {
        background-color: ${pallet.emerald};
        border: 0px solid black;
        border-top-left-radius: 8rem 8rem;
        border-bottom-right-radius: 8rem 8rem;
        font-weight: 600;
        margin: 10px;
        padding: 6px 16px;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%), 0px 4px 5px 0px rgb(0 0 0 / 22%), 0px 1px 10px 0px rgb(0 0 0 / 25%);
    }
    .MuiButton-root:hover {
        background-color: ${pallet.lime}
    }
    .MuiSvgIcon-root {
        color: ${pallet.emerald};
    }
    .menu {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: fixed;
        margin-left: 87.5%;
        margin-bottom: 20px;
        z-index: 1;
        width: 10%;
        color: white;
        padding-top: 20px;
    }
    .themeToggle .MuiSvgIcon-root{
        color: ${(props) => props.theme.body};
        padding: 5px;
    }
    .menu Button{
        background-color: ${pallet.forest};
    }
    .MuiBox-root {
       justify-content: center;
       align-items: center;
    }
    .MuiBox-root .MuiButton-root{
        padding: 0;
    }
    .MuiBox-root .MuiButton-root .active{
        border: 0px solid black;
        border-top-left-radius: 8rem 8rem;
        border-bottom-right-radius: 8rem 8rem;
        background-color: ${pallet.lime};

    }
    .linky {
        cursor: pointer;
        padding: 6px 16px;
    }
    .MuiPaper-root {
        background-color: ${colors.color6}80
    }
    .MuiCard-root {
        background-color: ${colors.color6};
        width: 75%;
        margin: 1rem 0 1rem 0;
        border: 0px solid black;
        border-radius: 1rem;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%), 0px 4px 5px 0px rgb(0 0 0 / 22%), 0px 1px 10px 0px rgb(0 0 0 / 25%);
    }
    .MuiCardContent-root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2%;
        border: 0px solid black;
        border-radius: 1rem;
        align-text: center;
    }

    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.color};
        font-family: 'Roboto', sans-serif;
        //margin-top: 60px;
    }
    .greet {
        font-weight: 300;
        font-size: 24px;
        margin-bottom: 0;
    }

    .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        left: 0;
        right: 0;
        border: 0px solid white;
        background-color: ${pallet.emerald};
        color: white;
        padding: 0.5em 0;
        border-top-left-radius: 8rem 8rem;
        border-bottom-right-radius: 8rem 8rem;
        width: 80%;
        height: 2.5rem;
        margin: 0 auto 0 auto;
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 40%), 0px 4px 5px 0px rgb(0 0 0 / 22%), 0px 1px 10px 0px rgb(0 0 0 / 25%);
    }
    .aboutContent {
        width: 80%;
        margin: 0 auto 0 auto;
    }
    .header {
        margin: 0;
        color: ${pallet.emerald};
    }
    .header2 {
        margin-top: 0;
        color: ${pallet.emerald};

    }
    .cardContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .links {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        height: 40%;
    }
    .links Button{
        display: flex;
        justify-content: center;
        text-decoration: none;
        background-color: ${pallet.color4};
    }
    .iconContainer {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: auto;
        margin-top: 10px;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding:  0 25px 25px 10px;
        max-width: 250px;
        margin: 0;
    }

    @media only screen and (min-width: 800px) {
        .MuiCard-root {
            max-width: 60%;
        }
        .cardContainer{
            justify-content: space-around;
            max-width: 80%;
            margin: 0 auto 0 auto;
        }
    }

    @media only screen and (min-width: 1000px) {
        .MuiCard-root {
            max-width: 300px;
            height: 350px;
        }
        .cardContainer{
            flex-direction: row;
            justify-content: space-around;
            max-width: 80%;
            margin: 0 auto 0 auto;
        }
    }
`
