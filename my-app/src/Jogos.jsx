import { Carrossel } from "./components/Carrossel";
import { Carrossel2 } from "./components/Carrossel2";


export function Jogos() {
    return (
        <>
        <div style={{ marginTop: '10px' }}>
        <Carrossel />
        </div>

        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Jogos Bem Avaliados</h1>
        
        <div style={{ marginTop: '10px' }}>
            <Carrossel2 />
        </div>
        </>
    );
}