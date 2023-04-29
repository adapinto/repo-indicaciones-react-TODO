import { useState } from 'react';

import { IPanelProps } from '../interfaces/IPanel'
import Card from './Card'

//El componente toma un objeto props de tipo IPanelProps como entrada. 
// La interfaz IPanelProps define los tipos de datos para las propiedades que se pasan al componente.

function Panel(props: IPanelProps) {

    return (
        <div className="columna">
            <h2> { props.title } </h2>
//El componente Panel renderiza un div con la clase columna. 
//También renderiza un encabezado h2 que muestra el valor de la propiedad title pasada por props.
            {  
                props.tasks.map((task) => {
//Luego, usa el método map() en el array de tareas que se pasa por la propiedad tasks de props para renderizar 
//un componente Card para cada tarea en el array. Cada componente Card recibe como propiedades la tarea individual, 
//la función changeStatus, y la función deleteTask.
                    return (
                        <Card 
                            task={task} 
                            changeStatus={props.changeStatus} 
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }
        </div>
    )
}



//Por último, el componente se exporta como predeterminado 
// (default) para que pueda ser utilizado en otros archivos y componentes de la aplicación.

export default Panel;