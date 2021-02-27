const ADD_USER = 'ADD_USER'
const DEL_USER = 'DEL_USER'
const MOD_USER = 'MOD_USER'
const DEL_ALL = 'DEL_ALL'
const ALLOW_REDIRECT = 'ALLOW_REDIRECT'

const addUser = user => ({type: ADD_USER, user});
const delUser = index => ({type: DEL_USER, index});
const modUser = (user, index) => ({type: MOD_USER, payload: {user, index}});
const delAll = () => ({type: DEL_ALL});
const allowRedirect = bool => ({type: ALLOW_REDIRECT, bool});

export default  {addUser, delUser, modUser, delAll, allowRedirect, ADD_USER, DEL_USER, MOD_USER, DEL_ALL, ALLOW_REDIRECT }