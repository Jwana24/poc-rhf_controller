import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from "./components/InputField";
import DatePickerInput from "@/components/DatePickerInput.jsx";

import './App.css'

const validationSchema = yup.object({
  firstName: yup.string().required("Le prénom est requis"),
  lastName: yup.string().required("Le nom de famille est requis"),
  email: yup.string().email("L'email n'est pas valide").required("L'email est requis"),
  phone: yup.string().matches(
    /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/,
    "Le numéro de téléphone n'est pas valide"
  ).required("Le numéro de téléphone est requis"),
  birthDate: yup.date().required("La date est requise"),
});

function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthDate: "",
    },
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField labelValue="Prénom" inputName="firstName" control={control} errors={errors} />
        <InputField labelValue="Nom de famille" inputName="lastName" control={control} errors={errors} />
        <InputField labelValue="Adresse email" inputName="email" control={control} errors={errors} />
        <InputField labelValue="Numéro de téléphone" inputName="phone" control={control} errors={errors} />
        <DatePickerInput labelValue="Date de naissance" inputName="birthDate" control={control} errors={errors} />

        <button type='submit'>Envoyer</button>
      </form>
    </>
  )
}

export default App
