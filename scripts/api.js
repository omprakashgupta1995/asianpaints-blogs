function sendAPI(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open(method, url, true);
        xhr.onload = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) resolve(this.responseText)
                else reject(this.responseText)
            }
        };
        xhr.onerror = function (err) {
            reject(err)
            console.error("Network error occurred");
        }
        xhr.send();
    })
}
var domain = "https://beta.beautifulhomes.com";
async function callXF() {
    var htm = await sendAPI("GET", domain + "/content/experience-fragments/asianpaintsbeautifulhomes/us/en/experience-fragment/master.html")

    var header = document.querySelector("header")
    var dom = parseHTML(htm);
    var xfHeader = dom.querySelector(".root")
    header.append(xfHeader);

    dom.querySelectorAll("script").forEach(function (scriptTag) {
        console.log(scriptTag);
        var script = document.createElement("script");
        if (!scriptTag.src) return;
        var url = new URL(scriptTag.src)
        script.src = domain + url.pathname;

        script.dataset.src = script.src;
        document.querySelector("body").append(script);
    })
}
callXF();
callFooterXF();
async function callFooterXF() {
    var htm = await sendAPI("GET", domain + "/content/experience-fragments/asianpaintsbeautifulhomes/us/en/footer/master.html")
    var dom = parseHTML(htm);

    var footer = dom.querySelector(".root")
    document.body.append(footer);
}

function parseHTML(htm) {
    var div = document.createElement("div");
    div.innerHTML = htm;
    return div
}
