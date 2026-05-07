import { useState } from "react"

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-5 p-6 bg-slate-200 rounded-md shadow mb-4">
            <input onChange={(event) => setTitle(event.target.value) } value={title} placeholder="Titulo da Tarefa " type="text" className="bg-blue-400 w-full text-white p-2 rounded-md placeholder:text-white text-center"></input>
            <input onChange={(event) => setDescription(event.target.value) }  value={description} placeholder="Descrição da tarefa" type="text" className="bg-blue-400 w-full text-white p-2 rounded-md placeholder:text-white text-center"></input>
            <button onClick={() => { 
                if (!title.trim() || !description.trim()){
                    return alert("Prencha os campos da tarefa!!")
                }
                props.onAddTaskSubmite(title, description); setTitle(""); setDescription(""); }
                }className="text-left bg-blue-400 w-full text-white p-2 rounded-md placeholder:text-white text-center">Adicionar</button>
        </div>
    )
}

export default AddTask