import React from "react";

function AddToList({addItemToList, itemRef}) {
    return(
        <div className="row justify-center">
            <div className="col">
                <form onSubmit={addItemToList}>
                    <input ref={itemRef} className="input input-add-list" type="text" placeholder="exmple" />
                    <button onClick={addItemToList} className="btn btn-secondary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddToList