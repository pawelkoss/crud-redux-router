import actions from './actions'

const INITIAL_STATE = {
    loadFromState: false,
    usersList: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case actions.ADD_USER: {
        return {...state, usersList: [...state.usersList, action.user]}
      }
      case actions.DEL_USER: {
        return { ...state, usersList: [...state.usersList.slice(0,action.index), ...state.usersList.slice(action.index+1, state.usersList.lenght)]}
      }
      case actions.DEL_ALL: {
        return { ...state, usersList:[]}
      }
      
      default:
        return state
    }
  }

  export default userReducer;