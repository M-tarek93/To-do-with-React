import React, { useState } from 'react';

class ToDoForm extends React.Component {

    state = {
        task: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.task.value)
        this.props.addTask(this.state.task)
        this.setState({ task: '' })
    }

    render() {
        return ( <
            form onSubmit = { this.handleSubmit } >
            <
            input type = "text"
            name = 'task'
            onChange = { this.handleChange }
            value = { this.state.task }
            /> <
            button type = "submit"
            className = 'btn btn-success' > Add Task < /button> <
            /form>
        );

    }


}





export default ToDoForm;