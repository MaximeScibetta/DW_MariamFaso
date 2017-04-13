$(document).ready(function () {
    $('#get-help').click(function () {
        /* COMMENT PUIS JE VOUS AIDER */
        var showText = $('#show-text');
        var showImage = $('#show-image');
        var showTitle = $('#show-title');
        var nav = $('#imageNav');

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

            var image1 = data.help.map(function(item) {
                return item.image1;
            });
            var image2 = data.help.map(function(item) {
                return item.image2;
            });

            var imageNav = data.help.map(function(item) {
                return item.imageNav;
            });

            showTitle.empty();
            showText.empty();
            showImage.empty();
            nav.empty();
    
            var title = '<h4 id="ajaxTarget">' + title + '</h4>';
            var text = '<p>' + text + '</p>';
            var text2 = '<p>' + text2 + '</p>';
            var image1 = '<img src="' + image1 + '" alt="">';
            var image2 = '<img src="' + image2 + '" alt="">';
            var imageNav = '<img src="' + imageNav + '" alt="" width="645" height="432">';

            showTitle.prepend(title);
            showText.append(text, text2);
            nav.append(imageNav);
            showImage.append( image1, image2);

        });
        showText.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-projectTravel').click(function () {
        var showText = $('#show-text');
        var showImage = $('#show-image');
        var nav = $('#imageNav');
        var show = $('#show-data');
        var showTitle = $('#show-title');
        

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.projectTravel.map(function(item) {
                return item.title;
            });

            var text = data.projectTravel.map(function(item) {
                return item.text;
            });
            var text2 = data.projectTravel.map(function(item) {
                return item.text2;
            });
            var text3 = data.projectTravel.map(function(item) {
                return item.text3;
            });

            var image1 = data.projectTravel.map(function(item) {
                return item.image1;
            });
            var image2 = data.projectTravel.map(function(item) {
                return item.image2;
            });
            var image3 = data.projectTravel.map(function(item) {
                return item.image3;
            });

            var imageNav = data.projectTravel.map(function(item) {
                return item.imageNav;
            });
            
            showTitle.empty();
            showText.empty();
            showImage.empty();
            nav.empty();
    
            var title = '<h4 id="ajaxTarget">' + title + '</h4>';
            var text = '<p>' + text + '</p>';
            var text2 = '<p>' + text2 + '</p>';
            var text3 = '<p>' + text3 + '</p>';
            var image1 = '<img src="' + image1 + '" alt="">';
            var image2 = '<img src="' + image2 + '" alt="">';
            var image3 = '<img src="' + image3 + '" alt="">';
            var imageNav = '<img src="' + imageNav + '" alt="" width="645" height="432">';

            showTitle.append(title);
            showText.append(text, text2, text3);
            nav.append(imageNav);
            showImage.append( image1, image2, image3);
            
        });
        showText.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-event').click(function () {
        var showText = $('#show-text');
        var showImage = $('#show-image');
        var nav = $('#imageNav');
        var showTitle = $('#show-title');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.event.map(function(item) {
                return item.title;
            });

            var text = data.event.map(function(item) {
                return item.text;
            });
            var text2 = data.event.map(function(item) {
                return item.text2;
            });

            var image1 = data.event.map(function(item) {
                return item.image1;
            });
            var image2 = data.event.map(function(item) {
                return item.image2;
            });

            var imageNav = data.event.map(function(item) {
                return item.imageNav;
            });
        
            showTitle.empty();
            showText.empty();
            showImage.empty();
            nav.empty();
    
            var title = '<h4 id="ajaxTarget">' + title + '</h4>';
            var text = '<p>' + text + '</p>';
            var text2 = '<p>' + text2 + '</p>';
            var image1 = '<img src="' + image1 + '" alt="">';
            var image2 = '<img src="' + image2 + '" alt="">';
            var imageNav = '<img src="' + imageNav + '" alt="" width="645" height="432">';

            showTitle.append(title);
            showText.append(text, text2);
            nav.append(imageNav);
            showImage.append( image1, image2);

        });
        showText.text('Loading the JSOn file.');
    });

    /* NOS PROJETS ET VOYAGES */
     $('#get-temoi').click(function () {
        var showText = $('#show-text');
        var showImage = $('#show-image');
        var nav = $('#imageNav');
        var showTitle = $('#show-title');

        $.getJSON('../ajax/content.json', function(data){
            console.log(data);

            var title = data.temoi.map(function(item) {
                return item.title;
            });


            var text = data.temoi.map(function(item) {
                return item.text;
            });
            var text2 = data.temoi.map(function(item) {
                return item.text2;
            });
            var text3 = data.temoi.map(function(item) {
                return item.text3;
            });


            var image1 = data.temoi.map(function(item) {
                return item.image1;
            });
            var image2 = data.temoi.map(function(item) {
                return item.image2;
            });
            var image3 = data.temoi.map(function(item) {
                return item.image3;
            });

            var imageNav = data.temoi.map(function(item) {
                return item.imageNav;
            });
        
            showTitle.empty();
            showText.empty();
            showImage.empty();
            nav.empty();
    
            var title = '<h4 id="ajaxTarget">' + title + '</h4>';
            var text = '<p>' + text + '</p>';
            var text2 = '<p>' + text2 + '</p>';
            var text3 = '<p>' + text3 + '</p>';
            var image1 = '<img src="' + image1 + '" alt="">';
            var image2 = '<img src="' + image2 + '" alt="">';
            var image3 = '<img src="' + image3 + '" alt="">';
            var imageNav = '<img src="' + imageNav + '" alt="" width="500" height="432">';

            showTitle.append(title); 
            showText.append( text, text2, text3);
            nav.append(imageNav);
            showImage.append( image1, image2, image3);

        });
        showText.text('Loading the JSOn file.');
    });
});