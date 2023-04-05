import "./App.css";
import { Header } from "./Componants/Header/Header";
import { Title } from "./Componants/Title/Title";
import { Main } from "./Componants/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="bgImage">
        <Header />
        <Title />
      </div>
      <Main />
    </div>
  );
}

export default App;
