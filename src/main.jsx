import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

import TextInput from './components/TextInput/TextInput';
import SubmitButton from './components/Button/Button'
import OutputBox from './components/OutputBox/OutputBox';

const serverUrl ='https://api.genderize.io';





class FormComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:"",gender:"",output:"",isValid:"true"}
  }
 setOutput = () => {
  this.setState((state) => {
    return {output: `${state.name} - ${state.gender}`}
  })
 }

 validate = () => {
  this.setState((state) => {
    return {isValid:state.name.length > 2 && state.gender !== null}
  })
 }
  changeHandler =(e) => {
    console.log(this.state)
    this.setState({name:e.target.value})
    
  }
  submitHandler = (e) => {
    const urlGender = `${serverUrl}?name=${this.state.name}`;
    e.preventDefault();
    console.log(this.state)

    fetch(urlGender)
    .then(response => response.json())
    .then((data) => {
      this.setState({gender:data.gender})
      this.validate()
      this.setOutput()
    })
   
  }



  
  render() {
    return (
      <form  className="main-form" onSubmit={this.submitHandler}>
        <TextInput handler={this.changeHandler}/>
        <SubmitButton/>
        <OutputBox text={this.state.output} isValid={this.state.isValid}/>
      </form>

     )
  }


}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FormComponent/>
  
  </React.StrictMode>
)
