// Get html element by id
var productInfo=document.getElementById("productInfo");
var productInfo1=document.getElementById("productInfo1");
var productInfo2=document.getElementById("productInfo2");
var productInfo3=document.getElementById("productInfo3");
var productInfo4=document.getElementById("productInfo4");
var boxPM1=document.getElementById("box-pm1");
var boxPM2=document.getElementById("box-pm2");
var boxPM3=document.getElementById("box-pm3");
var boxPM4=document.getElementById("box-pm4");
var boxPM5=document.getElementById("box-pm5");


// Open and Close function Margarita
function Margarita()
{
    
    if(productInfo.style.visibility=='visible')
    {
        productInfo.style.visibility='hidden';
        productInfo.style.transition=".5s";
        productInfo.style.zIndex='1';
        boxPM1.style.left='60%';
        boxPM2.style.visibility='visible';
        boxPM3.style.visibility='visible';
        boxPM4.style.visibility='visible';
        boxPM5.style.visibility='visible';
    }
    else
    {
        productInfo.style.transition=".5s";
        productInfo.style.visibility='visible';
        productInfo.style.zIndex='1';
        boxPM1.style.left='72%';
        boxPM2.style.visibility='hidden';
        boxPM3.style.visibility='hidden';
        boxPM4.style.visibility='hidden';
        boxPM5.style.visibility='hidden';
        
    }
}
// Open and Close function Capricious
function Capricious()
{
    
    if(productInfo1.style.visibility=='visible')
    {
        productInfo1.style.visibility='hidden';
        productInfo1.style.transition=".5s";
        boxPM2.style.left="62%";
        boxPM2.style.top="36%";
        boxPM1.style.visibility='visible';
        boxPM3.style.visibility='visible';
        boxPM4.style.visibility='visible';
        boxPM5.style.visibility='visible';
    }
    else
    {
        productInfo1.style.transition=".5s";
        productInfo1.style.visibility='visible';
        productInfo1.style.zIndex='1';
        boxPM2.style.left="73%";
        boxPM2.style.top="25%";
        boxPM1.style.visibility='hidden';
        boxPM3.style.visibility='hidden';
        boxPM4.style.visibility='hidden';
        boxPM5.style.visibility='hidden';
    }
}
// Open and Close function Vegetarian
function Vegetarian()
{
    
    if(productInfo2.style.visibility=='visible')
    {
        productInfo2.style.visibility='hidden';
        productInfo2.style.transition=".5s";
        boxPM3.style.left="65%";
        boxPM3.style.top="48%";
        boxPM1.style.visibility='visible';
        boxPM2.style.visibility='visible';
        boxPM4.style.visibility='visible';
        boxPM5.style.visibility='visible';
        
    }
    else
    {
        productInfo2.style.visibility='visible';
        productInfo2.style.zIndex='1';
        productInfo2.style.transition=".5s";
        boxPM3.style.left="73%";
        boxPM3.style.top="24%";
        boxPM1.style.visibility='hidden';
        boxPM2.style.visibility='hidden';
        boxPM4.style.visibility='hidden';
        boxPM5.style.visibility='hidden';
    }
}
// Open and Close function Poloforsa
function Poloforsa()
{
    
    if(productInfo3.style.visibility=='visible')
    {
        productInfo3.style.visibility='hidden';
        productInfo3.style.transition=".5s";
        boxPM4.style.left="62%";
        boxPM4.style.top="61%";
        boxPM1.style.visibility='visible';
        boxPM2.style.visibility='visible';
        boxPM3.style.visibility='visible';
        boxPM5.style.visibility='visible';
    }
    else
    {
        productInfo3.style.visibility='visible';
        productInfo3.style.zIndex='1';
        productInfo3.style.transition=".5s";
        boxPM4.style.left="73%";
        boxPM4.style.top="24%";
        boxPM1.style.visibility='hidden';
        boxPM2.style.visibility='hidden';
        boxPM3.style.visibility='hidden';
        boxPM5.style.visibility='hidden';
    }
}
// Open and Close function Prosciutto
function Prosciutto()
{
    
    if(productInfo4.style.visibility=='visible')
    {
        productInfo4.style.visibility='hidden';
        productInfo4.style.transition=".5s";
        boxPM5.style.left="60%";
        boxPM5.style.top="73%";
        boxPM1.style.visibility='visible';
        boxPM2.style.visibility='visible';
        boxPM3.style.visibility='visible';
        boxPM4.style.visibility='visible';
    }
    else
    {
        productInfo4.style.visibility='visible';
        productInfo4.style.zIndex='1';
        boxPM5.style.left="73%";
        boxPM5.style.top="25%";
        boxPM1.style.visibility='hidden';
        boxPM2.style.visibility='hidden';
        boxPM3.style.visibility='hidden';
        boxPM4.style.visibility='hidden';
    }
}

