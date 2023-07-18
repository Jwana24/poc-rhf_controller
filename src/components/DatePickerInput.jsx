import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerInput = ({ labelValue, inputName, control, errors }) => {
  registerLocale('fr', fr);
  setDefaultLocale('fr');

  const handleDateSelect = () => console.log('pop!');

  return (
    <div className="Spaces">
      <label>{labelValue}</label>
      <Controller
        name={inputName}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker locale="fr" selected={value} onChange={onChange} onSelect={handleDateSelect} />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={inputName}
        render={({ message }) => <p className="Errors">{message}</p>}
      />
    </div>
  );
};

export default DatePickerInput;