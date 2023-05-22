function inicializar() {
  console.log(`Onload se ha llamado`);
  const divContainer = document.getElementById("container");
  divContainer.innerHTML = "<p>Div modificado</p>";
  //recorrer(users, soloName);

  const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];

  // function recorrer(array, names) {
  //   for (const item of array) {
  //     names(item);
  //   }
  // }

  // function soloName(item) {
  //   let { name, age } = item;
  //   console.log(name, age);
  // }

  const result = [];
  for (const item of users) {
    divContainer.innerHTML += `<li>El nombre es ${item.name}</li>`;
  }

  console.log(result);
}
