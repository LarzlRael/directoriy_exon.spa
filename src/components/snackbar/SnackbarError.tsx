const SnackbarError = ({ message }: any) => {
  return (
    <div
      className="snackText"
      style={{ background: '#c93f3f', color: 'var(--white)' }}
    >
      <i className="fas fa-times-circle"></i>
      {message}
    </div>
  )
}

export default SnackbarError
