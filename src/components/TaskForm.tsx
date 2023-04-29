import { useState , useEffect } from 'react';
import { ITask, ITaskFormProps } from '../interfaces/ITask'

// define un componente llamado TaskForm, el cual es un formulario que permite 
// ingresar información sobre una tarea.

//es un formulario para ingresar información sobre una tarea, que valida los datos antes 
//de guardarlos y muestra los errores en caso de que los haya.

function TaskForm(props: ITaskFormProps) {

//El componente utiliza los hooks useState y useEffect de React. Además, recibe por medio de sus props un objeto de 
//tipo ITaskFormProps, el cual tiene la información de la tarea y las funciones necesarias para actualizarla y guardarla.

    const [errores, setErrores] = useState<string[]>([])

//En caso de que haya algún error de validación, se almacena 
//en el estado errores utilizando el hook useState. Si hay errores, se muestran debajo del botón de "Añadir".

//El formulario contiene campos para el nombre de la tarea, el equipo asignado, la fecha de inicio, la fecha de fin y las horas requeridas para la tarea. Cuando se hace clic en el botón de "Añadir", se llama a la función validateForm que realiza 
//algunas validaciones en los datos ingresados. Si todo es correcto, se llama a la función onSave para guardar la tarea.
    const validateForm = () => {
        
        let newError: string[] = [];
        

        if(!props.task.name || props.task.name === '') {            
            newError = [...newError, 'El nombre de la tarea es obligatorio']            
        }

        if(!props.task.team || props.task.team === '') {            
            newError = [...newError, 'El equipo es obligatorio']            
        }

        if(!props.task.startdate) {
            newError = [...newError, 'La fecha de inicio es obligatoria']                        
        }

        if(!props.task.enddate) {            
            newError = [...newError, 'La fecha de fin es obligatoria']
        }

        if(props.task.startdate && props.task.enddate && props.task.startdate > props.task.enddate) {            
            newError = [...newError, 'La fecha de inicio no puede ser mayor que la fecha de fin']            
        }

        if(!props.task.hours || props.task.hours === 0) {            
            newError = [...newError, 'Las horas son obligatorias']            
        }

        if( newError.length === 0 ) {
            props.onSave()
            setErrores([]) 
        }else{
            setErrores([...newError])    
        }
        
    }
  
    return (        
        <form>
            <table>
                <tr>
                    <td> <label htmlFor="taskName">Tarea</label> </td>
                    <td> <input type="text" onChange={props.onChangeInput} name="name" placeholder='Tarea' value={props.task.name} /> </td>
                </tr>
                <tr>
                    <td><label>Equipo:</label></td>
                    <td>
                        <select id="equipo" name="team" value={props.task.team} onChange={props.onChangeSelect} >
                            <option value="">Seleccione un equipo</option>
                            {props.teams.map((team) => {
                                return <option key={team} value={team} >{team} </option>
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label>Fecha Inicio:</label></td>
                    <td>
                        <input 
                            type="date"
                            id="fecha-inicio"
                            name="startdate"
                            placeholder="Fecha Inicio"
                            onChange={props.onChangeInput}
                            value={props.task.startdate ? new Date(props.task.startdate).toISOString().substr(0, 10).split('T')[0] : ''}
                        />
                    </td>
                </tr>
                <tr>
                    <td><label>Fecha Fin:</label></td>
                    <td>
                        <input 
                            type="date"
                            id="fecha-fin"
                            name="enddate"
                            placeholder="Fecha Fin"
                            onChange={props.onChangeInput}
                            value={props.task.enddate ? new Date(props.task.enddate).toISOString().substr(0, 10).split('T')[0] : ''}                            
                        />
                    </td>
                </tr>

                <tr>
                    <td><label>Horas:</label></td>
                    <td>
                        <input 
                            type="number" 
                            id="horas" 
                            name="hours" 
                            placeholder="Horas"
                            onChange={props.onChangeInput}
                            value={props.task.hours ? props.task.hours : 0}
                        />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    
                        <td>
                            <button type="button" onClick={ validateForm }  >Añadir</button>
                            { errores.length > 0 && (
                            <div>
                                <h2>Errores</h2>
                                <div className="error-card">   
                                    { errores.map((error) => {
                                        return <p>{error}</p>
                                    })}                                                                 
                                </div>
                            </div>
                            ) }
                        </td>
                    
                </tr>            

            </table>        
        </form>        
    );

}

export default TaskForm;