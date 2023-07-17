import { Controller } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import Input from "@mui/material/Input"

const InputField = ({ labelValue, inputName, control, errors }) => {
  return(
    <div className="Spaces">
      <label>{labelValue}</label>
      <Controller
        name={inputName}
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <ErrorMessage
        errors={errors}
        name={inputName}
        render={({ message }) => <p className="Errors">{message}</p>}
      />
    </div>
  )
}

export default InputField;