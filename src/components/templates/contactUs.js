import React from "react";

import { HEADER } from '../constants/header';
import DefaultTemplate from '../organism/defaultTemplate';

import { LaptopMacIcon, DomainIcon, PagesIcon } from '../constants/styledIcons';
import { Header4, Paragraph, } from '../atoms/header';
import { FormContainerStyle, InputBox, TextArea, Button } from './contactUs.style';

import Cards from '../organism/cards';


const ContactUsContainer = () => {
  return ( <>
    <DefaultTemplate
      title={ HEADER.CONTACTUS }
      quote={ HEADER.QUOTE } >
      <FormContainerStyle className="col-md-8">
        <form action="#">
          <div className="row form-group">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="text-white" for="fname">First Name</label>
              <InputBox type="text" id="fname" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="text-white" for="lname">Last Name</label>
              <InputBox type="text" id="lname" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-white" for="email">Email</label>
              <InputBox type="email" id="email" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-white" for="subject">Subject</label>
              <InputBox type="subject" id="subject" className="form-control" />
            </div>
          </div>
          <div className="row form-group mb-5">
            <div className="col-md-12">
              <label className="text-white" for="message">Message</label>
              <TextArea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></TextArea>
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
};

export default ContactUsContainer;

