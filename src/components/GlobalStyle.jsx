import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`


html {
  height: 100%;
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  background-color: ${p => p.theme.colors.bgc};
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  height: 100%;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  color: ${p => p.theme.colors.mainColor};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

a {
  text-decoration: none;
}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

button{
  cursor: pointer;
}
`;
