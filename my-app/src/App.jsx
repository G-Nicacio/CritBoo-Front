
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";
import { Carrossel } from "./components/Carrossel";

function App() {
  return (
    <BrowserRouter>
      <MyAppBar />
      <div style={{ marginTop: '10px' }}>
        <Carrossel />
      </div>
    </BrowserRouter>
  );
}

export default App;
