
let soupPadding = [];
let addParallax = (speed) => {
	let parallax = document.createElement("div");
	parallax.classList.add("grid");
	parallax.classList.add("parallax");
	document.documentElement.appendChild(parallax);	
	window.addEventListener('scroll',(e) => {
		let scroll = window.pageYOffset;
		parallax.style.top = -(scroll*speed)+"px";
	});
	return parallax;
}
let initSoup = (invert,latilla = false) => {

	let names = ["Home","Truss","Viga","Lumber","Door","Latillas","Corbel","Carving","Other","Contact"]
	let htmls = ["index","Truss","Viga","Lumber","Door","latilla","Corbel","Carving","Other","Contact"]
	let scrollMod = .5;
	let parallax = addParallax(scrollMod);

	if (latilla) parallax.classList.add("gridLatilla");
	// let soupContainers = document.getElementsByClassName("soupContainer");
	let soupContainers = [document.createElement("div"),document.createElement("div")]
	soupContainers.forEach(soup=>soup.classList.add("soupContainer"));
	soupContainers[0].classList.add("right");
	soupContainers[1].classList.add("left");

	soupContainers.forEach(soup=>parallax.appendChild(soup));


	let h = document.documentElement.scrollHeight/100*1.5;
	// let soupHeight = 500;
	let maxWidth = 80;
	let drawSoup = () => {
		for (let soup of soupContainers) {
		while (soup.firstChild) {
			soup.removeChild(soup.firstChild);
		}
		}
		for (let i=0;i<h-1;++i){
			for (let [index,soupContainer] of soupContainers.entries()) {
				if (latilla && soupContainer.classList.contains("left")) continue;
				let a = document.createElement("a");
				a.href = htmls[i%names.length].toLocaleLowerCase()+".html";
				a.classList.add("soup");
				if (!soupPadding[i+(h-1)*index]) soupPadding[i+(h-1)*index] = Math.random()*4+"px 0";
				a.style.padding = soupPadding[i+(h-1)*index];
				let img = new Image();
				// img.src = "asset/soupCarving.png";
				if( invert)img.src = "asset/soup/soupInverse"+names[i%names.length]+".png";
				else       img.src = "asset/soup/soup"      +names[i%names.length]+".png";
				// img.maxWidth = soupHeight;
				img.width = maxWidth;
				// img.style.width = "100%";
				if (invert) {
					a.onmouseout   = e => e.target.src = "asset/soup/soupInverse"+names[i%names.length]+".png";
					a.onmouseover  = e => e.target.src = "asset/soup/soup"       +names[i%names.length]+".png";
				} else {
					a.onmouseover = e => e.target.src = "asset/soup/soupInverse"+names[i%names.length]+".png";
					a.onmouseout  = e => e.target.src = "asset/soup/soup"       +names[i%names.length]+".png";
				}
				a.appendChild(img);
				soupContainer.appendChild(a);
			}
		}
	}

	let f = () => {
		requestAnimationFrame(f);
		let t = document.documentElement.scrollHeight;
		let soupHeight;
		if (soupContainers[0].childNodes[0]) soupHeight = soupContainers[0].childNodes[0].clientHeight;
		else soupHeight = 100;
		if (h !=((t/(soupHeight+4))+((t-innerHeight)/(soupHeight+4)*scrollMod))) {
			h = ((t/(soupHeight+4))+((t-innerHeight)/(soupHeight+4)*scrollMod));
			drawSoup();
		}
	}; f();
	addImg();
}

let addImg = () => {
	let parallax = addParallax(1);
	for (let i = 0; i<1;++i){
		let left = new Image();
		left.src = "asset/carving/left.png";
		left.classList.add("left");
		// left.style.top = "850px";
		left.style.top = 80+200*i+"vh";
		console.log(80+100*i+"vh");
		left.style.position = "relative";
		let right = new Image();
		right.src = "asset/carving/right.png";
		right.classList.add("right");
		// right.style.top = "850px";
		right.style.top = 80+200*i+"vh";
		right.style.position = "relative";
		parallax.appendChild(left);
		parallax.appendChild(right);
	}

}
