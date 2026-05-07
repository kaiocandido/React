import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "estudar programação para melhorar para vaga pleno",
      isCompleted: false
    }, {
      id: 2,
      title: "Estudar PHP",
      description: "estudar programação para melhorar para vaga pleno",
      isCompleted: false
    }, {
      id: 3,
      title: "Estudar Logica",
      description: "estudar programação para melhorar para vaga pleno",
      isCompleted: false
    }
  ]);

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
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,

    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className= "text-3xl  text-slate-100 text-center font-bold">Gerenciador De Tarefas</h1>
        <AddTask onAddTaskSubmite={onAddTaskSubmite} />
        <Tasks tasks={tasks} OnTaskClick={OnTaskClick} onTaskDelete={onTaskDelete}  />
        
      </div>
    </div>
  )
}

export default App
