import React, { Component } from 'react';
import axios from 'axios';
import { DatePicker } from "antd";
import moment from 'moment';
import { NotificationManager } from 'react-notifications';

export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserMail = this.onChangeUserMail.bind(this);
        this.onChangeUserAdresse = this.onChangeUserAdresse.bind(this);
        this.onChangeUserComments = this.onChangeUserComments.bind(this);
        this.onChangeUserDate = this.onChangeUserDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            address: '',
            comment: '',
            date: new Date().toLocaleDateString(),
        }
    }

    onChangeUserLastName(e) {
        this.setState({ lastName: e.target.value })
    }
    onChangeUserFirstName(e) {
        this.setState({ firstName: e.target.value })
    }
    onChangeUserMail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserAdresse(e) {
        this.setState({ address: e.target.value })
    }
    onChangeUserComments(e) {
        this.setState({ comment: e.target.value })
    }

    onChangeUserDate(date) {
        this.setState({ date: date })
    }

    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            address: this.state.address,
            comment: this.state.comment,
            date: this.state.date,
        };

        axios
            .post('http://localhost:4000/contacts/create', userObject)
            .then((res) => {
                NotificationManager.success('Succès, Message envoyé', 'Successful!', 2000);
            }).catch((error) => {
                NotificationManager.error('Erreur, message non envoyé', 'Error!', 500);
            });

    }


    render() {
        return (
            <div className="wrapper" style={{ textAlign: 'center' }}>
                <form onSubmit={this.onSubmit} style={{ padding: '1em', border: '7px solid blue', marginTop: '100px', marginLeft: '500px', width: '500px', height: '500px' }}>
                    <div style={{ paddingTop: '100px' }}>
                        <h3> Commentaires </h3>
                        <div className="form-group">
                            <span style={{ display: 'block', overflow: 'hidden', padding: '5px 4px 3px 6px' }}>
                                <input type="text" value={this.state.lastName} onChange={this.onChangeUserLastName} placeholder={"Nom"} className="form-control" style={{ width: '300px' }}  />
                            </span>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" value={this.state.firstName} onChange={this.onChangeUserFirstName} placeholder={"Prénom"} className="form-control" style={{ width: '300px' }}  />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" value={this.state.email} onChange={this.onChangeUserMail} placeholder={"Email"} className="form-control" style={{ width: '300px' }}  />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" value={this.state.address} onChange={this.onChangeUserAdresse} placeholder={"Adresse"} className="form-control" style={{ width: '300px' }}  />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" value={this.state.comment} onChange={this.onChangeUserComments} placeholder={"Commentaires"} className="form-control" style={{ width: '300px' }}  />
                        </div>
                        <br></br>
                        <div className="form-group" hidden>
                            <DatePicker
                                style={{ width: '300px' }}
                                defaultValue={moment}
                                selected={this.state.date}
                                onChange={this.onChangeUserDate}
                                format="YYYY-MM-DD"
                                placeholder="Date"
                            />
                        </div>
                        <div>
                            <input type="submit" value="Send" className="btn btn-success btn-block" style={{ width: '100px' }} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


