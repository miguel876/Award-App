import { ThemeProvider } from '@mui/system';
import './App.css';
import Layout from './structure/Layout';
import { theme } from './theme/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
  );
}

export default App;
