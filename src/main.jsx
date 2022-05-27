import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

import TextInput from './components/TextInput/TextInput';
import SubmitButton from './components/Button/Button'
import OutputBox from './components/OutputBox/OutputBox';





class FormComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:"",gender:"",output:""}
  }
 setOutput = () => {
  this.setState((state) => {
    return {output: `${state.name} - ${state.gender}`}
  })
 }
  changeHandler =(e) => {
    console.log(this.state)
    this.setState({name:e.target.value})
    
  }
  submitHandler = (e) => {
    const serverGenderUrl = 'https://api.genderize.io'
    const urlGender = `${serverGenderUrl}?name=${this.state.name}`;
    e.preventDefault();
    console.log(this.state)
    if(this.state.name.length <= 2){
      alert('Name can\'t be shorter than 2 symbols')
      e.target.reset()
      return
    }
    fetch(urlGender)
    .then(response => response.json())
    .then((data) => {
      this.setState({gender:data.gender})
      this.setOutput()
      // let result = `${data.name} - ${data.gender}`
      // this.setState({output:result})
    })
   
  }
 

  
  render() {
    return (
      <form  className="main-form" onSubmit={this.submitHandler}>
        <TextInput handler={this.changeHandler}/>
        <SubmitButton/>
        <OutputBox text={this.state.output}/>
      </form>

     )
  }


}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FormComponent/>
  
  </React.StrictMode>
)
