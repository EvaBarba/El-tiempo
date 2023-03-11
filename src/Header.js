import './Header.css';

export default function Header(props){
    return (
        <div id="cabecera" className="container">
            
            <img className="logo" src={process.env.PUBLIC_URL + "/sol.png"} class="logo" alt="logo" />
            <h3 className="mensaje"> Bienvenido a la página de Eva Barba Cámara</h3>
            
        </div>)
}