import { useState } from "react";
import Input from "./Input";





function AddTasks({onAddTasksSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input 
            type="text" 
            placeholder="enter the title of the task"  
            value={title} 
            onChange={(event) => setTitle(event.target.value)} />
            
            <Input type="text" 
            placeholder="enter the task description"  
            value={description} 
            onChange={(event) => setDescription(event.target.value)} />
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md font-medium" onClick={() => 
                // Verificar se o title e a description estão preenchidassda
                 
                {
                    if (!title.trim() || !description.trim()) {
                    return alert('Preencha todos campos pff')
                 }
                    onAddTasksSubmit(title, description);
                    setTitle(""); 
                    setDescription("")}
                } >to add</button>
        </div>
    )
}

export default AddTasks;