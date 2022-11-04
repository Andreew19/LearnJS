const schools = [
  "Yorktown",
  "Washencton & Lee",
  "Wakefield"
]

const wSchool = schools.filter(school => school[0] === "W") // Use filter

document.write(wSchool)