/* algorithm function */
function isEmpty(str) {  
    if(typeof str == "undefined" || str == null || str == "") return true;
    else return false;
}

function saveImg(uri, filename) {
    var link = document.createElement('a');
    if(typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

function readTextFile(file) {
	var text;
	
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) { text = rawFile.responseText; }
        }
    };
    rawFile.send(null);
	
	return text;
}

function writeTextFile(file, content) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = file;
    a.click();
}