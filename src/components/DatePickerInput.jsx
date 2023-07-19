import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const DatePickerInput = ({ labelValue, inputName, control, errors }) => {

  const handleDateSelect = () => console.log('pop!');

  return (
    <div className="Spaces">
      <label>{labelValue}</label>
      <Controller
        name={inputName}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker selected={value} onChange={onChange} onSelect={handleDateSelect} />
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