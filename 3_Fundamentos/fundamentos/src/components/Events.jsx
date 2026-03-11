
import React from "react";
const Events = () => { 

const handleClick = (e) => { 
    console.log(e);
    console.log("Executou");
    
};

// 8- Função de rederização 
const renderSomething = (x) => { 
    if(x) { 
        return <h1>Rederizando isso!</h1>
    } else { 
        return <h1> Rederizando outra coisa!</h1>;
    }
}; 

//return 10 > 2 && <p> Carregando...</p>;
  return (
    <div> 
        <div>
      <button OnClick={() => console.log("testando um evento")}> 
        Clique aqui 
        </button>
    </div> 
    {/*7- evento com função */} 
    <div> 
        <button onClick={handleClick}>Clique aqui - com função</button>
    </div>
    {/*8- Função com render */}
    {renderSomething(true)} 
    {renderSomething(false)}
    </div>
  )
}

export default Events
