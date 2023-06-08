function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const extData = JSON.parse(this.responseText);
    addElements(extData);
    addLanguages(extData);
    addSkills(extData);
    addExtraSkills(extData);
  };
  xhttp.open("GET", "info.json");
  xhttp.send();
}

loadDoc();

function addElements(extData) {
  // Name
  const fullNameE = document.getElementById("fullName");
  fullNameE.innerText = extData.fullName;

  // Title
  const titleE = document.getElementById("title");
  titleE.innerText = extData.title;

  // Social Media Images
  const socialE = document.getElementById("social");
  socialE.innerHTML = "";
  for (let x in extData.social) {
    const imgLink = extData.social[x].imageLink;
    const para = document.createElement("div");
    para.innerHTML = `<img class="w-6 h-6 rounded-[12px]" src='${imgLink}' />`;
    socialE.appendChild(para);
  }

  // Age
  const ageE = document.getElementById("age");
  ageE.innerText = extData.age;

  // Residence
  const residenceE = document.getElementById("residence");
  residenceE.innerText = extData.residence;

  // Freelance
  const freelanceE = document.getElementById("freelance");
  freelanceE.innerText = extData.freelance ? `Available` : `Not Available`;

  // Address
  const addressE = document.getElementById("address");
  addressE.innerText = extData.address;
}

function addLanguages(extData) {
  // Languages
  const languageDivE = document.getElementById("language-div");
  for (let x in extData.languages) {
    // For Language = xx%
    const para1 = document.createElement("div");
    para1.setAttribute("class", "language mb-1 flex flex-row justify-between");
    para1.innerHTML = `<p class="text-base text-klr_para">${extData.languages[x].name}</p>
          <p class="text-base text-klr_para">${extData.languages[x].skill}%</p>`;
    languageDivE.appendChild(para1);

    // For Percentage Bar
    const para2 = document.createElement("div");
    para2.setAttribute("class", "language-bar mb-2.5");
    para2.innerHTML = `
      <div class="h-[9px] w-full border-[0.5px] border-solid border-klr_yellow rounded-[5px]">
        <div class="h-[2px] border-[2px] border-solid border-klr_yellow bg-klr_yellow rounded-[2px] w-[${extData.languages[x].skill}%] m-[2px]"></div>
      </div>`;
    languageDivE.appendChild(para2);
  }
}

function addSkills(extData) {
  // Skills
  const skillsDivE = document.getElementById("skill-div");
  for (let x in extData.skills) {
    // For HTML = 50%
    const para1 = document.createElement("div");
    para1.setAttribute("class", "skill mb-px flex flex-row justify-between");
    para1.innerHTML = `<p class="text-base text-klr_para">${extData.skills[x].name}</p>
          <p class="text-base text-klr_para">${extData.skills[x].skill}%</p>`;
    skillsDivE.appendChild(para1);

    // For Percentage Bar
    const para2 = document.createElement("div");
    para2.setAttribute("class", "skill-bar mb-2.5");
    para2.innerHTML = `
      <div class="h-[9px] w-full border-[0.5px] border-solid border-klr_yellow rounded-[5px]">
        <div class="h-[2px] border-[2px] border-solid border-klr_yellow bg-klr_yellow rounded-[2px] w-[${extData.skills[x].skill}%] m-[2px]"></div>
      </div>`;
    skillsDivE.appendChild(para2);
  }
}

function addExtraSkills(extData) {
  // Skills
  const extraSkillsDivE = document.getElementById("extra-skill-div");
  for (let x in extData.extraSkills) {
    // For Extra Skills
    const para = document.createElement("div");
    para.setAttribute("class", "mb-4 flex flex-row gap-4");
    para.innerHTML = `<img class="w-5 h-5" src="images/double_square.jpg" />
            <p>${extData.extraSkills[x]}</p>`;
    extraSkillsDivE.appendChild(para);
  }
}
