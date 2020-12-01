var readlineSync = require("readline-sync");
//Exercise
var userName = readlineSync.question("What is your name ?");
console.log("Welcome " + userName + ' to Do you know Pratim?');

 var score = 0 ;


function play(questions,answers){
  var useranswers = readlineSync.question(questions);
// //exercise to check the answer
  if(useranswers === answers){
    console.log("Right");
    score++;
  }else{
    console.log("Wrong");
    score--;
  }

  console.log('Current Score: ', score);
  console.log('-------');
}

var myquestions =[{
  questions:"Where Does Pratim live?",
  answers : "mumbai"
},
{
 questions: "Which food does Pratim likes the most?",
  answers : "burger"
},
{
 questions: "Which phone does Pratim have?",
  answers : "samsung"
},
{
 questions: "Does he know to play any instrument ?",
  answers : "yes"
},
];
var highestScores= [

]

for(var i =0; i<myquestions.length;i++){
  var question= myquestions[i];
  play(question.questions,question.answers);
}
console.log('Yay you scored', score);
console.log("--------")

console.log("EXERCISES")
//Exercise for adding two numbers
function add(a,b){
  return a+b;
}
console.log(add(2,3));

//execise print name five times
const name=()=>{
  var namee ="pratim";
  for(let i =0 ;i <5 ;i++){
    console.log(namee);
  }
}
name()
console.log("-----------")

///superhero exercise 
var superman={
  name:"superman",
  power:10000,
  dress: 'red',
  intelligence :0,
  vehicle:"can fly "
}
var batman={
  name:"batman",
  power:10,
  dress: 'black',
  intelligence: 1000,
  vehicle:'batmobile'
}

var superHeroes = [ superman,batman];
for(var i =0; i <superHeroes.length ;i++){
  var currentHero = superHeroes[i];
  console.log(currentHero.name)
  console.log(currentHero.power)
  console.log('-------------')
}






