import React from "react";
import "./styles/styles.scss";
import Curso from "./curso";

const cursos = [
  { "title": "React desde cero",  "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png", "price": 40, "profesor": "Daniel Morales"},
  { "title": "Drupal desde cero",  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN", "price": 50, "profesor": "Andres Cea"},
  { "title": "Go desde cero",  "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN", "price": 20, "profesor": "Nelson Rivera"},
  { "title": "HTML desde cero",  "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/HTML%202020.png", "price": 0, "profesor": "Julio Jaramillo"}
]

const App = () => (
  <div className="ed-grid m-grid-3">
    {
      cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
    }
  </div>


)

export default App;


// Toda etiqueta debe cerrarse
// Los componentes deben devolver un solo elemento padre
// Apoyarse de los Fragments cuando necesito devolver 2 elementos 
// Fragment => <> Hijos </>
// class => classNameName
// for => htmlFor

