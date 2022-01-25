import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Table } from '@material-ui/core';

class Boards extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.content}</TableCell>
                <TableCell>{this.props.view}</TableCell>
            </TableRow>    
        );
    }
}

export default Boards; 