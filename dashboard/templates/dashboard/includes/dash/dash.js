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
    console.log(json);
    let cpu_panel = document.getElementById("CPU-Auslastung");
    let cpuValue = json.cpu_percent.toLocaleString('de-DE', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      })
    cpu_panel.querySelector(".h5").innerText = `${cpuValue}%`;
    cpu_panel.querySelector('[role="progressbar"]').style.width = `${json.cpu_percent}%`;

    let ram_panel = document.getElementById("RAM-Auslastung");
    let ramValue = json.memory_percent.toLocaleString('de-DE', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      })
    ram_panel.querySelectorAll(".h5")[0].innerText = `${ramValue}%`;
    ram_panel.querySelectorAll(".h5")[1].innerText = `${json.memory}GB`;
    ram_panel.querySelector('[role="progressbar"]').style.width = `${json.memory_percent}%`;

    let volumes_panel = document.getElementById("Festplatten");
    let volumesArray = [];
    for(let i = 0; i < json.drives_usage.length; i++){
        let name = json.drives_usage[i].name;
        let size = json.drives_usage[i].total.toLocaleString('de-DE', {
            maximumFractionDigits: 0
          });
        volumesArray.push(`${name}&nbsp;(${size}&nbsp;GB)`);
    }
    volumes_panel.querySelectorAll(".h5")[0].innerHTML = `${volumesArray.join(", ")}`;

    let tasks_panel = document.getElementById("Tasks");
    tasks_panel.querySelectorAll(".h5")[0].innerText = `${json.process_count}`;

    setTimeout(fetchFromAPI, 500);
}