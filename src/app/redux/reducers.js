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
        return { ...state, usersList: [...state.usersList.slice(0,action.index), ...state.usersList.slice(action.index+1, state.usersList.lenght)]} // delete by array index
        // return { ...state, usersList: [state.usersList.filter(user => user.id !== action.id)]} // delete by id
      }
      case actions.MOD_USER: {
        //return { ...state, usersList: [state.usersList.map(item => item.id === action.user.id ? {...item, ...action.user} : item)]}
        //return { ...state, usersList: [...state.usersList.splice(action.payload.index, 1, action.payload.user)]}
        const usersListCopy = [...state.usersList];
        usersListCopy[action.payload.index] = action.payload.user;
        return { ...state, usersList: usersListCopy }
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

 