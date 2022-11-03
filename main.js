// Chenge space on dash (1

let string = "The is the midday show with Cheryl Waters";
let urlFriendly =  "";

for(i=0; i<string.length; i++) {
  if(string[i] === " ") {
    urlFriendly += "-";
  }
  else{
    urlFriendly += string[i]
  }
}

console.log(urlFriendly)

// Chenge space on dash (2

// let string = "The is the midday show with Cheryl Waters";
// let urlFriendly =  string.replace(/ /g, "-" );

// console.log(urlFriendly)