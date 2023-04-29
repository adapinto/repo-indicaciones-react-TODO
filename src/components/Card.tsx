import { useState } from 'react';
import { ICard } from '../interfaces/ICard';

//Este código define un componente de React llamado Card que renderiza una tarjeta de tarea 
//y tiene la capacidad de actualizar el estado de la tarea y eliminarla de la lista de tareas.

function Card(props: ICard){

    //El componente utiliza el hook useState de React para mantener el estado interno de la propiedad status. 
    //La propiedad status representa el estado actual de la tarea (por ejemplo, "TODO", "In Progress" o "Completed").
    const [status, setStatus] = useState<string>(props.task.status ? props.task.status : 'TODO')

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)
        props.changeStatus(props.task.id, e.target.value)
    }

    //Cuando se cambia el estado de la tarea a través del selector de estado en la tarjeta, la función handleSelectChange se llama y actualiza el estado interno 
    //del componente y llama a la función changeStatus para actualizar el estado de la tarea en la lista de tareas.
    return (

        <div className="card">
            <div className="card-item">
                <span>Id:</span>
                <p>{ props.task.id }</p>
            </div>
            <div className="card-item">
                <span>Tarea:</span>
                <p>{ props.task.name }</p>
            </div>
            <div className="card-item">
                <span>Fecha Inicio:</span>
                <p>{ props.task.startdate ? new Date(props.task.startdate).toISOString().substr(0, 10).split('T')[0] : '' }</p>
            </div>
            <div className="card-item">
                <span>Fecha Fin:</span>
                <p>{ props.task.enddate ? new Date(props.task.enddate).toISOString().substr(0, 10).split('T')[0] : '' }</p>
            </div>
            <div className="card-item">
                <span>Horas:</span>
                <p>{ props.task.hours }</p>
            </div>
            <div className="card-item">
                <span>Estado:</span>
                <p>
                <select value={status} onChange={handleSelectChange} name="estado">                    
                    <option value="TODO">TODO</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                </p>
            </div>
            <button className="delete-btn" onClick={ () => props.deleteTask( props.task.id ) } >x</button>
        </div>

    )

}

export default Card;