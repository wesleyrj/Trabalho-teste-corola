import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
     <div className="header">
        <div className="cabecalho">
        <nav role="navigation" class="primary-navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Comprar </a>
      <ul class="dropdown">
        <li><a href="#">Chevrolet</a></li>
        <li><a href="#">Ford</a></li>
        <li><a href="#">Mercedes/</a></li>
        <li><a href="#">Jeep</a></li>
      </ul>
    </li>
    <li><a href="#">Vender</a></li>
    <li><a href="#">Troca</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
  <img src="" alt="" />
</nav>
        {/* logo */}
        {/* Marcas */}
        {/* Comprar */}
        {/* Vender */}
        {/* Avaliar */}
        {/* Troca de Carro */}
        {/* Contatos */}
        </div>

     </div>
    )
  }
}
