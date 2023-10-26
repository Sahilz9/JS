let getImg = document.getElementsByClassName("images");
for (let i = 0; i < getImg.length; i++) {
    getImg[i].src = "../../Images/industry-support-icon.svg";
    console.log(`Value of image no. ${i} is changed.`);
}