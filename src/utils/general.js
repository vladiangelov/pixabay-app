export const getFaIcons = (iconName) => {
  switch (iconName) {
    case "photo":
      return `fas fa-file-image`
    case "illustration":
      return `far fa-file-image`
    case "film":
      return `fas fa-file-video`
    default:
      return `far fa-file`
  }
}

export const getImageDate = (userImageURL) => {
  if (userImageURL) {
    const splitUrl = userImageURL.split(`/`)
    return `${splitUrl[6]}/${splitUrl[5]}/${splitUrl[4]}`
  }
  return `n/a`
}
