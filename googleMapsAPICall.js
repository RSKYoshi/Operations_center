
let map;
let lat;
let long;


//pulls user's location based on browser api call into Google Maps api call to set center point on user's location
//to do this, developer must set the fetch and any waterfall code inside the navigator call. Does not work outside this method
async function initMap() {

    navigator.geolocation.getCurrentPosition(async position => {

        lat = position.coords.latitude;
        long = position.coords.longitude;

        (g=>{
            let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document,
                b = window;b=b[c]||(b[c]={});
            const d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams,
                u = () => h || (h = new Promise(async (f, n) => {
                    await (a = m.createElement("script"));
                    e.set("libraries", [...r] + "");
                    for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                    d[q] = f;
                    a.onerror = () => h = n(Error(p + " could not load."));
                    a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                    m.head.append(a)
                }));
            d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f, ...n)=>r.add(f)&&u().then(()=>d[l](f,...n))
        })
        ({key: GOOGLEMAPS_API_KEY, v: "weekly"});






        const {Map} = await google.maps.importLibrary("maps");


        let mapOptions = {
            center: {lat: lat, lng: long},
            zoom: 8
        }

        let markerOptions = {
            position: new google.maps.LatLng(lat,long)
        }
        let marker = new google.maps.Marker(markerOptions)

        map = new Map(document.getElementById("map"), mapOptions)

        marker.setMap(map);











    })
}

// for some reason, when I do window.onload for initMap(), the city div just vanishes
initMap();


