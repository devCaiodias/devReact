import { useEffect, useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

import {v4} from 'uuid'
import Title from "./components/Title";

function App() {
  // criando a função useState
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  )

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  // Se vc quiser pode pegar uns dados de uma API para pegar as tarefas 
  
  useEffect(() => {
    async function fetchTasks() {
      // Chamar A Api
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
      method: 'GET'
    });
    // Pegar os dados que ela Retorna
    const data = await response.json()

    // Armazenar/Persistir esses dados no State
    setTasks(data)
    }

  //   fetchTasks();

  }, [])


  // função para mostrar as Tasks na pagina 
function onTaskClick(taskId) {
  const newTasks = tasks.map(task => {
    // I NEED TO UPDATE THIS TASK
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }

    // I DON'T NEED TO UPDATE THIS TASK
    return task
  }
  )

  setTasks(newTasks);
}
// criando a função para deletar uma Task 
 function onDeletTasks(taskId) {
  const deletTask = tasks.filter(task => task.id !== taskId)

  setTasks(deletTask)
 }
// função par adicionar uma nova task
 function onAddTasksSubmit(title, description) {
  const newTasks = {
    id: v4(),
    title,
    description,
    isCompleted: false
  }

  setTasks([...tasks, newTasks])
  
 }


  return (
    <div className="max-w-screen-2xl h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <Title >Gerenciador de Tarefas</Title>
        <AddTasks onAddTasksSubmit={onAddTasksSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deletTask={onDeletTasks} />
      </div>
    </div>
  )
}

export default App;