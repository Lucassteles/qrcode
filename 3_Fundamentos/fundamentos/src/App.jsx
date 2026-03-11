import "./App.css"; 

//2- importando componente
import  FirstComponent from  './components/FirstComponent';
import MyComponent from "./components/MyComponent";

// 4- template expression 
import TemplateExpression from "./components/TemplateExpression";

// Eventos 
import Events from "./components/Events";

function App() {
// 3- comentários
  return (
      <div ClassName="App">  
      {/* 3- comentário JSX */}
      <h1>Fundamentos do React</h1>  
      <FirstComponent /> 
      <TemplateExpression/>  
      <MyComponent/> 
      <Events/>
      </div>
  );
};

export default App;
