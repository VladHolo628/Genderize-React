import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import TextInput from './components/TextInput/TextInput';
import SubmitButton from './components/Button/Button'
import OutputBox from './components/OutputBox/OutputBox';
import { validationData } from './consts';

const serverUrl ='https://api.genderize.io';





class FormComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      gender:"",
      output:"",
      isValidLength:true,
      isValidInput:true}
  }
 setOutput = () => {
  this.setState((state) => {
    return {output: `${state.name} - ${state.gender}`};
  })
 };

 validate = () => {
  this.setState((state) => {
    return {isValidLength: state.name.length > validationData.minimalNameLength};
  });

  this.setState((state) => {
    return {isValidInput: state.gender !== validationData.invalidGender};
  });
 };
  changeHandler =(e) => {
    this.setState({name:e.target.value});
    
  };

  submitHandler = (e) => {
    const urlGender = `${serverUrl}?name=${this.state.name}`;
    e.preventDefault();

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
        <TextInput handler={this.changeHandler} value={this.state.name}/>
        <SubmitButton/>
        <OutputBox text={this.state.output} isValidLength={this.state.isValidLength} isValidInput={this.state.isValidInput}/>
      </form>

     )
  }


}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FormComponent/>
  
  </React.StrictMode>
)
