function getSelectors (path) {
  return path.reverse().filter(item => item !== 'document' && item !== 'window').map(element => {
    let selector = ''
    if (element.id) {
      selector = `${element.nodeName.toLowerCase()}#${element.id}`
    } else if (element.className && typeof element.className === 'string') {
      selector = `${element.nodeName.toLowerCase()}.${element.className}`
    } else {
      selector = element.nodeName.toLowerCase()
    }
    return selector
  }).join('>')
}

export default function (path) {
  if (Array.isArray(path)) {
    return getSelectors(path)
  } else {
    if (path.id) {
      return `${path.nodeName.toLowerCase()}#${path.id}`
    } else if (path.className && typeof path.className === 'string') {
      return `${path.nodeName.toLowerCase()}.${path.className}`
    } else {
      return path.nodeName.toLowerCase()
    }
  }
}