import { useEffect, useState } from 'react';
import styles from './TimeList.module.css';
import axios from 'axios';
import AddTime from '../AddTime';
import EditTime from '../EditTime';
import { Toaster, toast } from 'sonner';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function TimeList(){
    
    const[times, setTimes] = useState([]);
    const [editTime, setEdit] = useState(null);

    const fetchTimes = async () => {
        const response = await axios.get('https://146d-191-165-254-55.ngrok-free.app/times', {headers: headers }
        );
        console.log(response.data);
        setTimes(response.data);

    }

    const handleTimeAdded = (novoTime) => {
        setTimes([...times, novoTime]);
    }

    //deletar um item

    const handleDelete = async (id) => {
        const response = await axios.delete(`https://146d-191-165-254-55.ngrok-free.app/times/${id}`, {headers: headers 
        });
        console.log(response.data);
        fetchTimes();
    }

    const handleEdit = (time) =>{
        setEdit(time)
    }

    useEffect(() => {
        fetchTimes();
    },[]);
    //read
    return(
        <div className={styles.container}>
            <h2>Tabela de Times</h2>
            
            {editTime ? (<EditTime onTimeUpdated={handleEdit}/>) : (<AddTime onTimeAdded={handleTimeAdded}/>)} 

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Time</th>
                        <th>Ano de Fundação</th>
                    </tr>
                </thead>
                {times.map((time)=>(
                   <tbody>
                       <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.nome}</td>
                            <td>{time.ano_fundacao}</td>
                            <td>
                                <button onClick={()=> handleDelete(time.id)}>Deletar</button>
                                <button onClick={()=> handleEdit(time)}>Editar</button>
                            </td>
                        </tr>
                   </tbody>
                ))}
                
            </table>
        </div>
    );
}

export default TimeList;