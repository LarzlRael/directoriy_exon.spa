import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../store/store'
import { SnackbarSuccess, SnackbarError } from './index'
import { openSnackbar } from '../../store/slices/slices'
function Snackbar() {
  const {
    snackbarReducer: { open, message, kind },
  } = useSelector((state: RootState) => state.global)
  if (open) {
    setTimeout(function () {
      store.dispatch(
        openSnackbar({
          open: false,
          message: '',
          kind: true,
        }),
      )
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
