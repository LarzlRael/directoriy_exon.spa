export function processUrlImage(
  url: string,
  width: number,
  height: number = 0,
) {
  let parameter = 'c_scale,q_auto,f_auto'
  if (url) {
    
    if (width && width > 0) {
      parameter = `w_${width},` + parameter
    } else if (height && height > 0) {
      parameter = `h_${height},` + parameter
    }
    const splitUrl = url.split('/')
    console.log(splitUrl)
    let urlChange = ''
    splitUrl.forEach((e, index) => {
      if (index === 5) {
        urlChange = urlChange + e + '/' + parameter + '/'
      } else {
        if (index < splitUrl.length - 1) {
          urlChange = urlChange + e + '/'
        } else {
          urlChange = urlChange + e
        }
      }
    })
    return urlChange
  } else {
    return ''
  }
}
