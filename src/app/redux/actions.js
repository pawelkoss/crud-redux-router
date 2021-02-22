const ADD_USER = 'ADD_USER'
const DEL_USER = 'DEL_USER'
const MOD_USER = 'MOD_USER'
const DEL_ALL = 'DEL_ALL'

const addUser = user => ({type: ADD_USER, user});
const delUser = index => ({type: DEL_USER, index});
const modUser = user => ({type: MOD_USER, user});
const delAll = () => ({type: DEL_ALL});

export default {addUser, delUser, modUser, delAll, ADD_USER, DEL_USER, MOD_USER, DEL_ALL }