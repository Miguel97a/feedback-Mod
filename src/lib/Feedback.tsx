import React, { Fragment, useState, useEffect, useRef } from "react";
import {  Form, Button, Col  } from "react-bootstrap";
import { useFeedbackForm } from './useFeedbackForm';
import { makeAndHandleFeedbackPost } from './serviceCalls'
import { FeedbackForm } from './types/feedback'

  function Feedback(props: {
    mailFrom : string,
    mailTo : string,
    subject: string,
    key: string,
    buttonColor: string,
    fontColor: string,
    sectionColor: string,
    subsectionColor: string,
    titleColor: string
  }) {

  const [ state, setState ] = useState({email:'', text:''});
  const [ file, setFile ] = useState();

  const onFileChange = (e : any) => {
    if(e.currentTarget.files){ 
      setFile( e.currentTarget.files[0]);
    }
    
  }

const onSubmit = async () => {
    const results = await makeAndHandleFeedbackPost (
      props.mailFrom,
      props.mailTo, 
      props.subject,
      feedback.email,
      feedback.text,
      props.key,
      file
    )
    console.log(results)
    setFile(undefined)
    resetState(state)

}

const { handleSubmit, handleChange,resetState, data: feedback, errors } = useFeedbackForm<FeedbackForm>(
  
  {

  initialValues: state,
  validations: {
    email: {
      patternOptional: {
        value: "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?!-)(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
        message:
          "Please write a valid email",
      },
    },
    text: {
      custom: {
        isValid: (value) => value.length > 1,
        message:
          "A message is needed for your feedback",
      },
    },

  },
  onSubmit: onSubmit,
});
  return (
    <Fragment>
            
            <div className="title-wrapper" style={{  color: "#ffffff",fontSize: 30,marginTop: 16,textAlign: "center",marginBottom: 16}}>
              <span style={{color:props.titleColor}}>Give Us Your Feedback!</span>
            </div>
            <div style={{ backgroundColor:props.sectionColor, padding:10}}>
            <Form > 
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label style={{ color:props.fontColor}}>Email address</Form.Label>
                <Form.Control type="email" value={feedback.email } style={{backgroundColor: props.subsectionColor,  border:0, color: props.fontColor, borderRadius:0}} onChange={handleChange('email')}/>
                {errors.email && <p className="text-muted">{errors.email}</p>}

              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color:props.fontColor}}>Let us know what you like or if you are having a problem. Your feedback is appreciated and helps us improve the experience.</Form.Label>
                <Form.Control as="textarea" value={feedback.text} rows={6} style={{backgroundColor: props.subsectionColor, color: props.fontColor,  border:0, borderRadius:0}} onChange={handleChange('text')}/>
                {errors.text && <p className="text-muted">{errors.text}</p>}
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-5" >
              <Form.Label style={{ color:props.fontColor}}>Send an image</Form.Label>
                <Form.Control type="file" accept=".png,.jpeg,.jpg" onChange={onFileChange} style={{width:"auto"}}/>
              </Form.Group>
              <Button variant="primary" className='mt-5'  style={{backgroundColor: props.buttonColor, width:'100%', border:0, borderRadius:0}} onClick={handleSubmit} >
                Submit
              </Button>
            </Form>
            </div>
    </Fragment>
  );
}

export default Feedback;