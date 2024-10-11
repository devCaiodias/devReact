import { useState } from "react";






function  App() {
  // State (estado)

  // const [estado, setEstado] = useState(valorInicial);
  
  // Quando você chama setEstado(novoValor), o React re-renderiza o componente com o novo estado.

  const [messge, setMessage] = useState(`hi Caio`)

  function mudarMesage() {
    setMessage(`hello Caio`)
  }

  return (
    <div>
      <h2>{messge}</h2>
      <button onClick={mudarMesage}>mudar mesagem</button>
    </div>
  )
}

export default App;