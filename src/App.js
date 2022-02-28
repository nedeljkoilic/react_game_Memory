import "./App.css";
import MemoryGame from "./components/MemoryGame";
function App() {
  return (
    <div className="app">
      <p>You will have 3 seconds to memorize 6 blue random cells</p>
      <MemoryGame />
    </div>
  );
}
export default App;
