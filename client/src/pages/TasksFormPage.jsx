import {useForm} from 'react-hook-form';
import {createTask} from '../api/tasks.api';

export function TasksFormPage() {

    const {register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        const res = await createTask(data);
        console.log(res);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="tittle" 
                {...register("tittle", {required: true})}
                />
                {errors.tittle && <span>Tittle is required</span>}

                <textarea 
                    rows="3" 
                    placeholder="Description"
                    {...register("description", {required: true})}
                ></textarea>
                {errors.description && <span>Description is required</span>}
                <button>Save</button>
            </form>
        </div>
    
    )
}

