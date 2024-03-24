const initialState={
    activeTab : 'home'
}
const rootreducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ACTIVE_TAB':
            return {...state,activeTab:action.payload}
        default: 
            return state
    }
}
