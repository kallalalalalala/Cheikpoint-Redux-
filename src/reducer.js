

const initialState = {
    tasks: [],
};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case 'FILTER_TASKS':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.isDone === action.payload),
            };
        default:
            return state;
    }
};

export default taskReducer;
