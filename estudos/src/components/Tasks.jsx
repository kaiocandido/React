import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task) => (
            <li key={task.id} className="flex">
                <button onClick={() => props.OnTaskClick(task.id)}
                    className={`text-left bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>{task.title}
                    </button>
                <button className="bg-slate-400 p-2 rounded-md text-white gap-2 "><ChevronRightIcon/></button>
            </li>
        ))}
        </ul>
    )
}

export default Tasks