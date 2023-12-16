let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(item=>item.profession=="developer"?console.log(item):null);
}

// 2. Add Data
function addData() {
  let name = prompt("Enter your Name");
  let age = parseInt(prompt("Enter your Age"));
  let profession = prompt("Enter your Profession");
  data.push({
    name,
    age,
    profession,
  });
  console.log("Here is the updated data",data);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(item => item.profession !== "admin");
  console.log("Here is the updated data",data);
}

// 4. Concatenate Array
function concatenateArray() {
  let data2 = [
    { name: "Bhavika",age:24,profession:"developer"},
    { name: "Krishnasree",age:27,profession:"admin"},
  ];

  let combinedArray=data.concat(data2);
  data=combinedArray;
  console.log("Here is the concatenated Array:",data);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach(item => sum +=parseInt(item.age));
  console.log(sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  for(let i=0;i<data.length;i++){
    if(data[i].age>25){
      console.log("Person greater than 25 exists!");
      break;
    }
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionsar=[];
  data.forEach(item=>{
    if(!uniqueProfessionsar.includes(item.profession)){
      uniqueProfessionsar.push(item.profession);
    }
  })
  console.log("Unique professions:",uniqueProfessionsar);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=>a.age-b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach(item=>{
    if(item.name=="john"){
      item.profession="Manager";
    }
  })
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let devcount = data.filter(item=>item.profession=="developer").length;
  let admincount = data.filter(item=>item.profession=="admin").length;
  console.log(`Developers:${devcount} | Admins: ${admincount}`);
}
