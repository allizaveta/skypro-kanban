import "./App.css";
import Main from "./components/Main/main";
import Header from "./components/Header/header";
import BrowsePopup from "./components/popups/Browse/browse";
import NewCardPopup from "./components/popups/NewCard/newCard";
import ExitPopup from "./components/popups/Exit/exit";
function App() {
  return (
    <div className="wrapper">
      {/* pop-up start*/}
      <ExitPopup />
      <NewCardPopup />
      <BrowsePopup />
      {/* pop-up end*/}
      <Header />
      <Main />
    </div>
  );
}

export default App;
