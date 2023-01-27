import React from 'react'
import './style/Snackbar.css'
import { connect, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { SnackbarSuccess, SnackbarError } from './index'
import { openSnackbar } from '../../store/slices/slices'
function Snackbar() {
  const {
    snackbarReducer: { open, message, kind },
  } = useSelector((state: RootState) => state.global)

  if (open) {
    setTimeout(function () {
      openSnackbar({
        open: false,
        message: '',
        kind: true,
      })
    }, 3000)
    if (kind) {
      return <SnackbarSuccess message={message} />
    } else {
      return <SnackbarError message={message} />
    }
  }
  return null
}
export default Snackbar
