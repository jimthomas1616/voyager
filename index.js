// const libVoyager = require('voyager');
setInterval(() => {
  const data = {
    "values": [
      {"fieldA": "A", "fieldB": 28}, {"fieldA": "B", "fieldB": 55}, {"fieldA": "C", "fieldB": 43},
      {"fieldA": "D", "fieldB": 91}, {"fieldA": "E", "fieldB": 81}, {"fieldA": "F", "fieldB": 53},
      {"fieldA": "G", "fieldB": 19}, {"fieldA": "H", "fieldB": 87}, {"fieldA": "I", "fieldB": 52}
    ]
  };
  const container = document.getElementById("test");
  new Voyager(container, undefined, data);
  // const voyagerInstance = libVoyager.CreateVoyager(container, undefined, data);
  console.log(2);
}, 5000);