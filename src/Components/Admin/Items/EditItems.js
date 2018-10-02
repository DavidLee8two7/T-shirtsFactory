import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../Utils/FormFields';
import { validate } from '../../Utils/Misc';

import Fileuploader from '../../Utils/Fileuploader';
import { firebaseItems, firebaseDB, firebase } from '../../../firebase';

class EditItems extends Component {
  state = {
    itemId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    defaultImg: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Brand',
          name: 'Brand_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          label: 'Item name',
          name: 'item_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      number: {
        element: 'input',
        value: '',
        config: {
          label: 'Price',
          name: 'Price_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      position: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a item',
          name: 'select_item',
          type: 'select',
          options: [
            { key: 'Shirts', value: 'Shirts' },
            { key: 'Pants', value: 'Pants' },
            { key: 'Shoes', value: 'Shoes' },
            { key: 'Accessory', value: 'Accessory' },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true,
        },
        valid: true,
      },
    },
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;

    if (!itemId) {
      this.setState({
        formType: 'Add Item',
      });
    } else {
      ///
    }
  }

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

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      /// submit form
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  resetImage = () => {};

  storeFileName = () => {};

  render() {
    return (
      <AdminLayout>
        <div className="editItems_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <Fileuploader
                dir="items"
                tag={'item image'}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formdata.image.value}
                resetImage={() => this.resetImage()}
                fileName={fileName => this.storeFileName(fileName)}
              />

              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'lastname'}
                formdata={this.state.formdata.lastname}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'number'}
                formdata={this.state.formdata.number}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'position'}
                formdata={this.state.formdata.position}
                change={element => this.updateForm(element)}
              />

              <div className="success_label"> {this.state.formSuccess} </div>
              {this.state.formError ? (
                <div className="error_label">something is wrong</div>
              ) : (
                ''
              )}

              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default EditItems;
