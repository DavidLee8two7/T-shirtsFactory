import React from 'react';

const FormFields = ({ formdata, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case 'input':
        formTemplate = (
          <div>
            <input {...formdata.config} value={formdata.value} />
          </div>
        );
        break;
      default:
        break;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormFields;
