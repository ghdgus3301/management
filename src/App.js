import logo from './logo.svg';
import './App.css';
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



const customers = [
  {id : "ghdgus3301",
   image : 'https://placeimg.com/128/128/any',
   name :  '고홍현',
   birthday : '971225',
   gender : '남자',
   job : '대학생'
},
{id : "ghdgus1231",
   image : 'https://placeimg.com/128/128/any',
   name :  '홍길동',
   birthday : '901225',
   gender : '남자',
   job : '군인'
},
{id : "ghdgus4124",
   image : 'https://placeimg.com/128/128/any',
   name :  '김지현',
   birthday : '911225',
   gender : '여자',
   job : '회사원'
}
]
  

class App extends React.Component {
  render(){
    const {classes} = this.props;
    return(
      <Paper className = "App">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>프로필사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          customers.map(c =>{
            return (
              <Customer 
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job} >
              </Customer>
            );
          })
        }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(withStyles)(App);
