export function deleteTodoAction(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}

export function updateDone (data) {
    return {
        type: 'UPDATE_DONE',
        payload: data
    };
}