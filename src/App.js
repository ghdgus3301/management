import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import React from 'react';


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
    return(
      <div>
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
      </div>
    )
  }
}

export default App;
