import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Button } from 'react-bootstrap'

import './formik.css'

class InputForm extends Component{
  state = {
    heroes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/heroes`)
      .then(res => {
        const heroes = res.data;
        this.setState({ heroes });
      })
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render(){
    return(
        <div>
          <Formik
            initialValues={{ 
                fullname: '', 
                born: '',
                died : '',
                description :'',
                establishment:'',
                img: ''}}
            
          onSubmit={(values, action) => {
            axios.post(`http://localhost:4000/heroes`,values)
            action.resetForm()
          }}>

          {props => (
              <form onSubmit={props.handleSubmit}>
              <label>Full Name
              <br/>
                <input
                  type="text"
                  onChange={props.handleChange}
                  className="Form.Control"
                  value={props.values.fullname}
                  placeholder="Full Name"
                  name="fullname"
                />
              </label>
              <br/>
                
                <label>Born
                <br/>
                <input
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.born}
                  placeholder="Born"
                  name="born"
                />
                </label>
                <br/>
      
                <label>Died
                <br/>
                <input
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.died}
                  placeholder="Died"
                  name="died"
                />
                </label>
                
                <br/>
                
                <label>Description
                <br/>
                <textarea
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.description}
                  placeholder="Description"
                  className="description"
                  name="description"
                />
                </label>
                <br/>
                
                <label>Establishment
                <br/>
                <input
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.establishment}
                  placeholder="Establishment"
                  name="establishment"
                />
                </label>
                <br/>
                
                <label>Image URL
                <br/> 
                <input
                  type="url"
                  onChange={props.handleChange}
                  value={props.values.img}
                  placeholder="Image URL"
                  name="img"
                />
                </label>
                <br/>
                
                <Button variant="primary" type="submit">Submit</Button>
              
              </form>
            )}
          </Formik>
        </div>
      );
  }
}

export default InputForm