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
        valid: false,
      },
    },
  };

  updateFields = (item, itemId, formType, defaultImg) => {
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = item[key];
      newFormdata[key].valid = true;
    }

    this.setState({
      itemId,
      defaultImg,
      formType,
      formdata: newFormdata,
    });
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;

    if (!itemId) {
      this.setState({
        formType: 'Add item',
      });
    } else {
      firebaseDB
        .ref(`players/${itemId}`)
        .once('value')
        .then(snapshot => {
          const itemData = snapshot.val();

          firebase
            .storage()
            .ref('items')
            .child(itemData.image)
            .getDownloadURL()
            .then(url => {
              this.updateFields(itemData, itemId, 'Edit item', url);
            });
        });
    }
  }

  updateForm(element, content = '') {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    if (content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    let validateElement = validate(newElement);
    newElement.valid = validateElement[0];
    newElement.validationMessage = validateElement[1];

    newFormdata[element.id] = newElement;

    this.setState({ formError: false, formdata: newFormdata });
  }

  successForm = message => {
    this.setState({
      formSuccess: message,
    });
    setTimeout(() => {
      this.setState({
        formSuccess: '',
      });
    }, 2000);
  };

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(firebaseItems);

      if (this.state.formType === 'Edit item') {
        firebaseDB
          .ref(`players/${this.state.itemId}`)
          .update(dataToSubmit)
          .then(() => {
            this.successForm('Update correctly');
          })
          .catch(error => {
            this.setState({ formError: true });
          });
      } else {
        firebaseItems
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_items');
          })
          .catch(error => {
            this.setState({
              formError: true,
            });
          });
      }
    } else {
      this.setState({
        formError: true,
      });
    }
  }

  resetImage = () => {
    const newFormdata = { ...this.state.formdata };
    newFormdata['image'].value = '';
    newFormdata['image'].valid = false;

    this.setState({
      defaultImg: '',
      formdata: newFormdata,
    });
  };

  storeFilename = filename => {
    this.updateForm({ id: 'image' }, filename);
  };

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
                filename={filename => this.storeFilename(filename)}
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
