"use client";
import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    task: "",
    taskList: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_TASK':
            return {
                ...state,
                task: action.payload
            };
        case 'ADD_TASK':
            return {
                ...state,
                taskList: [...state.taskList, state.task],
                task: "" // Clear input after adding the task
            };
        default:
            return state;
    }
}

function Footer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK' });
    };

    const handleChange = (e) => {
        dispatch({ type: 'SET_TASK', payload: e.target.value });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input 
                        onChange={handleChange}
                        type="text"
                        id="task"
                        className="form-control"
                        value={state.task}
                    />
                    <button disabled={!state.task} type="submit" className="btn btn-primary">Add Task</button>
                </div> 
            </form>

            <div className="mt-3">
                {state.taskList.map((task, index) => (
                    <div key={index} className="card mb-2" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Task {index + 1}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Task Details</h6>
                            <p className="card-text">{task}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Footer;
