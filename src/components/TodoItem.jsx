import React from "react";

function TodoItem({item, toggleShow, deleteItemToList}) {
    const {id, name,  show} = item

    const onClick = () => {
        toggleShow(id)
    }

    const deleteItem = () => {
        deleteItemToList(item)
    }

    return (
        <li>
            <div className="row p-0 px-0">
                <div className="col p-0 w-100 item" >
                    <div className="col w-100" onClick={onClick}>
                        <span className={`pl-1 ${show? 'checked': ''}`} >
                            {name}
                        </span>
                    </div>
                    <div className="col" onClick={deleteItem}>
                        <i className="fas fa-trash-alt text-grey" ></i>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TodoItem