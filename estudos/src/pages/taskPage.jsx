import { useSearchParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TaskPage () {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
    <div className="h-screen w-screen bg-slate-500 p-6"> 
        <div className="w-[500] space-y-4">
            <button 
            onClick={() => navigate("/")}
            className="bg-slate-400 p-2 rounded-md text-white hover:bg-white hover:text-black"
            > 
            <MoveLeft />
            </button>
            <h1 className="text-5xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md mt-10">
            <h1 className="text-3xl text-white text-center pb-4 font-bold">{title}</h1>
            <p className="text-white text-xl text-center">{description}</p>
        </div>
        
    </div>
    )
}

export default TaskPage;