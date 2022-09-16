var defaultPerson = {
  name : {
     first : "Andrew",
     last : "k"
  },
  favActiviti : "programming"
}

function assambleString(p = defaultPerson) {
  myString = `The ${p.name.first}. he favarit activiti is ${p.favActiviti}`
  document.write(myString)
  
}
assambleString()
