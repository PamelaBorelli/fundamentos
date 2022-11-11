import React from "react";

// function funct1 (){
//     return <h1>Nosso primeiro componente</h1>
// }

// export default funct1

// export default () =>
// <div>
 
//     <h1>Nosso primeiro componente</h1>
//     <h1>{(5+6)}</h1>

// </div>

var vf = false
export default (props) => 
    <div>
        <h1>{props.nome}</h1>
        <h1>{props.cidade}</h1>
        <h1>{props.endereco}</h1>

        <h1>{props.soma}</h1>

        <p>{Math.random()}</p>
        <p>{2*8}</p>
        <p>{Math.pow(2,8)}</p>
        <p>Vedadeiro ou falso? {vf ?'verdadeiro' : 'Falso'}</p>

    </div>