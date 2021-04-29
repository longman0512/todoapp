export function addTodoAction(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export function saveLocal(todo) {
    return {
        type: 'SAVE',
        payload: todo
    }
}