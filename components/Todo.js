import React from 'react'
import PropTypes from 'prop-types'

// Here, we make cross off our list if the todo is completed.
// Checked through boolean here.
const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

// Make sure that the prop being passed through are the right types
// so that the arrow function won't just let anything pass through
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo