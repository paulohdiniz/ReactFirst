import React, { Component } from "react";
import CardNote from "./CardNote";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNote />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
