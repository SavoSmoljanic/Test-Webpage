import "./App.css";
import { Header } from "./Componants/Header/Header";
import { Title } from "./Componants/Title/Title";
import { Main } from "./Componants/Main/Main";
import { Video } from "./Componants/Video/Video";
import { Main2 } from "./Componants/Main2/Main2";
import { Main3 } from "./Componants/Main3/Main3";
import { Main4 } from "./Componants/Main4/Main4";

function App() {
  return (
    <div className="App">
      <div className="bgImage">
        <Header />
        <Title />
      </div>
      <Main />
      <Video />
      <Main2 />
      <Main3 />
      <Main4 />
    </div>
  );
}

export default App;
