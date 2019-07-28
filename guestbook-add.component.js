import React, { Component } from 'react';
import axios from 'axios';



export default class GuestAdd extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            gb_fname: '',
            gb_lname: '',
            gb_msg:'',
            
        }

        this.onChangeGBFname = this.onChangeGBFname.bind(this);
        this.onChangeGBLname = this.onChangeGBLname.bind(this);
        this.onChangeGBMsg = this.onChangeGBMsg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onChangeGBFname(e) {
        this.setState({
            gb_fname: e.target.value
        });
    }

    onChangeGBLname(e) {
        this.setState({
            gb_lname: e.target.value
        });
    }

    onChangeGBMsg(e) {
        this.setState({
            gb_msg: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        console.log(`Signature Submitted:`);
        console.log(`First Name: ${this.state.gb_fname}`);
        console.log(`Last Name: ${this.state.gb_lname}`);
        console.log(`Message: ${this.state.gb_msg}`);

        const newSign = {
            gb_fname: this.state.gb_fname,
            gb_lname: this.state.gb_lname,
            gb_msg: this.state.gb_msg,
        };
        axios.post('GBAPI/Guestbook/add', newSign)
            .then(res => {
                    console.log(res.data)

            });
        
        this.setState({
            gb_fname: '',
            gb_lname: '',
            gb_msg: '',
        })

        window.location = '/GB';
    }

    render() {
        return(
          <div style={{marginTop: 20}}>
            <h3>Sign My Guestbook</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First Name: </label>
                <input type="text"
                        className="form-control"
                        value={this.state.gb_fname}
                        onChange={this.onChangeGBFname}/>
              </div>
              <div className="form-group">
                <label>Last Name: </label>
                <input type="text"
                        className="form-control"
                        value={this.state.gb_lname}
                        onChange={this.onChangeGBLname}/>
              </div>
              <div className="form-group">
                <label>Why don't you leave me a Message? </label>
                <input type="text"
                        className="form-control"
                        value={this.state.gb_msg}
                        onChange={this.onChangeGBMsg}/>
              </div>
              <div className="form-group">
                  <input type="submit" value="Submit Signature" className="btn btn-primary"/>
              </div>
            </form>
          </div>
        )
    }

}