import React from "react";
import "./styles/styles.scss";
import Curso from "./curso";

const App = () => (
  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
  </div>


)

export default App;


// Toda etiqueta debe cerrarse
// Los componentes deben devolver un solo elemento padre
// Apoyarse de los Fragments cuando necesito devolver 2 elementos 
// Fragment => <> Hijos </>
// class => classNameName
// for => htmlFor

