import { useReducer, useState } from 'react'
function reducer(stat,action){
  console.log({stat , action});

  return stat;
}

function App() {
  const [state, dispatch] = useReducer(reducer,{
    todos:[{
      name:'faire les cours dans le cite des palmiers',
      checked:false
    },{
      name:'rouge',
      checked:false
    },{
      name:'faire voir palmiers',
      checked:false
    }]
  });

  console.log(state.todos);

  return <ul>
   
    {state.todos.map(todo => ( <li 
                          key={todo.name} 
                          onClick={()=>{ dispatch({type:"REMOVE_TODO", payload : todo})}}
                        >{todo.name}</li>
    ))}
  
  </ul>
}

export default App;