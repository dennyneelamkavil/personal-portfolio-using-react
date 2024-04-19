import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css";


function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {

    let valid = true;

    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }

    if (!contactFormData.fullname.trim()) {
      newErrors.fullname = 'Fullname is required';
      valid = false;
    }else if(contactFormData.fullname.length < 3){
      newErrors.fullname = "Fullname should contain minimum 3 characters";
      valid = false;
    }

    if (!contactFormData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }else if(!/\S+@\S+\.\S+/.test(contactFormData.email.trim())){
      newErrors.email = "Enter a valid email!";
      valid = false;
    }

    if (!contactFormData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }else if(!/\d{10}$/.test(contactFormData.phone.trim())){
      newErrors.phone = "Phone number must be 10 digits!";
      valid = false;
    }

    if (!contactFormData.message.trim()) {
      newErrors.message = 'Please enter a message';
      valid = false;
    }


    setErrors(newErrors);
    return valid;

  }


  const handleSubmit = (e) => {

    const isValid = validateForm();

    if (isValid) {
      console.log("Form Submitted!", contactFormData);
    }else{
      e.preventDefault();
    }

  }


  const onChangeHandler = (e) => {

    const { name, value } = e.target;

    setContactFormData({ ...contactFormData, [name]: value });

  }

  console.log("ContactFormData ==== ", contactFormData);



  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <div className='shadow bg-white p-4 m-4' onSubmit={handleSubmit}>
            <form className='form-container my-4'>
              <h2 className='contact-title'>Contact Me</h2>
              <input type="text" name='fullname' placeholder='Please enter fullname ' onChange={onChangeHandler} />
              <span className='error'>{errors?.fullname ?? ''}</span>
              <input type="email" name='email' placeholder='Please enter email ' onChange={onChangeHandler} />
              <span className='error'>{errors?.email ?? ''}</span>
              <input type="number" name='phone' placeholder='Please enter phone number ' onChange={onChangeHandler} />
              <span className='error'>{errors?.phone ?? ''}</span>
              <textarea type="text" rows={5} name='message' placeholder='Please enter message ' onChange={onChangeHandler} >
              </textarea>
              <span className='error'>{errors?.message ?? ''}</span>
              <button>Send Message</button>
            </form>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact