import axios from 'axios';
import { useEffect, useState } from 'react';
import {MapContainer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const satIcon = new L.icon({
        iconUrl: 'satelite.png',
        iconSize: [25,25]
})


function StarlinkList(){
    
    const [starlinks, setStarlinks] = useState([]);
    const [] = useState() 
    const [] = useState(true) 

    const fetchStarlinks = async () => {
    const response = axios.post('https://api.spacexdata.com/v4/starlink/query', {
        "query": {},
        "options": { limit: 10 }
    });
     console.log(response.data);
     setStarlinks(response.data.docs);
    } 
useEffect(()=> {
    fetchStarlinks();
        }, []);

    return (
    <>
    <h4>Meu componente Starlink</h4>
    <ul>
        <li>Satelite 1</li>
        <li>Satelite 2</li>
        {starlinks.map((sat) => (
            <li key={sat.id}>{sat.id}</li>
        ))
        }
    </ul>
 <MapContainer />

    </>
    );

}

export default StarlinkList;