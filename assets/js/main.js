const imageArr = [{
        name: 'Image 1',
        path: 'assets/images/Slider1.jpg'
    },
    {
        name: 'Image 2',
        path: 'assets/images/Slider2.jpg'
    },
    {
        name: 'Image 3',
        path: 'assets/images/Slider3.jpg'
    },
    {
        name: 'Image 4',
        path: 'assets/images/Slider4.jpg'
    }
];
let lastIndex = 0;
let sliderIntervalId;

function startSlider() {
    const imgObj = document.getElementById('silderObj');
    if (imgObj) {
        sliderIntervalId = setInterval(() => {
            lastIndex = (lastIndex + 1) % imageArr.length;
            imgObj.src = imageArr[lastIndex].path;
        }, 5000);
    }
}

function nextImage() {
    const imgObj = document.getElementById('silderObj');
    if (imgObj) {
        lastIndex = (lastIndex + 1) % imageArr.length;
        imgObj.src = imageArr[lastIndex].path;
    }
}

function prevImage() {
    const imgObj = document.getElementById('silderObj');
    if (imgObj) {
        lastIndex = (lastIndex - 1 + imageArr.length) % imageArr.length;
        imgObj.src = imageArr[lastIndex].path;
    }
}
startSlider();

function stopSlider() {
    clearInterval(sliderIntervalId);
}
const imgObj = document.getElementById('silderObj');
if (imgObj) {
    imgObj.addEventListener('mouseenter', stopSlider);
    imgObj.addEventListener('mouseleave', startSlider);
}