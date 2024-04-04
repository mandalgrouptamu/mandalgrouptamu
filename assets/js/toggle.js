function toggle(){
    const isOn = document.querySelector('#switch:checked') !== null;
    var unPapers = document.getElementsByClassName("unfeatured")
    for (let index = 0; index < unPapers.length; index++) {
        console.log(unPapers[index].classList)
        if (isOn) {unPapers[index].style.display = 'none';}
        if (isOn == false) {unPapers[index].style.display = '';}
    }
}


function researchbg(img) {
    try {
    document.getElementById("researchbg").style.backgroundImage = 'url('+ img + ')';
    } catch (error) {
        console.log(error)
    }
}

function blurCards(name){
    $('.'+name).css('transition-duration', '0.5s')

    $('.'+name).mouseover(
    function() {
    var cols = document.getElementsByClassName(name);
    for(i = 0; i < cols.length; i++) {
        cols[i].style.filter = 'blur(3px) grayscale(90%)';
      }
    var col = document.querySelectorAll( ":hover" ); 
    
    for(i = 0; i < col.length; i++) {
        // console.log(col[i].className.search(name), col[i].className);
        var numHover = 0;
        if (col[i].className.search(name) != -1){
            col[i].style.filter = 'blur(0px) grayscale(0%)';
            numHover =  numHover + 1;
        }
        // if (numHover == 0){
        //     $('.'+name).css('filter', 'blur(0px) grayscale(0%)');
        // }
    }
    })

    $('.'+name).mouseout(
        function() {
            var col = document.querySelectorAll( ":hover" ); 
            for(i = 0; i < col.length; i++) {
                var numHover = 0;
                if (col[i].className.search(name) != -1){
                    numHover =  numHover + 1;
                }
                if (numHover == 0){
                    $('.'+name).css('filter', 'blur(0px) grayscale(0%)');
                }
            }
        }
    )

}

 
