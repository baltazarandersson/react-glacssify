import { BackgroundBoxes } from "./components/BackgroundBoxes";
import { AppHeader } from "./components/Header";
import { Main } from "./components/Main";
import { GlassContextProvider } from "./context/GlassContext";
import { Div } from "./styles/GlobalStyles";

function App() {
  return (
    <GlassContextProvider>
      <Div className="App">
        <AppHeader />
        <Main />
        <BackgroundBoxes />
      </Div>
    </GlassContextProvider>
  );
}

export default App;
