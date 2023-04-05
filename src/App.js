import "./App.css";
import { Header } from "./Componants/Header/Header";
import { Title } from "./Componants/Title/Title";
import { Main } from "./Componants/Main/Main";
import { Video } from "./Componants/Video/Video";

function App() {
  return (
    <div className="App">
      <div className="bgImage">
        <Header />
        <Title />
      </div>
      <Main />
      <Video />
    </div>
  );
}

export default App;
