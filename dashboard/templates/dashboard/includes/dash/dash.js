function fetchFromAPI(){
    url = "/data";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        handleJSON(data);
    })
    .catch(e => {throw e});
}
fetchFromAPI();

function handleJSON(json){
    // write to cpu percent
    let cpu_panel = document.getElementById("CPU-Auslastung");
    cpu_panel.querySelector(".h5").innerText = `${json.cpu_percent}%`;
    cpu_panel.querySelector('[role="progressbar"]').style.width = `${json.cpu_percent}%`;



    setTimeout(fetchFromAPI, 500);
}