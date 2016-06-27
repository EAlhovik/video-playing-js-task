define(function () {
    var promise = null
    return {
        getData: function () {
            if(promise){
                return promise;
            }
            promise = new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:8000/movies.json', true);
                xhr.send();
                xhr.onreadystatechange = function() {
                    if (this.readyState != 4) return;
                    if (this.status != 200) {
                        reject('Error: ' + (this.status ? this.statusText : 'bad request.'));
                        return;
                    }
                    resolve(this.responseText);
                }
            });
            return promise;
        }
    };
});