import React from 'react'

const Todo = ({todo}) => {
const style = {

}
  return (
    <li className={styled.li}>Todo
    <div className={style.row}> 
    <input type="checkbox"  />
    <p className={style.text}> {todo}</p> </div>
    </li>
  )
}

export default Todo