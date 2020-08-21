import React, { Component } from 'react';
import ApiService from '../../ApiService';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// 지금 여기는 클래스형 render()가 잇으면 클래스형
//state  변수를 저장하는 상태값
class AddUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      gender: '',
      phone: '',
      address: '',
      detail_address: '',
      provider: '',
      providerId: '',
      birthday: '',
      total_amount: '',
      role: '',
      cancel: '',
      profile: '',
      createDate: '',
      message: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      //여긴 id가없었음
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
      detail_address: this.state.detail_address,
      //provider: this.state.provider,
      //  providerId: this.state.providerId,
      birthday: this.state.birthday,
      // total_amount: this.state.total_amount,
      //  role: this.state.role,
      // cancel: this.state.cancel,
      profile: this.state.profile,
      // createDate: this.state.createDate,
    };

    ApiService.addUser(user)
      .then((res) => {
        this.setState({
          message: user.username + '님이 성공적으로 등록되었습니다.',
        });
        console.log(this.state.message);
        this.props.history.push('/users');
      })
      .catch((err) => {
        console.log('saveUser() 에러', err);
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Add User
        </Typography>
        <form style={formContainer}>
          <TextField
            type="text"
            placeholder="please input your username"
            name="username"
            fullWidth
            margin="normal"
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            type="password"
            placeholder="please input your password"
            name="password"
            fullWidth
            margin="normal"
            value={this.state.password}
            onChange={this.onChange}
          />
          <TextField
            type="email"
            placeholder="please input your email"
            name="email"
            fullWidth
            margin="normal"
            value={this.state.email}
            onChange={this.onChange}
          />
          <TextField
            type="name"
            placeholder="please input your name"
            name="name"
            fullWidth
            margin="normal"
            value={this.state.name}
            onChange={this.onChange}
          />
          <TextField
            type="gender"
            placeholder="please input your gender"
            name="gender"
            fullWidth
            margin="normal"
            value={this.state.gender}
            onChange={this.onChange}
          />
          <TextField
            type="phone"
            placeholder="please input your phone"
            name="phone"
            fullWidth
            margin="normal"
            value={this.state.phone}
            onChange={this.onChange}
          />
          <TextField
            type="address"
            placeholder="please input your address"
            name="address"
            fullWidth
            margin="normal"
            value={this.state.address}
            onChange={this.onChange}
          />
          <TextField
            type="detail_address"
            placeholder="please input your detail_address"
            name="detail_address"
            fullWidth
            margin="normal"
            value={this.state.detail_address}
            onChange={this.onChange}
          />

          <TextField
            type="birthday"
            placeholder="please input your birthday"
            name="birthday"
            fullWidth
            margin="normal"
            value={this.state.birthday}
            onChange={this.onChange}
          />
          {/*    
                <TextField
            type="provider"
            placeholder="please input your provider"
            name="provider"
            fullWidth
            margin="normal"
            value={this.state.provider}
            onChange={this.onChange}
          />
          <TextField
            type="providerId"
            placeholder="please input your providerId"
            name="providerId"
            fullWidth
            margin="normal"
            value={this.state.providerId}
            onChange={this.onChange}
          />
      
      <TextField
          <TextField
            type="total_amount"
            placeholder="please input your total_amount"
            name="total_amount"
            fullWidth
            margin="normal"
            value={this.state.total_amount}
            onChange={this.onChange}
          />
            type="role"
            placeholder="please input your role"
            name="role"
            fullWidth
            margin="normal"
            value={this.state.role}
            onChange={this.onChange}
          />
          <TextField
            type="cancel"
            placeholder="please input your cancel"
            name="cancel"
            fullWidth
            margin="normal"
            value={this.state.cancel}
            onChange={this.onChange}
          />
          
          <TextField
            type="profile"
            placeholder="please input your profile"
            name="profile"
            fullWidth
            margin="normal"
            value={this.state.profile}
            onChange={this.onChange}
          />
          <TextField
            type="createDate"
            placeholder="please input your createDate"
            name="createDate"
            fullWidth
            margin="normal"
            value={this.state.createDate}
            onChange={this.onChange}
          />
          */}
          {/*
          <TextField
            //원랜 퍼스트네임
            placeholder="please input your first name"
            name="firstName"
            fullWidth
            margin="normal"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <TextField
            placeholder="please input your last name"
            name="lastName"
            fullWidth
            margin="normal"
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <TextField
            type="number"
            placeholder="please input your age"
            name="age"
            fullWidth
            margin="normal"
            value={this.state.age}
            onChange={this.onChange}
          />
          <TextField
            type="number"
            placeholder="please input your salary"
            name="salary"
            fullWidth
            margin="normal"
            value={this.state.salary}
            onChange={this.onChange}
          />
          */}
          <Button variant="contained" color="primary" onClick={this.saveUser}>
            Save
          </Button>
        </form>
      </div>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap',
};

const style = {
  display: 'flex',
  justifyContent: 'center',
};

export default AddUserComponent;
