// src/components/NavBar.js
import React from 'react';
import "../styles/navBar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
            <div class="container">
              <a class="navbar-brand" href="#home">LOCUS</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item active">
                          <a class="nav-link" href="#home">Página principal</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#about">Sobre mi</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#portfolio">Portafolio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="#contact">Contacto</a>
                      </li>
                  </ul>
              </div>
            </div>  
          </nav>
        );
    }
}

export default NavBar;