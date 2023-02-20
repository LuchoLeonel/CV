import { ThemeProvider } from '@mui/material/styles';
import Main from "./views"
import Theme from './theme';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
