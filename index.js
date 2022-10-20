function updateMap() {
    console.log("Updating map with realtime data")
    fetch("https://sunil2012000.github.io/covid19-tracker/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                // IF cases are greater than 255 then it is dark
                cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255, 0, 0)";
                }

                else {
                    color = `rgb(${cases}, 0, 0)`;
                }


                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

let interval = 15000;
setInterval(updateMap, interval); 
