import { BackgroundBoxes } from "./components/BackgroundBoxes";
import { AppHeader } from "./components/Header";
import { Main } from "./components/Main";
import { SocialContainer } from "./components/SocialContainer";
import { GlassContextProvider } from "./context/GlassContext";
import { Div } from "./styles/GlobalStyles";

function App() {
  return (
    <GlassContextProvider>
      <Div className="App">
        <AppHeader />
        <Main />
        <BackgroundBoxes />
        <SocialContainer />
      </Div>
    </GlassContextProvider>
  );
}

export default App;
