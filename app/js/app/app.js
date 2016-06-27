define(['Player', 'Movie', 'dataFactory'], function (Player, Movie, dataFactory) {
 var viewModel = new Player();
 ko.applyBindings(viewModel);

 dataFactory.getData()
     .then(function(jsonDataFromServer){
          var dataFromServer = ko.utils.parseJson(jsonDataFromServer);

          var mappedData = ko.utils.arrayMap(dataFromServer, function(item) {
           return new Movie(item);
          });

          viewModel.movies(mappedData);
     })
     .catch(function(error){
           alert("Rejected: " + error)
     });
});