const highlights = document.getElementById('highlights');

//data__highlights
fetch("data.json")
.then(response => response.json())
.then(data => {

    //set__localStorage
    if(!localStorage.status){
        localStorage.setItem('status', 1);
    }else{
        localStorage.status++;
    }

    //reset__localStorage
    if(localStorage.status >= data.length){
        localStorage.status = 1;
    }
        
    const status = localStorage.getItem('status');

    highlights.innerHTML = `
    <div class="container__text">
        <a href="${data[status].url}" target="_blank">${data[status].text}</a>
    </div>
    `;
});