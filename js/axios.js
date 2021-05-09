const netName = "http://47.100.42.144:3389"

function getAxios(url, obj) {
    url = netName.concat(url + '?');

    for (key in obj) {
        url = url.concat(key + '=' + obj[key] + '&')
    }
    url = url.substring(0, url.length - 1);
    return new Promise((resolve, reject) => {
        axios({
                method: "GET",
                url: url,
                data: obj,
            })
            .then(result => {
                resolve(result.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

function postAxios(url, obj) {
    // console.log(obj)
    url = netName.concat(url);
    return new Promise((resolve, reject) => {
        axios.post(url, obj)
            .then(result => {
                resolve(result.data.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}