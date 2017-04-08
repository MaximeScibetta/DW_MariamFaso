$(document).ready(function () {
    $('#get-help').click(function () {
        /* COMMENT PUIS JE VOUS AIDER */
        var showData = $('#show-data');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.help.map(function(item) {
                return item.title;
            });
            var text = data.help.map(function(item) {
                return item.text;
            });
            var text2 = data.help.map(function(item) {
                return item.text2;
            });
        
            showData.empty();
    
            var title = '<h4>' + title + '</h4>';
            var text = '<p>' + text + '</p>';
            var text2 = '<p>' + text2 + '</p>';

            showData.append(title, text, text2);

        });
        showData.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-projectTravel').click(function () {
        var showData = $('#show-data');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.projectTravel.map(function(item) {
                return item.title;
            });
            var text = data.projectTravel.map(function(item) {
                return item.text;
            });
        
            showData.empty();
    
            var title = '<h4>' + title + '</h4>';
            var text = '<p>' + text + '</p>';

            showData.append(title, text);

        });
        showData.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-event').click(function () {
        var showData = $('#show-data');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.event.map(function(item) {
                return item.title;
            });
            var text = data.event.map(function(item) {
                return item.text;
            });
        
            showData.empty();
    
            var title = '<h4>' + title + '</h4>';
            var text = '<p>' + text + '</p>';

            showData.append(title, text);

        });
        showData.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-temoi').click(function () {
        var showData = $('#show-data');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.temoi.map(function(item) {
                return item.title;
            });
            var text = data.temoi.map(function(item) {
                return item.text;
            });
        
            showData.empty();
    
            var title = '<h4>' + title + '</h4>';
            var text = '<p>' + text + '</p>';

            showData.append(title, text);

        });
        showData.text('Loading the JSOn file.');
    });
});