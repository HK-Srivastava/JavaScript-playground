function telephoneCheck(str) {
  //return /^(1[ ]*)*[\(]*\d{3}[\)]*[- ]*\d{3}[- ]*\d{4}$/.test(str);
  return /^\d{3}[- ]*\d{3}[- ]*\d{4}$/.test(str)
  || /^[\(]\d{3}[\)][- ]*\d{3}[- ]*\d{4}$/.test(str)
  || /^(1[ ]*)\d{3}[- ]*\d{3}[- ]*\d{4}$/.test(str)
  || /^(1[ ]*)[\(]\d{3}[\)][- ]*\d{3}[- ]*\d{4}$/.test(str)
}
