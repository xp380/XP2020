import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                    {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.comment}
                </td>
                <td>
                    {this.props.obj.rating}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
            </tr>
        );
    }
}

export default DataTable;