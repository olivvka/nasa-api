$(function() {
 
    let nasaUrl =  'https://api.nasa.gov/planetary/apod?api_key=0ccH4V9ieheGnF1oOOfGzZcIFLDzjtIF87l8uOhl';
    let marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
        let pic = $('.pic');
    let marsgallery = $('#mars-gallery');
    
    
    
          h1 = $('h1');
       
     let quote = $('.quote')
    
        function getRandomPic() {
        $.ajax({
            url: nasaUrl,  
            type: 'GET',
            dataType: 'json'
        }).done(function(data) {
                  h1.text(data.title);
               let pic1= data.url;
          //  console.log(data)
          pic.html('<img src=' + pic1+ '>')
         let explanation = data.explanation;
            
         quote.text(explanation);
        }) 
}
    
    
 getRandomPic();
    
    
    
    function getMarsPic() {
            $.ajax({
                url: marsUrl,
                type: 'GET',
                dataType: 'json'
            }).done(function(photos) {
           //    console.log(photos)
               // console.log(marsgallery)
                for (var i = 0; i <= 9; i++) {
           marsgallery.append('<div class="mars-gallery--item"></div>');
                    let item = $('.mars-gallery--item');
                    var marsPics = photos.photos;
                   // console.log(photos)
                    
                    
                    if (i <2) {
                    item.each(function(){
                        $(this).css('background-image', 'url("' + marsPics[Math.floor(Math.random() * (856 - 0 + 1)) + 0].img_src + '")')
                         
                    });} 
                    if (i >-2) {
                        
                        item.each(function(){
                        $(this).css('background-image', 'url("' + marsPics[Math.floor(Math.random() * (856 - 0 + 1)) + 0].img_src + '")').hide()
                         
                    });} 
                        
                    
                    
                  
                         
                    
                        
}
                   more();
                  
            }).fail(function(error) {
                console.error(error);
            });
}
    
    
    
    getMarsPic();
 function more(){
 
    sizeDiv = $("#mars-gallery div").length;
    
                  
                        x=3;
                        $('#mars-gallery div:lt('+x+')').show();
                        $('#loadMore').click(function () {
                            x= (x+3 <= sizeDiv) ? x+3 : sizeDiv;
                            $('#mars-gallery div:lt('+x+')').show();
                        });
 }
    
 
       
});

 