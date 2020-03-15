import React from 'react';
import Toast from 'react-bootstrap/Toast'
class ToDoTasks extends React.Component {

    state = {
        tasksList: this.props.tasks,
    }

    removeTask = (e) => {
        e.preventDefault();
        this.props.handleTask('remove', e.target.value)
    }

    completeTask = (e) => {
        e.preventDefault();
        this.props.handleTask('complete', e.target.value)
    }

    render() {
        if(this.props.tasks.length >0){
        return (
            <div className="column">
                <h2>Tasks to do: {this.props.tasks.length}</h2>
                {this.props.tasks.map((t) => {
                    return (
                        <>
                            <Toast className="card">
                                <Toast.Header>
                                    <strong className="mr-auto">To Do Task</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <h3>{t}</h3>
                                    <br></br>
                                    <button value={t} onClick={this.removeTask} class='btn btn-danger' >Delete</button>
                                    <button value={t} onClick={this.completeTask} class='btn btn-success' >Complete</button>
                                </Toast.Body>
                            </Toast>
                        </>
                    )
                })}
            </div>
        );
            }else return (<></>);
    }

}



export default ToDoTasks;