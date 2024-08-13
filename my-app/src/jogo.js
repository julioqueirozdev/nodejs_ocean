import './jogo.css';
import { useState } from 'react';

function Quadrado () {
    return <button className="quadrado" onClick={handleClick}>{quadrado}</button>
}

function Tabuleiro() {
    const [vezDox, setVezDox] = useState(true);
    const [quadrados,setQuadrados] = useState(Array(9).fill(null));

    function handleClickQuadrado(indice) {

        
        if (quadrado == 'x') {
                setQuadrado('o');
        } else {
                setQuadrado('x');
            }
        
        setQuadrado ('X');
    }

return (
    <>
            <h2> Este é um tabuleiro de jogo da velha </h2>
        
        <div className="linha">
            <Quadrado/>
            <Quadrado/>
            <Quadrado/>
        </div>

        <div className="linha">
            <Quadrado/>
            <Quadrado/>
            <Quadrado/>
        </div>

        <div className="linha">
            <Quadrado/>
            <Quadrado/>
            <Quadrado/>
        </div>
    </>
)
}


function JogoDaVelha() {
    return(
    <>     
        <h1>Jogo da Velha</h1>
        <Tabuleiro />
    </> 
)
}        

export default JogoDaVelha