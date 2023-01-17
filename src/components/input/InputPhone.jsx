import PhoneInput from 'react-phone-number-input'
const InputPhone = (props) => {
  const { name, uploadValues, label, labelColor = '#000' } = props

  return (
    <div className="form-control">
      <label style={{ color: labelColor }}>{label}</label>
      <PhoneInput
        placeholder="Ingresa tu numero"
        // value={phone}
        onChange={(value) =>
          uploadValues((a) => ({
            ...a,
            [name]: value,
          }))
        }
      />
    </div>
  )
}

export default InputPhone
