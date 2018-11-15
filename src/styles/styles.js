import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
}


body{
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  /* put your css code here */
  text-align: center;
  font-family: Roboto, sans-serif;

  background: #eee
}
`;

export const HeaderCss = styled.header`
  width: 100vw;
  height: 50px;
  background-color: black;
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      list-style: none;
      padding: 10px;
      > a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 50vh;
  margin-top: 5%;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(70deg);
  }
`;

export const Err404 = styled.div`
  > h3 {
    margin-top: 20vh;
    font-size: 40px;
    .bye {
      display: inline-block;
      animation: ${rotate} .4s infinite alternate;
    }
  }
`;
