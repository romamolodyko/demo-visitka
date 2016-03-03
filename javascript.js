var images = new Array("1.jpg","2.jpg","3.jpg","4.jpg","Layer 7.jpg");
window.onload = function(){
    var index = 2;
    var path = 'image/';
    var image = document.getElementById('image');
    image.src = path+images[index];
    $(".right-button").on('click', function(){
        var imageBlock = $(".img");
        var firstImage = imageBlock.find('img:first-child');
        var content = firstImage.clone();
        firstImage.remove();
        imageBlock.append(content);
        $('#image').addClass('hidden');
        index++;
        if(index >= images.length) {
            index = 0;
        }
        slowShow(index);
    });

    $(".left-button").on('click', function(){
        var imageBlock = $(".img");
        var lastImage = imageBlock.find('img:last-child');
        var content = lastImage.clone();
        lastImage.remove();
        imageBlock.prepend(content);
        $('#image').addClass('hidden');
        index--;
        if(index < 0){
            index = images.length-1;
        }
        slowShow(index);
    });
};

    function slowShow(index){
        var path = 'image/';
        var image = document.getElementById('image');
        image.addEventListener('transitionend', function(){
            $('#image').removeClass('hidden');
            $('#image').addClass('upper');
            image.addEventListener('transitionend', function(){
                $('#image').removeClass('upper');
            });
            image.src = path + images[index];
        });
    }
