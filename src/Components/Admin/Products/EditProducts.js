import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';

import FormField from '../../Utils/FormFields';
import { validate } from '../../Utils/Misc';

class EditProducts extends Component {
  state = {
    matchId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    teams: [],
    formdata: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Date',
          name: 'date_input',
          type: 'date',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true,
      },
      products: {
        element: 'select',
        value: '',
        config: {
          label: 'Select',
          name: 'Select_item',
          type: 'select',
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true,
      },
    },
  };

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)} />
            <FormField
              id={'date'}
              formdata={this.state.formdata.date}
              change={element => this.updateForm(element)}
            />
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default EditProducts;
