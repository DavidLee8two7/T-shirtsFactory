import React, { Component } from 'react';
import FormFields from '../../Utils/FormFields';
import { validate } from '../../Utils/Misc';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SvgIcon from './SVGIcons';
import { firebasePromotions } from '../../../firebase';

class EmailRegister extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Please enter your email here!',
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: '',
      },
    },
  };

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validateElement = validate(newElement);
    newElement.valid = validateElement[0];
    newElement.validationMessage = validateElement[1];

    newFormdata[element.id] = newElement;

    this.setState({ formError: false, formdata: newFormdata });
  }

  resetFormSuccess(type) {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = '';
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = '';

      this.setState({
        formError: false,
        formdata: newFormdata,
        formSuccess: type ? 'Congratulations' : 'Already on the database',
      });
    }
    this.successMessage();
  }

  successMessage() {
    setTimeout(() => {
      this.setState({
        formSuccess: '',
      });
    }, 2000);
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebasePromotions
        .orderByChild('email')
        .equalTo(dataToSubmit.email)
        .once('value')
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  render() {
    const EnrollButton = styled.button`
      width: 100%;
      height: 3rem;
      background: var(--color-primary-light);
      color: var(--color-primary-dark);
      border: 0.1rem solid var(--color-primary-dark);
      padding: 0.5rem 1rem;
      margin-top: 1rem;
      margin-left: 0;
      font-size: 1.5rem;
      font-weight: 600;
      border-radius: 0.3rem;
      text-transform: uppercase;
      box-shadow: var(--shadow-dark);
    `;

    return (
      <Fade>
        <div className="email" style={{ textAlign: 'center' }}>
          <form onSubmit={event => this.submitForm(event)}>
            <div className="email_input">
              <FormFields
                id={'email'}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div
                  style={{
                    color: 'var(--color-secondary)',
                    fontWeight: '600',
                    fontSize: '1.5rem',
                  }}
                >
                  Please enter correct email address 😊
                </div>
              ) : null}
              <div>{this.state.formSuccess}</div>
              <EnrollButton onClick={event => this.submitForm(event)}>
                Subscribe
              </EnrollButton>
              <div>
                <a
                  href="https://www.yelp.com/biz/t-shirts-factory-santa-ana-4?osq=t+shirt+factory"
                  className="email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon
                    name={'yelp'}
                    style={{
                      marginTop: '2.5rem',
                      width: '4rem',
                      height: '4rem',
                      fill: '#d32323',
                    }}
                  />
                  <span
                    style={{
                      zIndex: '1',
                      textAlign: 'left',
                      fontSize: '3rem',
                      fontWeight: '400',
                      textShadow: 'var(--shadow-light)',
                      borderBottom: '0.1rem solid var(--color-primary-dark)',
                      textTransform: 'uppercase',
                    }}
                  >
                    &nbsp;find us on yelp
                  </span>
                </a>
                <p style={{ marginTop: '4rem', fontSize: '2rem' }}>
                  &copy; {new Date().getFullYear()}
                  &nbsp; T - Shirts Factory, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default EmailRegister;
