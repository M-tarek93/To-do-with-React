import React from 'react';
import Toast from 'react-bootstrap/Toast';

class DoneTasks extends React.Component {

    state = {
        tasksList: this.props.completed,
    }

    removeTask = (e) => {
        e.preventDefault();
        this.props.handleTask('removeCompleted', e.target.value)
    }

    undoTask = (e) => {
        e.preventDefault();
        this.props.handleTask('undo', e.target.value)
    }

    render() {
        if(this.props.completed.length >0){
        return (
            <div className="column">
                <h2>Tasks Completed: {this.props.completed.length}</h2>
                {this.props.completed.map((t) => {
                    return (
                        <>
                            <Toast>
                                <Toast.Header>
                                    <strong className="mr-auto">Completed Task</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <h3>{t}</h3>
                                    <br></br>
                                    <button value={t} onClick={this.removeTask} class='btn btn-danger' >Delete</button>
                                    <button value={t} onClick={this.undoTask} class='btn btn-info' >Undo</button>
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





export default DoneTasks;