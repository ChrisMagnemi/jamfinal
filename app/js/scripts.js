// add Event listener everywhere
document.addEventListener('click', clickHandlers);

//trigger a click on load
window.addEventListener('load', clickHandlers);

var nyt =
  'https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';
var github = 'https://api.github.com/users/ChrisMagnemi';

function clickHandlers() {
  console.log('click');
  if (document.body.classList == 'ajax') {
    getData(nyt);
  } else if (document.body.classList == 'homegit') {
    getData(github);
  } else {
  }
  if (event.target.closest('#pull')) {
    console.log(event.target);
    document.querySelector('body').classList.toggle('show-nav');
    // event.preventDefault();
  }
}

var addContent_nyt = function(data) {
  var looped = '';
  for (let i = 0; i < data.results.length; i++) {
    looped += `
      <div class="item">
      <a href="${data.results[i].url}">
        <h3>${data.results[i].title}</h3>
        <img src="${data.results[i].multimedia[1].url}" />
        <p>${data.results[i].abstract}</p>
      </a>
      </div>
      `;
  }
  document.querySelector('.ajax .content div').innerHTML = looped;
};

var addContent_git = function(data) {
  var gitdata = `
  <h3><a href="${data.url}">${data.name}</a></h3>
  <p>${data.bio}</p>
  <img src="${data.avatar_url}" />
  `;
  document.querySelector('.homegit .content div').innerHTML = gitdata;
};

var getData = function(apiLink) {
  switch (apiLink) {
    case nyt:
      fetch(nyt)
        .then(response => response.json())
        .then(json => addContent_nyt(json));
      break;
    case github:
      fetch(github)
        .then(response => response.json())
        .then(json => addContent_git(json));
      break;
  }
};
