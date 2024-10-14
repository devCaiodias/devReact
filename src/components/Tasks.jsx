import { ChevronRightIcon, BadgeX   } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";


function Tasks({tasks, onTaskClick, deletTask}) {
    // criando a função navigation
    const navigate = useNavigate()

    // Criando a função que vai aparecer detalhes 
    function onSeeDatailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/taks?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((tasks) => (
                <li key={tasks.id} className="flex gap-2">
                    <button onClick={() => onTaskClick(tasks.id)} className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${tasks.isCompleted && 'line-through bg-red-500'}`}>
                        {tasks.title}
                        
                        </button>
                    <Button onClick={() => onSeeDatailsClick(tasks)}  >
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => deletTask(tasks.id)} >
                        <BadgeX  />
                    </Button>
                    </li>
        ))}
        </ul>
    )
}

export default Tasks;