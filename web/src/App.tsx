//JSX é uma juncao de javascript e XML(HTML) 
// Componente e propriedades

interface ButtonProps{
  title:string;
}

//criando um componente

function Button(propos:ButtonProps)/*adiconando atributo*/{
  return (
    <button>{propos.title}</button>
  )
}

function App() {
  
  return (
    <div>
      <Button title="atributo 1"/>
      <Button title="atributo 2"/>
      <Button title="atributo 3"/>
      <Button title="atributo 4"/>
    </div>
  )

}

export default App
