import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppRoutes from './routes/AppRoutes'; 

const GlobalStyles = createGlobalStyle`
${reset};
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap");
* {
  box-sizing: border-box;
}

body {
  margin: 0; 
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}