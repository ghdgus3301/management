import React from 'react';

class Customer extends React.Component{
    render(){
        return(
            <div>
                프로필사진
                <CustomerProfile id = {this.props.id} name = {this.props.name} image = {this.props.image}></CustomerProfile>
                <CustomerInfo birthday = {this.props.birthday} gender = {this.props.gender} job = {this.props.job}></CustomerInfo>
                <hr></hr>
            </div>
        );
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt = "profile"></img>
                <h2>이름 : {this.props.name} , 아이디 : {this.props.id}</h2>
            </div>
        );
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>생일 : {this.props.birthday}</p>
                <p>성별 : {this.props.gender}</p>
                <p>직업 : {this.props.job}</p>
            </div>
        );
    }
}

export default Customer;
