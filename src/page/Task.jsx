import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";




function Task() {
    const navigate = useNavigate()

    const [sershParams] = useSearchParams()

    const title = sershParams.get("title")
    const description = sershParams.get("description")


    return (
        <div className="w-screen h-screen bg-slate-800 flex justify-center p-8">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-8">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon />
                    </button>
                    <Title>Detalhes da Tarefa</Title>
                </div>
                <div className="bg-slate-400 p-4 rounded-md">
                    <h2 className="text-xl text-white font-bold">{title}</h2>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Task;