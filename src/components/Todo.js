import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoTasks from './ToDoTasks';
import DoneTasks from './DoneTasks';
import DeletedTasks from './DeletedTasks';

class ToDo extends React.Component {

    state = {
        tasks: [],
        completed: [],
        deleted: []
    }

    addTask = (task) => {
        this.setState({ tasks: this.state.tasks.concat(task) });
    }

    tasks = [];
    completed = [];
    deleted = [];

    componentDidUpdate() {
        this.tasks = [...this.state.tasks];
        this.completed = [...this.state.completed];
        this.deleted = [...this.state.deleted];
    }

    handleTask = (type, task) => {
        switch (type) {
            case 'remove':
            case 'complete':
                this.tasks.splice(this.tasks.indexOf(task), 1);
                this.setState({ tasks: this.tasks });
                type === 'remove' ? this.setState({ deleted: this.state.deleted.concat(task) })
                    : this.setState({ completed: this.state.completed.concat(task) });
                break;
            case 'removeCompleted':
            case 'undo':
                this.completed.splice(this.completed.indexOf(task), 1);
                this.setState({ completed: this.completed });
                type === 'removeCompleted' ? this.setState({ deleted: this.state.deleted.concat(task) })
                    : this.setState({ tasks: this.state.tasks.concat(task) });
                break;
            case 'recover':
                this.deleted.splice(this.deleted.indexOf(task), 1);
                this.setState({ deleted: this.deleted });
                this.setState({ tasks: this.state.tasks.concat(task) });
                break;
        }
    }

    render() {
        return (
            <div className=''>
                <ToDoForm className='column justify-content-center' addTask={this.addTask} />
                <div className='row'>
                    <ToDoTasks tasks={this.state.tasks} handleTask={this.handleTask} />
                    <DoneTasks completed={this.state.completed} handleTask={this.handleTask} />
                    <DeletedTasks deleted={this.state.deleted} handleTask={this.handleTask} />
                </div>
            </div>
        );
    }
}

export default ToDo;