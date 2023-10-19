import React, { useReducer, useRef, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
import { useContext } from 'react';

type Action = {
  type: "CREATE",
  data: {
    id: number;
    content: string;
  }
} | {
    type: "DELETE";
   id: number;
  };

function reducer(state: Todo[], action: Action) {
  switch(action.type){
    case "CREATE": {
      return [...state, action.data]
    }
    case "DELETE":{
      return state.filter((it)=> it.id !== action.id)
    }
  }
};

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);
// onClickAdd와 onClickDelete 함수가 가지고 있는 객체를 공급하기 때문에 타입은 객체타입 또는 null 타입으로 정의

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  // 타입 좁히기
  if(!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
  // 반환값의 타입은 객체 타입
}

function App() {
  const [todos, dispatch] = useReducer(reducer,[]);
  
  const idRef = useRef(0);

  const onClickAdd = (text:string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      }
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(()=>{
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onClickAdd, onClickDelete}}>
          <Editor/>
          <div>
            {todos.map((todo)=>( // {}가 아닌 ()로 묶기
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider> 
    </div>
  );
}

export default App;
