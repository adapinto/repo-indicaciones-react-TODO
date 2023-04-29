import { ITask } from "./ITask";

// define las propiedades que se pueden pasar a un componente de React que representa una tarjeta de tarea (task), 
//y proporciona una forma de actualizar el estado interno del componente y eliminar tareas de la lista.

export interface ICard {
    task: ITask;
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
}