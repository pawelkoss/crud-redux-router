import actions from './actions'

const INITIAL_STATE = {
    allowRedirect: false,
    loadFromState: false,
    //usersList: [{id:"0", name:"Pawel", username:"koss", email:"gmail", address:{city:"bstok"}}]
    usersList:[]
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
      case actions.ALLOW_REDIRECT: {
        return { ...state, allowRedirect: action.bool}
      }
      default:
        return state
    }
  }

  export default userReducer;