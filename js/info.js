fetch("https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json").then(
	function(response){
		return response.json();
	}
).then(function(info){
	console.log(info);
	let desc = info["description"];
	/*document.getElementById("info_title").textContent = desc["title"];
	document.getElementById("base_period").textContent = `Base Period: ${desc["base_period"]}`
	document.getElementById("units").textContent = `Units: ${desc["units"]}`;*/
	getData(info["data"]);
})

function getData(data){
	document.querySelector("main").innerHTML = "";
	for (let k in data){
		let html = "<div>";
		html+=`<p><i class="fas fa-calendar-alt"></i> ${k}</p>`;
		html+=`<p><i class="fas fa-thermometer-half"></i> ${data[k]}</p>`;
		document.querySelector("main").innerHTML += html;
	}
}