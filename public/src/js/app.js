if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("sw registered"));
}

const API = "https://enchiridion-api-jqrnendggd.now.sh/enchiridion";

fetch(API)
  .then(res => res.json())
  .then(data => {
    dataToHtml(data);
  })
  .catch(err => console.warn(err));

function dataToHtml(data) {
  const cardsContainer = document.querySelector(".cards__container");
  //prettier-ignore
  const markup = `${data.map(({ text, section }) => 
    `<article class="card">
      <div class="card__content">
        <p>${section}. ${text}</p>
      </div>
    </article>`)
      .join('')}`;
  cardsContainer.innerHTML = markup;
}
