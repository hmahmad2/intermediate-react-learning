import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

// determine whether or not the todo should be shown
const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
            return todos
    }
}

// use the function to use the connect() function
// It describes how to transform the current Redux store state
// into the props I want to pass to a presentational component
// I'm wrapping.
// Filter state.todos using the state.visibilityFilter, and push that
// into this function
const mapStateToProps = state => {
    return {
        todos: getVisibileTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList