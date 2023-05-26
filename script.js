const person1 = {
  fullName: "Sunil Gautam",
  jobTitle: "Network Administrator",
  socialHandle: ["Facebook", "Instagram", "Twitter", "Instagram", "YouTube", "Dribble"],
  age: 21,
  residence: "NP",
  freelance: false,
  address: "Bhaktapur, Nepal",
  languages: { Nepali: 90, English: 90, Hindi: 60 },
  skills: { HTML: 90, CSS: 85, JavaScript: 80, React: 75, Express: 85 },
  extraSkills: ["Tailwind", "SASS", "SCSS", "Python", "Flask", "GIT Knowledge"],
};

const fullNameE = window.document.getElementById("fullName");
fullNameE.innerText = person1.fullName;

const jobTitleE = window.document.getElementById("jobTitle");
jobTitleE.innerText = person1.jobTitle;

const ageE = window.document.getElementById("age");
ageE.innerText = person1.age;

const residenceE = window.document.getElementById("residence");
residenceE.innerText = person1.residence;

const freelanceE = window.document.getElementById("freelance");
freelanceE.innerText = person1.freelance ? `Available` : `Not Available`;

const addressE = window.document.getElementById("address");
addressE.innerText = person1.address;

const nepaliE = window.document.getElementById("nepali");
nepaliE.innerText = person1.languages.Nepali;
