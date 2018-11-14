import styled from "styled-components";

export const AppCss = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  /* put your css code here */
  text-align: center;
  font-family: Roboto, sans-serif;
`;

export const HeaderCss = styled.header`
  width: 100vw;
  height: 50px;
  background-color: black;

  nav {
    height: 100%;
    width: 100%;
    ul {
      color: white;
      li {
        display: inline-block;
      }
    }
  }
`;
