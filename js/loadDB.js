var 
{log} = console,
rootData = null
data = [];
fetch('./hanviet/data2.zip')       // 1) fetch the url
.then(function (response) {                       // 2) filter on 200 OK
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response.blob());
    } else {
        return Promise.reject(new Error(response.statusText));
    }
})
.then(JSZip.loadAsync)                            // 3) chain with the zip promise
.then(function (zip) {
  log(zip)
    // zip.files.forEach(function (relativePath, zipEntry) {  // 2) print entries
    //   //console.log(zipEntry);
    //   zip.file(zipEntry.name).async("string")
    //   .then(data=>{
   
    //       console.log(r)
    //   })
    // })

    return zip.file("data2.json").async("string"); // 4) chain with the text content promise
})
.then(function success(text) {                    // 5) display the result
    // $("#fetch").append($("<p>", {
    //     "class": "alert alert-success",
    //     text: "loaded, content = " + text
    // }));
    //log(text)
    var cn,c= ' cn = '+text
    eval(c)
    if(rootData == null)
        rootData = cn
    else
        rootData.data = data.data.concat(cn.data)
    var r = cn.data.filter((v,k,s)=>{return v[0]=='????'})
    log(r)
    log(rootData.columns)
    data = rootData.data
}, function error(e) {
  log(e)
    // $("#fetch").append($("<p>", {
    //     "class": "alert alert-danger",
    //     text: e
    // }));
});