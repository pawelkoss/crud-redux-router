const ADD_USER = 'ADD_USER'
const DEL_USER = 'DEL_USER'
const MOD_USER = 'MOD_USER'
const DEL_ALL = 'DEL_ALL'
const IS_LOAD = 'IS_LOAD'

const addUser = user => ({type: ADD_USER, user});
const delUser = index => ({type: DEL_USER, index});
const modUser = user => ({type: MOD_USER, user});
const delAll = () => ({type: DEL_ALL});
const isLoaded =() => ({type: IS_LOAD});

export default {addUser, delUser, modUser, delAll, isLoaded, ADD_USER, DEL_USER, MOD_USER, DEL_ALL, IS_LOAD }