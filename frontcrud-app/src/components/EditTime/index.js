import { useEffect, useState } from "react";
import axios from "axios";

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function EditTime({time, onUpdated}){
    
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (time){
            setNome(time.nome)
        } 
    },[time])
    
    //chamar API com o método POST
    //Passar o nome como Parâmetro
    
    const handleSubmmit = async (e) => {
        console.log(time)
        e.preventDefault();
        const editTime = {
            nome
        }

        const response = await axios.put(
            `https://146d-191-165-254-55.ngrok-free.app/times/${time.id}`, editTime, {
                headers:headers
            }
        ); 
        console.log(response);
        setNome('');
        onUpdated(response.data)
        //recarregar a listagem de times
    }

    return(
        <div>
            <form onSubmit={handleSubmmit}>
                <label>Nome: </label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <button type="submit">Editar Time</button>
            </form>
        </div>
    );
}

export default EditTime;