import React from "react";
import ReactDOM from "react-dom";
import Componente1 from "./componentes/Componente1";
import {CompA, CompB as B} from "./componentes/DoisComponentes";
import MultiElementos from "./componentes/MultiElementos";
import Borelli from "./componentes/Borelli";
import Familia from "./componentes/Familia";
import Nome from "./componentes/Nome";

const element = document.getElementById ('root')

ReactDOM.render (
    <React.Fragment>
    
        {/* <Componente1 nome = 'Pamela' endereco = 'Rua tal' cidade = 'Franca' soma = {3+4}/>
        <CompA valor = "Aqui é o componente A"/>
        <B valor = "Aqui é o componente B"/>
        <MultiElementos/> */}

        <Familia familia = "Familia Borelli">
            <Nome nome = "Pamela " sobrenome = "Borelli"/>
            <Nome nome = "Gianluca " sobrenome = "Borelli"/>
            <Nome nome = "Sylzen " sobrenome = "Borelli"/>
        </Familia>

        <Familia familia = "Familia Qualquer">
            <Nome nome = "Pedro " sobrenome = "Qualquer"/>
            <Nome nome = "José " sobrenome = "Qualquer"/>
            <Nome nome = "Lúcia " sobrenome = "Qualquer"/>
        </Familia>


        

    </React.Fragment>
, element
)