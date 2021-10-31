const linksSocialMidia = {
  github: "suphessel"
  
};

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`;
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userGitHub.textContent = data.name;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
