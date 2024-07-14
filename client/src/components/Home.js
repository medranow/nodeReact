import React from "react";
import "../styles/home.css";
import services from '../assets/images/services.png';
import food from '../assets/images/food.jpg';
import business from '../assets/images/business.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="Home">
                 <div className="image-container">
                    <img src={services} alt="servicios" />
                    <img src={food} alt="comida" />
                    <img src={business} alt="Image 3" />
                </div>
                <div className="description">
                    <h3>LOCUS es un sitio web donde puedes encontrar
                        todos los restaurantes, negocios y servicios que se encuentran registrados en Santa Cruz del Quiché.
                    </h3>
                    <a href="#" className="link">Registra tu negocio</a>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <div class="card-body">
                                    <h5 className="card-title">Agapelogos</h5>
                                    <p className="card-text">Servicio de fotografía y video.<br /> Dirección: 8av. 5-38 zona 3</p>
                                    <a href="https://www.facebook.com/agapelogos5/" class="btn btn-primary">Más información</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div class="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div class="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div class="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Home;