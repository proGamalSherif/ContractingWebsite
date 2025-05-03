const imgList = [
    'assets/images/752a312c-1dcf-4323-a205-2373c91ea66c.jpg',
    'assets/images/8612f80e-7c38-461b-a848-831529aa3c31.jpeg',
    'assets/images/e74df00b-728f-4909-95ad-48283cbe5529.jpeg',
    'assets/images/IMG-20231130-WA0107.jpg',
    'assets/images/IMG-20240922-WA0005.jpg',
    'assets/images/IMG_7378.jpeg',
];
let lastIndex = 0 ;
let sliderId;
function startSlider(){
    const imgObj = document.getElementById('imgObj')
    sliderId=setInterval(() => {
        imgObj.src=imgList[lastIndex];
        if(lastIndex == imgList.length-1){
            lastIndex=0;
        }else{
            lastIndex++;
        }
    }, 3000);
}

function holdSlider(){
    clearInterval(sliderId);
}
function continueSlider(){
    startSlider();
}
function nextImage(){
    holdSlider();
    if(lastIndex == imgList.length-1){
        lastIndex=0;
    }else{
        lastIndex++;
    }
    const imgObj = document.getElementById('imgObj')
    imgObj.src=imgList[lastIndex];
}
function prevImage(){
    holdSlider();
    if(lastIndex == 0){
        lastIndex = imgList.length-1
    }else{
        lastIndex--;
    }
    const imgObj = document.getElementById('imgObj')
    imgObj.src=imgList[lastIndex];
}

startSlider();

