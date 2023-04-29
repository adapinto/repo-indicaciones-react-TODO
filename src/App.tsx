import { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ITask } from './interfaces/ITask' 

import TaskForm from './components/TaskForm'
import Panel from './components/Panel'


function App() { //el componente principal de la aplicación

//Este componente tiene cuatro estados utilizando useState, id, task, taskList y teams, 
//que se actualizan en diferentes momentos en la aplicación. 
  
  const [id, setId] = useState<number>(0)
  const [task, setTask] = useState<ITask>({ "status" : "TODO", "id": 0 })
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [teams, setTeams] = useState<string[]>(["Development", "QA", "PMs", "BI"])
  
// También hay tres funciones que manejan la actualización de estos estados: handleInputChange, 
// handleSelectChange, changeStatus, deleteTask y addTask.

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const changeStatus = (id: number, status: string) => {
    const newTaskList = taskList.map( task => {
      if(task.id === id) {
        task.status = status
      }
      return task
    })
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter( task => task.id !== id )
    setTaskList(newTaskList)
  }

  const addTask = () => {   
    
    setTaskList([...taskList, task])
    const newId: number = id + 1
    setId(newId)

    setTask({ 
      "id" : newId
      , "status" : "TODO" 
      , "name" : "" 
      , "team" : "" 
      , "hours" : 0 
    })
  }

 // El componente App devuelve un div con dos secciones.
 // La primera sección tiene el encabezado de la aplicación, que es un título.
 // La segunda sección contiene el TaskForm y tres componentes Panel, que son básicamente contenedores 
 //que muestran una lista de tareas con un estado determinado (TODO, In Progress, Completed). 
 //El TaskForm es un componente que permite al usuario agregar nuevas tareas a la lista.
 // Los tres Panel componentes muestran las tareas que tienen el estado adecuado en cada uno de los tres paneles.

  return (
    <div className="App">

      <header>
          <h1>TODO List</h1>
      </header>
// En la sección del TaskForm, se pasan las funciones handleInputChange, handleSelectChange
// y addTask como props. En la sección de cada Panel, se pasan la lista de tareas y las 
// funciones changeStatus y deleteTask como props. Cada Panel muestra una lista de tareas 
// con su nombre, equipo y horas. También tiene botones para cambiar el estado de una tarea y 
// eliminarla de la lista.

      <div className="container">
        <TaskForm 
            task={task} 
            teams={teams} 
            onChangeInput={handleInputChange}
            onChangeSelect={handleSelectChange}
            onSave={addTask}             
        />
        <div className="columnas">
          <Panel 
            title={"Tareas Pendientes"} 
            tasks={ taskList.filter( task => task.status === 'TODO' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
          <Panel 
            title={"Tareas en progreso"} 
            tasks={ taskList.filter( task => task.status === 'In Progress' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
          <Panel 
            title={"Tareas Completadas"} 
            tasks={ taskList.filter( task => task.status === 'Completed' ) }
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// En resumen, este código es una aplicación simple de lista de tareas en React 
// que utiliza los conceptos de estado, propiedades y componentes para mostrar la 
// lista de tareas y permitir la interacción del usuario con la misma.