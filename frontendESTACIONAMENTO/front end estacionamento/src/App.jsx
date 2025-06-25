import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

// function App() {
//   // Use State serve pra criar variaveis reativas, que atualizam na tela a cada mudança de valor
//   // const [nomeEstado, funcaoQueMudaOEstado] = useState(valorInicial)
//   let [count, setCount] = useState(5) // variavel com useState atualiza na tela a cada mudança de valor usando a função set
//   let contador = 0 // variavel sem useState nao atualiza na tela quando seu valor muda
//   let [tarefas, setTarefas] = useState([])
//   let [descricao, setDescricao] = useState('Estudar CSS')
//   // Padrão [estado, setEstado] = useState(valor)
//   let [senai, setSenai] = useState('')
//   let [nome, setNome] = useState('Ruan')
  
//   // Use Effect: serve para realizar ações associadas a um estado ou ao carregamento da página
//   // useEffect(acao para executar, evento acionador)
//   // useEffect(() => console.log('A página carregou'), []) // [] vai considerar como acionador, o carregamento da página (1 vez)
//   // useEffect(() => console.log('O count mudou'), [count]) // [estado] vai considerar como acionador a mudança do estado (count, nesse exemplo) (executa algumas vezes)
//   // useEffect(() => console.log('O count mudou')) // deixar vazio vai considerar como acionador a mudança de qualquer estado - não recomendo fazer isso (executa muitas vezes)

//   // Ao carregar a página, buscar dados de uma API
//   useEffect(() => {
//     chamarApi()
//   }, []) // [] para executar só quando a pagina for iniciada

//   async function chamarApi(){
//     // Chamar uma API (conectar o frontend com o backend)
//     // fetch => forma nativa do javascript para chamar API (realizar requisição HTTP)
//     // => Nao depende de pacotes, pois é nativo 
    
//     const retorno = await axios.get('http://localhost:3000/tarefa') // se tiver API local rodando
//     console.log('valor do retorno', retorno.data.tarefas)
//     // Atualizar estado de tarefas
//     setTarefas(retorno.data.tarefas)
//   }
// }

// export default App