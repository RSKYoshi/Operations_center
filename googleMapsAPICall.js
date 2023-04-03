
let map;
let lat;
let long;

async function initMap() {



    navigator.geolocation.getCurrentPosition(async position => {

        lat = parseFloat(position.coords.latitude.toFixed(2));
        long = parseFloat(position.coords.longitude.toFixed(2));

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

        map = new Map(document.getElementById("map"), {
            center: {lat: lat, lng: long},
            // center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    })
}

// for some reason, when I do window.onload for initMap(), the city div just vanishes
initMap();


