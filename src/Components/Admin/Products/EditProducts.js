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
          label: 'Event date',
          name: 'date_input',
          type: 'date',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      local: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a loca',
          name: 'select_loca',
          type: 'select',
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: false,
      },
      resultLocal: {
        element: 'input',
        value: '',
        config: {
          label: 'Result local',
          name: 'result_locl_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: false,
      },
      away: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a loca',
          name: 'select_loca',
          type: 'select',
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: false,
      },
      resultAway: {
        element: 'input',
        value: '',
        config: {
          label: 'Result local',
          name: 'result_locl_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: false,
      },
      referee: {
        element: 'input',
        value: '',
        config: {
          label: 'Referee',
          name: 'referee_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      stadium: {
        element: 'input',
        value: '',
        config: {
          label: 'stadium',
          name: 'stadium_input',
          type: 'text',
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      result: {
        element: 'select',
        value: '',
        config: {
          label: 'result',
          name: 'select_result',
          type: 'select',
          options: [
            { key: 'XXXL', value: 'XXXL' },
            { key: 'XXL', value: 'XXL' },
            { key: 'XL', value: 'XL' },
            { key: 'L', value: 'L' },
            { key: 'M', value: 'M' },
            { key: 'S', value: 'S' },
            { key: 'XS', value: 'XS' },
            { key: 'XXS', value: 'XXS' },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
      final: {
        element: 'select',
        value: '',
        config: {
          label: 'Game played ?',
          name: 'select_played',
          type: 'select',
          options: [{ key: 'YES', value: 'YES' }, { key: 'NO', value: 'NO' }],
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showlabel: true,
      },
    },
  };

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <FormField
                id={'date'}
                formdata={this.state.formdata.date}
                change={element => this.updateForm(element)}
              />

              <div className="select_team_layout">
                <div className="label_inputs">Local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={'local'}
                      formdata={this.state.formdata.local}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={'resultLocal'}
                      formdata={this.state.formdata.resultLocal}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>

              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={'away'}
                      formdata={this.state.formdata.away}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={'resultAway'}
                      formdata={this.state.formdata.resultAway}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>

              <div className="split_fields">
                <FormField
                  id={'referee'}
                  formdata={this.state.formdata.referee}
                  change={element => this.updateForm(element)}
                />

                <FormField
                  id={'stadium'}
                  formdata={this.state.formdata.stadium}
                  change={element => this.updateForm(element)}
                />
              </div>

              <div className="split_fields last">
                <FormField
                  id={'result'}
                  formdata={this.state.formdata.result}
                  change={element => this.updateForm(element)}
                />

                <FormField
                  id={'final'}
                  formdata={this.state.formdata.final}
                  change={element => this.updateForm(element)}
                />
              </div>

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

export default EditProducts;
