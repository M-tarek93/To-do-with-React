import React from 'react';
import Toast from 'react-bootstrap/Toast';

class DeletedTasks extends React.Component {

    state = {
        tasksList: this.props.deleted,
    }

    recoverTask = (e) => {
        e.preventDefault();
        this.props.handleTask('recover', e.target.value)
    }

    render() {
        if (this.props.deleted.length > 0) {
            return (
                <div className="column">
                    <h2>Tasks deleted: {this.props.deleted.length}</h2>
                    {this.props.deleted.map((t) => {
                        return (
                            <>
                                <Toast>
                                    <Toast.Header>
                                        <strong className="mr-auto">Deleted Task</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        <h3>{t}</h3>
                                        <br></br>
                                        <button value={t} onClick={this.recoverTask} class='btn btn-info' >Recover</button>
                                    </Toast.Body>
                                </Toast>
                            </>
                        )
                    })}
                </div>
            );
        } else return (<></>);
    }

}



    export default DeletedTasks;