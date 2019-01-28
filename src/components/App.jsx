import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions'
import {Button, Glyphicon,InputGroup } from 'react-bootstrap';
import '../style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    deleteReminder(id) {
        console.log('delete ', id);
        console.log('this.props ', this.props);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">{reminder.text }</div>
                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                <Glyphicon 
                                    glyph="remove-sign" 
                                    />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <div className="title">
                    Reminder App
                </div>
                <div className="form-inline">
                    <div className="form-group reminder-form">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => {this.setState({text: event.target.value})}}
                            />
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={()=>this.addReminder()}>
                            Add Reminder
                        </button>
                    </div>
                </div>
                {this.renderReminders()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        reminders: state
    }
}
 
export default connect(mapStateToProps, { addReminder })(App);
