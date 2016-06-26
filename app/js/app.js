function dataFuctory(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://localhost:8000/movies.json', true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if (this.readyState != 4) return;
			if (this.status != 200) {
				reject('Error: ' + (this.status ? this.statusText : 'bad request.'));
				alert(  );
				return;
			}
			resolve(this.responseText);
		}
	});
}

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
function Player(){
	var self = this;
	this.movies = ko.observableArray([]);
	this.currentMovie = ko.observable();
	this.play = function(item) {
		self.currentMovie(item);
		console.log(item);
    };
}

var viewModel = new Player();

dataFuctory().then(
	function(result){
		var JSONdataFromServer = result;
		var dataFromServer = ko.utils.parseJson(JSONdataFromServer);

		var mappedData = ko.utils.arrayMap(dataFromServer, function(item) {
			return new Movie(item);
			return new Item(item.name, item.category, item.price);
		});

		viewModel.movies(mappedData);
	},
	function(error){
		 alert("Rejected: " + error)
	}
);

ko.applyBindings(viewModel);