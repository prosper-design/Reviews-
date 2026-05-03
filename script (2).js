// ================= NAVIGATION =================
function showPage(page) {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";
}

// ================= DATA =================
const subjects = {
  physics: {
    topics: [
      {title:"Motion", content:"Motion is the change in position over time. It includes speed, velocity, and acceleration. Example: a moving car."},
      {title:"Force", content:"Force is a push or pull. It causes objects to accelerate. Measured in Newtons."},
      {title:"Energy", content:"Energy is the ability to do work. Types include kinetic and potential energy."},
      {title:"Work", content:"Work is done when force moves an object. Work = Force × Distance."},
      {title:"Power", content:"Power is the rate of doing work. Power = Work ÷ Time."},
      {title:"Pressure", content:"Pressure is force per unit area. Pressure = Force ÷ Area."},
      {title:"Heat", content:"Heat is energy transfer due to temperature difference."},
      {title:"Light", content:"Light is a form of energy that travels in waves."},
      {title:"Sound", content:"Sound is produced by vibrations and travels through a medium."},
      {title:"Electricity", content:"Electricity is the flow of electric charge."}
    ]
  },

  chemistry: {
    topics: [
      {title:"Atoms", content:"Atoms are the smallest units of matter made of protons, neutrons, and electrons."},
      {title:"Elements", content:"Elements are pure substances consisting of one type of atom."},
      {title:"Compounds", content:"Compounds are formed when elements combine chemically."},
      {title:"Mixtures", content:"Mixtures are physical combinations of substances."},
      {title:"Acids", content:"Acids produce H+ ions in solution."},
      {title:"Bases", content:"Bases produce OH- ions in solution."},
      {title:"Reactions", content:"Chemical reactions change substances into new ones."},
      {title:"pH", content:"pH measures acidity or alkalinity."},
      {title:"Periodic Table", content:"Organizes elements based on properties."},
      {title:"Bonding", content:"Chemical bonding holds atoms together."}
    ]
  },

  biology: {
    topics: [
      {title:"Cells", content:"Cells are the basic units of life."},
      {title:"Tissues", content:"Tissues are groups of similar cells."},
      {title:"Organs", content:"Organs are made of tissues."},
      {title:"Systems", content:"Organ systems perform body functions."},
      {title:"Genetics", content:"Study of inheritance and variation."},
      {title:"Photosynthesis", content:"Plants make food using sunlight."},
      {title:"Respiration", content:"Cells release energy from food."},
      {title:"Nutrition", content:"Process of obtaining food."},
      {title:"Ecology", content:"Study of organisms and environment."},
      {title:"Evolution", content:"Change in species over time."}
    ]
  }
};

// ================= LOAD SUBJECT =================
function loadSubject(name) {
  const content = document.getElementById("subjectContent");
  let data = subjects[name];

  let html = "<h3>Topics</h3>";

  data.topics.forEach((t, i) => {
    html += "<p><b>" + (i+1) + ". " + t.title + ":</b> " + t.content + "</p>";
  });

  content.innerHTML = html;

  loadExercises(name);
}

// ================= GENERATE EXERCISES =================
function loadExercises(name) {
  const area = document.getElementById("exerciseContent");

  let html = "<h3>Exercises</h3>";

  for (let i = 1; i <= 40; i++) {
    html += "<p>" + i + ". " + name + " question " + i + "</p>";
  }

  html += "<h3>Answers</h3>";

  for (let i = 1; i <= 40; i++) {
    html += "<p>" + i + ". Explanation for " + name + " question " + i + "</p>";
  }

  area.innerHTML = html;
}

// ================= QUIZ =================
let quizData = [
  { q:"2 + 2 = ?", options:["3","4","5"], answer:"4" },
  { q:"Unit of force?", options:["Newton","Joule","Watt"], answer:"Newton" },
  { q:"Basic unit of life?", options:["Cell","Atom","Organ"], answer:"Cell" },
  { q:"Water formula?", options:["H2O","CO2","O2"], answer:"H2O" },
  { q:"Speed formula?", options:["Distance/Time","Time/Distance","None"], answer:"Distance/Time" }
];

let currentQuiz = 0;

function startQuiz() {
  currentQuiz = 0;
  showPage("exercises");
  showQuiz();
}

function showQuiz() {
  let q = quizData[currentQuiz];

  let html = "<h3>Quiz</h3>";
  html += "<p>" + q.q + "</p>";

  q.options.forEach(opt => {
    html += "<button onclick=\"checkAnswer('" + opt + "')\">" + opt + "</button><br><br>";
  });

  document.getElementById("quiz").innerHTML = html;
}

function checkAnswer(selected) {
  let correct = quizData[currentQuiz].answer;

  if (selected === correct) {
    alert("Correct");
  } else {
    alert("Wrong. Correct answer is " + correct);
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    showQuiz();
  } else {
    document.getElementById("quiz").innerHTML = "<h3>Quiz Completed</h3>";
  }
}
// ================= LOAD REAL EXERCISES =================
function loadExercises(name) {
  const area = document.getElementById("exerciseContent");

  let html = "<h3>Exercises</h3>";

  let questions = [];
  let answers = [];

  if (name === "physics") {
    questions = [
      "Define motion.",
      "State Newton’s first law.",
      "What is acceleration?",
      "Define force.",
      "What is energy?",
      "Differentiate speed and velocity.",
      "State formula for work.",
      "What is power?",
      "Define pressure.",
      "What is heat?",
      "What is light?",
      "Define sound.",
      "State Ohm’s law.",
      "Define mass.",
      "What is weight?",
      "State unit of force.",
      "Define electricity.",
      "What is friction?",
      "Define momentum.",
      "State formula for velocity.",
      "Explain inertia.",
      "Define density.",
      "State Archimedes principle.",
      "What is gravity?",
      "Define wave.",
      "Explain reflection.",
      "Define refraction.",
      "What is lens?",
      "Define current.",
      "State unit of power.",
      "Define kinetic energy.",
      "Define potential energy.",
      "What is voltage?",
      "Define resistance.",
      "State unit of energy.",
      "Define magnetism.",
      "Explain conduction.",
      "Explain convection.",
      "Explain radiation.",
      "Define time."
    ];

    answers = questions.map((q, i) => (i+1) + ". Explanation: " + q);
  }

  if (name === "chemistry") {
    questions = [
      "What is an atom?",
      "Define element.",
      "Define compound.",
      "What is mixture?",
      "Define acid.",
      "Define base.",
      "What is pH?",
      "Define chemical reaction.",
      "State periodic law.",
      "Define molecule.",
      "What is ion?",
      "Define valency.",
      "Explain bonding.",
      "What is oxidation?",
      "What is reduction?",
      "Define salt.",
      "What is catalyst?",
      "Define solution.",
      "What is solvent?",
      "What is solute?",
      "Define concentration.",
      "What is gas?",
      "Define liquid.",
      "Define solid.",
      "What is boiling point?",
      "What is melting point?",
      "Define energy change.",
      "What is exothermic?",
      "What is endothermic?",
      "Define equilibrium.",
      "What is electrolysis?",
      "Define corrosion.",
      "What is rusting?",
      "Define hydrocarbon.",
      "What is organic chemistry?",
      "Define inorganic chemistry.",
      "What is polymer?",
      "Define neutralization.",
      "What is acid-base reaction?",
      "Define chemical formula."
    ];

    answers = questions.map((q, i) => (i+1) + ". Explanation: " + q);
  }

  if (name === "biology") {
    questions = [
      "What is a cell?",
      "Define tissue.",
      "Define organ.",
      "Define system.",
      "What is genetics?",
      "Define DNA.",
      "What is photosynthesis?",
      "Define respiration.",
      "What is nutrition?",
      "Define ecology.",
      "What is environment?",
      "Define organism.",
      "What is species?",
      "Define population.",
      "Define habitat.",
      "What is food chain?",
      "Define food web.",
      "What is adaptation?",
      "Define evolution.",
      "What is enzyme?",
      "Define protein.",
      "Define carbohydrate.",
      "What is fat?",
      "Define vitamin.",
      "What is mineral?",
      "Define digestion.",
      "What is circulation?",
      "Define excretion.",
      "What is reproduction?",
      "Define growth.",
      "What is development?",
      "Define nervous system.",
      "What is hormone?",
      "Define immunity.",
      "What is disease?",
      "Define bacteria.",
      "Define virus.",
      "What is fungi?",
      "Define plant cell.",
      "Define animal cell."
    ];

    answers = questions.map((q, i) => (i+1) + ". Explanation: " + q);
  }

  // DISPLAY QUESTIONS
  questions.forEach((q, i) => {
    html += "<p>" + (i+1) + ". " + q + "</p>";
  });

  html += "<h3>Answers</h3>";

  answers.forEach((a) => {
    html += "<p>" + a + "</p>";
  });

  area.innerHTML = html;
}