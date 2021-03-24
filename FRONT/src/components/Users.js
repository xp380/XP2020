import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
import { BackTop } from 'antd'

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/contacts')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Id</td>
                                <td>LastName</td>
                                <td>FirstName</td>
                                <td>Mail</td>
                                <td>Adresse</td>
                                <td>Commentaire</td>
                                <td>Avis</td>
                                <td>DATE</td>

                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                            <BackTop />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

