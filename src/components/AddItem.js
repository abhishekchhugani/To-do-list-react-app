//Component to dispaly input box used to add a to do item


import uuid from 'uuid';
import React, { Component } from 'react'

class AddItem extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // function call to add a to do item
        this.props.addTodoItem({id: uuid(), content:this.state.content, complete: false});
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div className="row">
                <form className="col m12">
                    <div className="row mb0">
                        <div className="input-field input-group col s11">
                            <input id="icon_prefix" type="text" placeholder="Add Todo Item" className="validate" onChange={this.handleChange} value={this.state.content} />
                        </div>
                        <div className="input-field input-group col s1">
                            <span className="right">
                                <a className="btn btn-floating waves-effect waves-light red" onClick={this.handleSubmit}>+</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;
