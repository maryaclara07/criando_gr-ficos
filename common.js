const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(varialvel)
}

export {getCSS}
