function sendAPI(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.open(method, url, true);
        xhr.onload = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(this.responseText)
                } else {
                    reject(this.responseText)
                }
            }
        };
        xhr.onerror = function (err) {
            reject(err)
            console.error("Network error occurred");
        }
        xhr.send();
    })
}
async function callXF() {
    var domain = "https://beta.beautifulhomes.com";
    var data = await sendAPI("GET", domain + "/content/experience-fragments/asianpaintsbeautifulhomes/us/en/experience-fragment/master.html")

    var header = document.querySelector("header")
    var dom = document.createElement("div");
    dom.innerHTML = data;
    var xfHeader = dom.querySelector("header")
    xfHeader.classList.forEach(function (ecahClassName) {
        header.classList.add(ecahClassName)
    })
    header.innerHTML = xfHeader.innerHTML;



    dom.querySelectorAll("link").forEach(function (linkTag) {
        var link = document.createElement("link")
        var url = new URL(linkTag.href)
        link.href = domain + url.pathname

        link.dataset.src = link.href;
        // document.body.querySelector("header").prepend(link);
    })
    // header.append(xfHeader);
    console.log(header);

    dom.querySelectorAll("script").forEach(function (scriptTag) {
        console.log(scriptTag);
        var script = document.createElement("script");
        if (!scriptTag.src) return;
        var url = new URL(scriptTag.src)
        // script.src = domain + scriptTag.src;
        script.src = domain + url.pathname;

        script.dataset.src = script.src;
        document.querySelector("body").append(script);
    })
}
callXF()
