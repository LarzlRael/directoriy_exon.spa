const SnackbarSuccess = ({ message }: any) => {
  return (
    <div
      className="snackText"
      style={{ background: 'var(--green)', color: 'var(--white)' }}
    >
      <i className="fas fa-check-circle"></i>
      {message}
    </div>
  )
}

export default SnackbarSuccess
