import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

class App extends Component {
state={
  fecha: new Date("2018", "06", "22")
}

onChange=fecha=>{
  this.setState({fecha: fecha});
}

mostrarFecha = fecha=>{
  const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};
  alert(fecha.toLocaleDateString('es-ES', options));
}

  render() {
    return (
      <>
        <div className="contenedor">
          <div className="center">
           <DatePicker selected={this.state.fecha} onChange={this.onChange} locale="es" className="pickers" dateFormat="dd 'de' MMMM 'de' yyyy"/>
           <br /><br />
           <input type="button" value="Mostrar Fecha" className="btn btn-primary" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
