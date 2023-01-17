const TextError = (props:any) => {
  return <div className="error">{props.children && props.children + '*'}</div>
}

export default TextError
