import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions'
import {Glyphicon } from 'react-bootstrap';
import moment from 'moment';
import '../style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        // debugger;
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text }</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
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
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => {this.setState({dueDate: event.target.value})}}
                            />
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={()=>this.addReminder()}>
                            Add Reminder
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={()=>this.props.clearReminders()}>
                            Clear Reminders
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
 
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders})(App);
