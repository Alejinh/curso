var myImage = document.querySelector("img");


myImage.onclick = function(){


	var mySrc = myImage.getAttribute("src");

	if(mySrc==="mano.jpg") {

		myImage.setAttribute ("src" , "madera.jpg");
	}else{ 
		myImage.setAttribute ("src", "mano.jpg");
	}
}

