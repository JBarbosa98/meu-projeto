import { useEffect, useState } from 'react';
import './App.css';
import OutraLista from './components/OutraLista';

function App() {

    const meusItens = ['React', 'Vue', 'Angular']

    return (
        <div>
            <h1>Renderizacao LISTA</h1>
            <OutraLista itens={meusItens}></OutraLista>
            <h1>Renderizacao LISTA vazia</h1>
            <OutraLista itens={[]}></OutraLista>
        </div>
    );
    
    
}

export default App;