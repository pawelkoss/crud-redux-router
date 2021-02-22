import actions from '../redux/actions'

const url ="https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";


const fetchMovies = async () => {
    const response = await fetch(url, { method: 'GET' });
    const json = await response.json();
    console.log('api call');
    return json;
}

export const getUserList = () => async (dispatch) => {
    const users = await fetchMovies();
    users.map(user => dispatch(actions.addUser(user)));
}

export const saveUser = () => async (dispatch, getState) => {
    const user = getState().user;
    
    await fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    alert("User added");
    // todo przekierowanie do "/"
    
  } 