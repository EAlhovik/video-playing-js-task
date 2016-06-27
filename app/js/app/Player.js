define(function () {
    function Player(){
        var self = this;
        this.movies = ko.observableArray([]);
        this.currentMovie = ko.observable();
        this.play = function(item) {
            self.currentMovie(item);
        };
    }

    return Player;
})