import React from 'react';

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button 
            className="btn-outline-secondary"
            type="submit"
            onClick={() => onAdd("Hello")}>
            Добавить</button>
        </div>
    )
}

export default PostAddForm;