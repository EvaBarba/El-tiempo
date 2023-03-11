import { useState, useEffect } from 'react';
import Header from "./Header";
import Resultados from "./Resultados";
import CONFIG from "./config/config";
import {mock1} from "./constants/mock.js";
import './App.css';

const USE_SERVER = CONFIG.use_server; //cte. para saber si está a true o false

function App() {

  const [latitud, setLatitud] = useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);
  const [items, setItems] = useState();       //Items del resultado
  const [error, setError] = useState(false);  //booleano


  const callServer = async (param) => {    
      if(USE_SERVER) {
        try {
          
          
          const response = await fetch(`${CONFIG.server_url}` + "lat=" + `${latitud}` + "&lon=" + `${longitud}` + "&appid=" + `${CONFIG.api_key}`);
          const data = await response.json();         
          
          console.log(response);          //para ver el cuerpo de la respuesta

          if(response.status !== 200){    //con un estado distinto a 200 cambia el error a true y deja el items vacio
            setError(true);
          }
          else{
            setItems(data);               //Si no da error, pasa los datos a los items
          }

        } catch (error) {
          console.log(error);
        }

      } else {
        //console.log(mock1.users)
        setItems(mock1);
      }
  }




  return (
    <div className="App">

        <Header />

        <h2 id='titulo'>El tiempo</h2>

        <ul> Latitud: <input id="latitud" type="number" value={latitud} onChange={e=>setLatitud(e.target.value)}></input> </ul>
        <ul> Longitud: <input id="longitud" type="number" value={longitud} onChange={e=>setLongitud(e.target.value)}></input> </ul>
        <p> <button id="buscar" className="boton_buscar" onClick={()=>callServer()}> Buscar </button> </p>

        {error && (
          <div id="error">

            <h2><b>Error</b></h2>
            <h3><b>Se ha producido un error.</b></h3>

          </div>
        )}

        {items && <Resultados numitems={CONFIG.num_items} items={items} />}

    </div>
  );
}

export default App;
