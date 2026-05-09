import { useEffect, useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { v4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) || []);

  /* API CONEXÃO
  useEffect( () => {
    //CHAMADOS API COM AXIOS OU FETCH
    async function fetchTasks() {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
      {
        method: 'GET'
      }
    );
    const data = await response.json()
    console.log(data)

    setTasks(data)
    }

    fetchTasks()

    // ARMAZENAR NO STATE

    

  }, []) */

  function OnTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    });

    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    setTasks(updatedTasks);
  }


  function onAddTaskSubmite(title, description)  {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,

    }

    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className= "text-3xl  text-slate-100 text-center font-bold mb-8">Gerenciador De Tarefas</h1>
        <AddTask onAddTaskSubmite={onAddTaskSubmite} />
        <Tasks tasks={tasks} OnTaskClick={OnTaskClick} onTaskDelete={onTaskDelete}  />
        
      </div>
    </div>
  )
}

export default App
