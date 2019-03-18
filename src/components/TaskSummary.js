//Component to display count of total to do items and completed to do items

import React from 'react';

const TaskSummary = ({ todos }) => {

    const todo = todos.length ? (
        todos.filter(todo => {
            return todo.complete;
        })
    ) : []
    
    return (
        <div className="task-summary mb20">
            <div className="row inner-height">
                <div className="col s12 valign-wrapper horizontal-center total" id="totalCount">
                    Total: {todos.length}
                </div>
                <div className="col s12 valign-wrapper horizontal-center" id="completedCount">
                    Completed : {todo.length}
                </div>
            </div>
        </div>
    )
}

export default TaskSummary;


