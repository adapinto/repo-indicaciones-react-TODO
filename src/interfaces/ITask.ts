import React from "react";
//Describe la estructura de un objeto que representa una tarea y sus atributos
export interface ITask {
    id: number;
    name?: string;
    startdate?: Date;
    enddate?: Date;
    status?: string;
    hours?: number;
    team?: string;
}

//Describe los props que se pasan a un componente de formulario para crear o actualizar una tarea
//onChanges que se usan para actualizar los valores del formulario y on Save que guarda la tarea
export interface ITaskFormProps {
    task: ITask;
    teams: string[];
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSave: () => void;
}