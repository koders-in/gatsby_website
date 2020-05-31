import React, { Component } from 'react';
import { Card, CardContent, CardActionArea} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import './testimonial.css';
import DefaultTemplate from '../organism/defaultTemplate';
import { HEADER } from '../constants/header';

function TestimonialCard(props) {
    if(props.isCenter) {
        return (
            
             <div style={{display: 'block', width:'100%'}}>
                <Card style={{backgroundColor:'#0C61A5', marginBottom:'50px', paddingBottom: '50px'}}>
                    <CardActionArea>
                        <CardContent>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"40px", marginLeft:"40%",marginBottom:"20px"}}/>
                            <br />
                            <div style={{textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif", color:'#000000'}}>
                                <p><i>"I am proud to be a part of a zealous team who always astonishes me with great results. I received exactly what we had planned together."</i></p>
                                <h6><b>Jai Agrawal(Managing Director,JaiG)</b></h6>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
    if(props.isLeft) {
        return (
            <div style={{display: 'block',width:'100%'}}>
                <Card style={{marginTop:'50px', paddingBottom: '50px'}}>
                    <CardActionArea>
                        <CardContent>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"40px", marginLeft:"40%",marginBottom:"20px"}}/>
                            <br />
                            <div style={{textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif"}}>
                                <p><i>"Koders’s team was fully committed to delivering good quality work on time and also provided professional advice wherever you need help."</i></p>
                                <h6><b>DIT Student</b></h6>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    } 
    else {
        return (
            <div style={{display: 'block',width:'100%'}}>
                <Card style={{marginTop:'50px', paddingBottom: '50px'}}>
                    <CardActionArea>
                        <CardContent>
                            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"40px", marginLeft:"40%",marginBottom:"20px"}}/>
                            <br />
                            <div style={{textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif"}}>
                                <p><i>"Excellent work ethic - Great communication - Great decision-making - Very Professional - Highly recommend!"</i></p>
                                <h6><b>Bradly B.</b></h6>                            
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
    
}

class TestimonialComponent extends Component {

    render() {
        return (
            <DefaultTemplate
      title={ HEADER.CUSTOMER }
      quote={ HEADER.QUOTE }
      isCustomer
    >
            <div className="testimonialSection">
                <TestimonialCard isLeft={true} />
                <TestimonialCard isCenter={true}/>
                <TestimonialCard />
            </div>
            </DefaultTemplate>
        );
    }
} 

export default TestimonialComponent;