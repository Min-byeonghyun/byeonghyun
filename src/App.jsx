import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppRoutes from './routes/AppRoutes'; // 라우팅 설정 파일

const GlobalStyles = createGlobalStyle`
${reset};
* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif; 
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
