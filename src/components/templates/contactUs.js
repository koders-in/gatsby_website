import React from "react";
import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';
import { FormContainerStyle, TextArea, Button } from './contactUs.style';

class ContactUsContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        fname: null,
        lname: null,
        email:null,
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

onSubmit(e) {
    e.preventDefault();
    let fname = this.state.fname;
    let lname = this.state.lname;
    let email = this.state.email;
    let contact = this.state.contact;
    let subject = this.state.subject;
    let message = this.state.message;
    console.log(fname,lname,email,contact,subject,message);
   // var mailto_link = 'mailto:' + 'koders@outlook.in'+'?subject='+subject+'?body='+message
    //window.open(mailto_link, 'emailWindow')
    // etc
}
  render(){
  return ( <>
    <DefaultTemplate
      title={ HEADER.CONTACTUS }
      quote={ HEADER.QUOTE } >
      <FormContainerStyle className="col-md-8">
        <form id="contactform" onSubmit={this.onSubmit.bind(this)}>
          <div className="row form-group">
            <div className="col-md-6 mb-3 mb-md-0">
              <label htmlFor="first-name" className="text-white" for="fname">First Name</label>
              <input aria-label="fname" type="text" id="fname" name="fname" onChange={this.onChange.bind(this)}  className="form-control" />
            </div>
            <div className="col-md-6">
              <label htmlFor="last-name" className="text-white" for="lname">Last Name</label>
              <input aria-label="lname" type="text" id="lname" name="lname" onChange={this.onChange.bind(this)} className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="email" className="text-white" for="email">Email</label>
              <input aria-label="email" type="email" id="email" name="email" onChange={this.onChange.bind(this)}  className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="contact" className="text-white" for="contact">Contact</label>
              <input aria-label="contact" type="number" id="contact" name="contact" onChange={this.onChange.bind(this)}  className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="subject" className="text-white" for="subject">Subject</label>
              <input aria-label="subject" type="subject" id="subject" name="subject" onChange={this.onChange.bind(this)} className="form-control" />
            </div>
          </div>
          <div className="row form-group mb-5">
            <div className="col-md-12">
              <label htmlFor="message" className="text-white" for="message">Message</label>
              <TextArea name="message" id="message" cols="30" rows="7" onChange={this.onChange.bind(this)}  className="form-control" placeholder="Write your notes or questions here..."></TextArea>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <Button>Send Message</Button>
            </div>
          </div>
        </form>
      </FormContainerStyle>
    </DefaultTemplate>
  </>
  );
  }
};


export default ContactUsContainer;

