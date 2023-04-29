import { ITask } from "./ITask";


//define las propiedades (props) que se pueden pasar a un componente de React 
//que representa un panel de tareas (tasks).
export interface IPanelProps {
    title: string;
    tasks: ITask[];
    changeStatus: (id: number, status: string) => void; //es una función que no devuelve nada (void), lo que significa que se utiliza para actualizar el estado interno del componente que utiliza estas propiedades. 
    deleteTask: (id: number) => void;// también es una función que no devuelve nada (void) y se utiliza para eliminar una tarea de la lista de tareas.
} 