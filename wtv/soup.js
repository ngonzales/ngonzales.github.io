
let soupPadding = [];		
let initSoup = (invert) => {

	let names = ["Home","Lumber","Viga","Door","Latillas","Corbel","Carving","Other","Contact"]
	// let parallax = document.getElementById("parallax");
	let parallax = document.createElement("div");
	parallax.classList.add("grid");
	parallax.setAttribute("id","parallax");
	// let soupContainers = document.getElementsByClassName("soupContainer");
	let soupContainers = [document.createElement("div"),document.createElement("div")]
	soupContainers.forEach(soup=>soup.classList.add("soupContainer"));
	soupContainers[0].classList.add("left");
	soupContainers[1].classList.add("right");
	soupContainers.forEach(soup=>parallax.appendChild(soup));
	document.documentElement.appendChild(parallax);
	let scrollMod = .5;
	window.addEventListener('scroll',(e) => {
		let scroll = window.pageYOffset;
		parallax.style.top = -(scroll*scrollMod)+"px";
	});
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
				let a = document.createElement("a");
				a.href = names[i%names.length].toLocaleLowerCase()+".html";
				a.classList.add("soup");
				if (!soupPadding[i+(h-1)*index]) soupPadding[i+(h-1)*index] = Math.random()*4+"px 0";
				a.style.padding = soupPadding[i+(h-1)*index];
				let img = new Image();
				// img.src = "asset/soupCarving.png";
				if( invert)img.src = "asset/soupInverse"+names[i%names.length]+".png";
				else       img.src = "asset/soup"      +names[i%names.length]+".png";
				// img.maxWidth = soupHeight;
				img.width = maxWidth;
				// img.style.width = "100%";
				if (invert) {
					a.onmouseout   = e => e.target.src = "asset/soupInverse"+names[i%names.length]+".png";
					a.onmouseover  = e => e.target.src = "asset/soup"       +names[i%names.length]+".png";
				} else {
					a.onmouseover = e => e.target.src = "asset/soupInverse"+names[i%names.length]+".png";
					a.onmouseout  = e => e.target.src = "asset/soup"       +names[i%names.length]+".png";
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
}
