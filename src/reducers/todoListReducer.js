const intialState = [{
    workName: 'work 1',
    isDone: false
}, {
    workName: 'work 2',
    isDone: true
}, {
    workName: 'work 3',
    isDone: false
}, {
    workName: 'work 4',
    isDone: true
}];

export default function (state = intialState, action) {
    switch (action.type) {
        case 'SAVE':
            return [
                ...action.payload
            ]
        case 'ADD_TODO':
            // state.unshift(action.payload);
            console.log(action.payload)
            var temp = [...state, {
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
            var temp = [];
            state.map((item, index)=>{
                if(index === action.payload.id){
                    temp.push({
                        ...item,
                        isDone: !action.payload.flag
                    })
                } else {
                    temp.push(item)
                }
            })
            localStorage.setItem('todo', JSON.stringify(temp));
            return [
                ...temp
            ]
        default:
            return state;
    }
}
