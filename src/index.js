import React from "react";
import ReactDOM from "react-dom";
import Componente1 from "./componentes/Componente1";
import {CompA, CompB as B} from "./componentes/DoisComponentes";
import MultiElementos from "./componentes/MultiElementos";

const element = document.getElementById ('root')

ReactDOM.render (
    <div>
        {/* <Componente1 nome = 'Pamela' endereco = 'Rua tal' cidade = 'Franca' soma = {3+4}/>
        <CompA valor = "Aqui é o componente A"/>
        <B valor = "Aqui é o componente B"/> */}
        <MultiElementos/>
    </div>
, element
)