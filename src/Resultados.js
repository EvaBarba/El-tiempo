
export default function Resultados(props){

    const items = props.items;  //igualo a props, para usar items directamente que es lo que se convertirá en mock1 o el servidor

    return (
        <div>

            <ul><b>Timezone: {items.timezone}</b></ul>
            <ul><b>El tiempo en los próximos días será:</b></ul>

            <ul id="resultados">
            {items.daily.map(item => (
              
              <li key={item.dt}>

                    
                    <ul id="blanco"><b>Timezone: {items.timezone}</b></ul>
                    <ul id="blanco"><b>El tiempo en los próximos días será:</b></ul>

                    <p><b>{new Date(item.dt * 1000).toLocaleDateString()}</b></p>
                    <p><img className= "tiempoimg" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}/></p>
                    <p>Temp: {(item.temp.day - 273.15).toFixed(2)}ºC</p>
                    <p>Humedad: {item.humidity}%</p>
                    <p>Viento: {item.wind_speed}m/s</p>

               </li>

            )
            ).slice(0, props.numitems)}
            </ul>



        </div>)
}