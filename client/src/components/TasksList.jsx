import {useEffect} from 'react'
import {gerAllTasks} from '../api/tasks.api'


export function TasksList() {

    useEffect(() =>  {
        function loadTasks() {
            const res = gerAllTasks();
            console.log(res);
        }
        loadTasks();
}, [])

    return (
        <div>TasksList</div>
    )
}

