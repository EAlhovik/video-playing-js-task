define(function () {
    function Movie(item){
        this.title = item.title;
        this.description = item.description;
        this.releaseYear = item.meta.releaseYear;
        this.directors = ko.utils.arrayMap(item.meta.directors, function(director) {
            return director.name;
        }).join(', ');
        this.actors =  ko.utils.arrayMap(item.meta.actors, function(actor) {
            return actor.name;
        }).join(', ');

        this.streams = ko.utils.arrayMap(item.streams, function(stream) {
            return {type: 'video/' + stream.type, url: stream.url};
        });
        this.cover = ko.computed(function(){
            return './images/' + item.images.cover
        });
        this.placeholder = ko.computed(function(){
            return './images/' + item.images.placeholder
        });
    }
    return Movie;
})