import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    font-family: 'Montserrat', sans-serif;
  }


  a {
    color : inherit;
    text-decoration : none;  
    }

    input, textarea, button {
        outline : none;
        border : none;
    }
    input[type="text"]:read-only {
        background-color : ${(props) => props.theme.subTheme_C};
        color : ${(props) => props.theme.black_C};
        cursor : default;
    }
    button, select {
        cursor: pointer;
    }
  
  a:hover {
  color : inherit;
  }
  
  @media (max-width : 576px) {
    html { 
      font-size : 14px;
    }
  }

`;

export default GlobalStyles;
