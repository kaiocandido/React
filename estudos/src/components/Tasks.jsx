import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {

    const navigate = useNavigate();

    function onSeeDetails(task) {
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)

        navigate(
            `/task?${query.toString()}`
        );
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

            {props.tasks.map((task) => (

                <li key={task.id} className="flex gap-2">

                    <button
                        onClick={() => props.OnTaskClick(task.id)}
                        className={`text-left bg-blue-400 w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                    >
                        {task.title}
                    </button>

                    <button
                        onClick={() => onSeeDetails(task)}
                        className="bg-blue-400 p-2 rounded-md text-white"
                    >
                        <ChevronRightIcon />
                    </button>

                    <button
                        onClick={() => props.onTaskDelete(task.id)}
                        className="bg-blue-400 p-2 rounded-md text-white"
                    >
                        <DeleteIcon />
                    </button>

                </li>
            ))}

        </ul>
    );
}

export default Tasks;