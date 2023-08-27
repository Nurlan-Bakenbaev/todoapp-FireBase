import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
function App() {
  const [todos, setToDos] = useState([
    "learn to do",
    "Leet code",
    "learn Backend",
  ]);

  //create todo
  //read todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todos = [];
      querySnapshotforEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setToDos(todosArr);
    });
    return ()
  }, []);
  //update todo
  //delete todo

  const style = {
    bg: `h-screen w s-screen p-4 bg-gradient-to-r from-[#ff45e6] to-[#ff7445]`,
    container: `bg-[#e0e0e0] max-w-[600px] w-full m-auto rounded-md shadow-xl p-6`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between items-center`,
    input: `border p-2 w-full text-xl`,
    button: `p-3 mt-2 bg-purple-500 text-slate-100`,
    count: "text-center p-3",
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>To Do App </div>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="have something to do"
          />
          <button className={style.button}>
            <AddIcon />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>
          You have {todos.length > 1 ? todos.length + " todos " : " todo"}
        </p>
      </div>
    </div>
  );
}

export default App;
