import "./App.css";
import Header from "./components/header/Header";
import BrowsePopup from "./components/popups/browse/Browse";
import NewCardPopup from "./components/popups/newCard/NewCard";
import ExitPopup from "./components/popups/exit/Exit";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="wrapper">
      <ExitPopup />
      <NewCardPopup />
      <BrowsePopup />
      <Header />
      <Main />
    </div>
  );
}

export default App;
