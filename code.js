const highlights = document.getElementById("highlights");

function copyText() {
  navigator.clipboard.writeText(localStorage.getItem("copyText"));
}

//data__highlights
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    //set__localStorage
    if (!localStorage.status) {
      localStorage.setItem("status", 1);
    } else {
      localStorage.status++;
    }

    //reset__localStorage
    if (localStorage.status >= data.length) {
      localStorage.status = 1;
    }

    const status = localStorage.getItem("status");

    highlights.innerHTML = `
    <i class="copyText" onclick={copyText()}>Copiar</i>
    <div class="container__text">
        <a href="${data[status].url}" target="_blank"><span>${status}</span> ${data[status].quote}</a>
    </div>
    `;

    localStorage.setItem("copyText", data[status].quote);
  });
