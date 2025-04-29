
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MyAppBar } from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <MyAppBar />
      <div style={{ marginTop: '64px', padding: '1rem' }}>
        <h1>Conteúdo da página</h1>
        <p>Cuzinho largo é muito bom</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
