import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Error from "./components/Error";
import axios from "axios";

function App() {
  // State principal
  // ciudad = state, guardarCiudad = setState()
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState();

  useEffect(() => {
    // prevenir ejecucion
    if (ciudad === "") return;

    const consultarAPI = async () => {
      const appId = "cbc96d5e94f8aaa8f51b7ecfd32d1637";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      // consultar la URL
      const respuesta = await axios.get(url);
      const resultado = respuesta.data;

      guardarResultado(resultado);
    };

    consultarAPI();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    // Validar que ambos campos esten
    if (datos.ciudad === "" || datos.pais === "") {
      // un error
      guardarError(true);
      return;
    }

    // Ciudad y pais  existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  // Cargar un componente condicionalmente
  let componente;
  if (error) {
    //Hay un error, mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else {
    // Mostrar el clima
    componente = null;
  }

  return (
    <div className="App">
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">{componente}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
