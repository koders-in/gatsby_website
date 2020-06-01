import React from "react";
import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { FormContainerStyle, Button } from './contactUs.style';

class ContactUsContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        fname: null,
        contact:null,
        subject:null,
        message:null
    }
}

onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

sendMail() {
  var name = this.state.fname;
  var message = this.state.message;
  window.location.href = 'mailto:koders@outlook.in?subject=' + this.state.subject + '&body=' + message + "<br>" + name + "<br>" + this.state.contact;
};

onSubmit(e) {
    e.preventDefault();
   /*let fname = this.state.fname;
    let lname = this.state.lname;
    let email = this.state.email;
    let contact = this.state.contact;
    let subject = this.state.subject;
    let message = this.state.message;*/
}
  render(){
  return ( <>
  <div id="about">
    <DefaultTemplate
      title={ HEADER.CONTACTUS } isWork>
      <FormContainerStyle className="col-md-9">
        <form>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="first-name" className="text-white">Name</label>
              <input aria-label="fname" type="text" id="fname" name="Name" onChange={this.onChange.bind(this)}  className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="contact" className="text-white">Contact</label>
              <input aria-label="contact" type="number" id="contact" name="contact" onChange={this.onChange.bind(this)}  className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="subject" className="text-white">Subject</label>
              <input aria-label="subject" type="subject" id="subject" name="subject" onChange={this.onChange.bind(this)} className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="message" className="text-white">Message</label>
              <input aria-label="subject" name="message" id="message" cols="30" rows="7" onChange={this.onChange.bind(this)}  className="form-control" placeholder="Write your notes or questions here..."/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <Button type="submit" onClick={() => this.sendMail()}>Send Message</Button>
            </div>
          </div>
        </form>
      </FormContainerStyle>
    </DefaultTemplate>
    </div>
  </>
  );
  }
};


export default ContactUsContainer;

