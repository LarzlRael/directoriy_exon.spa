import { useState } from 'react'
import DateView, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import 'react-datepicker/dist/react-datepicker.css'
import './style/DatePicker.css'
registerLocale('es', es)
const RangeDate = ({ label, setDateRange, dateRange }) => {
  const [startDate, endDate] = dateRange
  return (
    <div className="form-control DatePicker">
      {label && <label htmlFor="">{label}</label>}
      <DateView
    
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update)
        }}
        isClearable={true}
      />
    </div>
  )
}

export default RangeDate
