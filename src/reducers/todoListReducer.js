const intialState = [];

export default function (state = intialState, action) {
    var temp = [];
    switch (action.type) {
        case 'SAVE':
            return [
                ...action.payload
            ]
        case 'ADD_TODO':
            // state.unshift(action.payload);
            console.log(action.payload)
            temp = [...state, {
                ...action.payload,
                isDone: false
            }]
            localStorage.setItem('todo', JSON.stringify(temp));
            return [
                ...temp
            ];
        case 'DELETE_TODO':
            console.log(action.payload)
            state.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state));
            return [...state];
        case 'UPDATE_DONE':
            for(var i = 0; i < state.length; i++){
                if(i === action.payload.id){
                    temp.push({
                        ...state[i],
                        isDone: !action.payload.flag
                    })
                } else {
                    temp.push(state[i])
                }
            }
            localStorage.setItem('todo', JSON.stringify(temp));
            return [
                ...temp
            ]
        default:
            return state;
    }
}
