import { useState } from "react";
import axios from "axios";

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function AddTime({onTimeAdded}){
    
    const [nome, setNome] = useState('');
    
    //chamar API com o método POST
    //Passar o nome como Parâmetro
    
    const handleSubmmit = async (e) => {
        e.preventDefault();
        const novoTime = {
            nome
        }

        const response = await axios.post(
            'https://146d-191-165-254-55.ngrok-free.app/times', novoTime, {
                headers:headers
            }
        ); 
        console.log(response);
        setNome('');
        onTimeAdded(response.data)
        //recarregar a listagem de times
    }

    return(
        <div>
            <form onSubmit={handleSubmmit}>
                <label>Nome: </label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <button type="submit">Adicionar Time</button>
            </form>
        </div>
    );
}

export default AddTime;