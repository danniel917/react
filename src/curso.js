import React from "react";
import PropTypes from "prop-types";

const Curso = ({ title, image, price, profesor }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img
                src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="sdfs"
              />
            </div>
          </div>
          <span className="small">{profesor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

// Tipo de propiedad que se espera
Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
};

// Propiedades por Default
Curso.defaultProps = {
  title: "No se encontró titulo",
  image:
    "https://cdn3.wpbeginner.com/wp-content/uploads/2018/03/httperrorwpuploads-1.png",
  price: "--",
  profesor: " "
};

export default Curso;
