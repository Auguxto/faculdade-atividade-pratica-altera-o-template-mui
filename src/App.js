import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
