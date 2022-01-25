import logo from './logo.svg';
import './board.css';
import Customer from './components/Customer';
import React from 'react';

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Tab } from '@material-ui/core';
import withStyles from '@material-ui/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Boards from './components/Boards';



  const boardInfo = [
      {
          title : "안녕하세요 첫번째 글입니다",
          content : <a href = "https:www.naver.com">오늘부터 시작하는...</a>,
          view : 0
      }
  ]
    
  class Board extends React.Component {
    render(){
      const {classes} = this.props;
      return(
        <Paper className = "Board2">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제목</TableCell>
                <TableCell>내용</TableCell>
                <TableCell>조회수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
            boardInfo.map(c =>{
              return (
                <Boards
                title = {c.title}
                content = {c.content}
                view = {c.view}
                >
                </Boards>
              );
            })
          }
            </TableBody>
          </Table>
        </Paper>
      )
    }
  }
  
  export default Board;