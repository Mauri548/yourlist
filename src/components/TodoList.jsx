import React from "react";
import TodoItem from "./TodoItem";

function TodoList({list, toggleShow, deleteItemToList}) {
    return(
        <div className="row conteiner-item px-0">
            <ul className="w-100">
                {list.map((item) => (
                    <TodoItem 
                        key={item.id} 
                        item={item} 
                        toggleShow={toggleShow} 
                        deleteItemToList={deleteItemToList} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList