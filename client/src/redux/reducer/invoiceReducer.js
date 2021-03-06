export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return [...state, { ...action.payload }];
        case 'CREATE':
            return [...state, action.payload];
        default: 
            return state;
    }
}