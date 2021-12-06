import React from "react";

function AddToList({addItemToList, itemRef}) {
    return(
        <div className="row justify-center">
            <div className="col">
                <form data-testid="form-add-list" onSubmit={addItemToList}>
                    <input ref={itemRef} className="input input-add-list" type="text" placeholder="Add a new anime..." />
                    <button onClick={addItemToList} className="btn btn-secondary">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddToList