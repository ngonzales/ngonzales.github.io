
	let links = [
		{name : "Home"           , href : "index.html"   , pathName : "Home"    },
		{name : "Trusses"        , href : "truss.html"   , pathName : "Truss"   },
		{name : "Vigas"          , href : "viga.html"    , pathName : "Viga"    },
		{name : "Latillas"       , href : "latilla.html" , pathName : "Latillas"},
		{name : "Rough Sawn"     , href : "sawn.html"    , pathName : "Sawn"    },
		{name : "Corbels"        , href : "corbel.html"  , pathName : "Corbel"  },
		{name : "Carvings"       , href : "carving.html" , pathName : "Carving" },
		{name : "Doors"          , href : "door.html"    , pathName : "Door"    },
		{name : "Other Products" , href : "other.html"   , pathName : "Other"   },
		{name : "Contact Us"     , href : "contact.html" , pathName : "Contact" },
	];

	let initNav = () => {
		// let mainNav = document.getElementById("mainNav");
		// let mainNav = document.getElementById("mainNav");
		let navs = document.getElementsByTagName("nav");
		for (let nav of navs) {
			let className = [...nav.classList].filter(name=>name.includes("Nav"));
			for (let link of links) {
				// console.log(nav.classList.values().filter(name=>name.contains(nav)));
				let a = document.createElement("a");
				a.href = link.href;
				a.innerText = link.name;
				a.classList.add(className+"Inner");
				nav.appendChild(a);
			}
		}
	}

	let initSoup = invert => {
		let soups = document.getElementsByClassName("soup");

		let count = 0;

		let placeSoup = () => {

			let total = 50;
			let idx = 0;
			for (soup of soups) while(soup.firstChild) soup.removeChild(soup.firstChild);
			while (total<h) {
				count++;
				let {pathName,name,href} = links[idx];
				for (let soup of soups) {
					let el = document.createElement("a");
					el.href = href;
					el.classList.add("soupImg");
					let img = document.createElement("img");
					if (invert) img.src = "asset/soupInverse"+pathName+".png";
					else        img.src = "asset/soup"       +pathName+".png";
					el.appendChild(img);
					if (invert) {
						el.onmouseout  = e => e.target.src = "asset/soupInverse"+pathName+".png";
						el.onmouseover = e => e.target.src = "asset/soup"       +pathName+".png";
					} else {
						el.onmouseover = e => e.target.src = "asset/soupInverse"+pathName+".png";
						el.onmouseout  = e => e.target.src = "asset/soup"       +pathName+".png";
					}
					soup.appendChild(el);
				}
				
				// total+=62.5;
				total+=55.5;
				idx++;
				idx = idx%links.length;
			}
		}

		//TODO: add up sections
		let sections = document.getElementsByTagName("section");
		let h = 0;
		let lastHeight = 0;
		let f = () => {
			h = 0;
			requestAnimationFrame(f);
			for (let s of sections) h+=s.scrollHeight;
			// var h = document.body.scrollHeight;
			if (h!==lastHeight) placeSoup();
			lastHeight = h;
		}; f();
			
		
	}
	let bla = invert => {

		let soups = document.getElementsByClassName("soup");
		// console.log(document.getElementsByClassName("souporsalad")[0].scrollHeight);
		// console.log(document.getElementById("container").scrollHeight);
		// console.log(links.length*100);
		// let soupor = document.getElementsByClassName("souporsalad")[0];
		let soupor = document.body;
		window.addEventListener('load',e=>{
			let count = 0;
			let h = document.body.scrollHeight;
			let total = 62.5;
			let idx = 0;
			while (total<h) {
				count++;
				let {pathName,name,href} = links[idx];
				for (let soup of soups) {
					let el = document.createElement("a");
					el.href = href;
					el.classList.add("soupContainer");
					let img = document.createElement("img");
					if (invert) img.src = "asset/soupInverse"+pathName+".png";
					else        img.src = "asset/soup"       +pathName+".png";
					el.appendChild(img);
					if (invert) {
						el.onmouseout  = e => e.target.src = "asset/soupInverse"+pathName+".png";
						el.onmouseover = e => e.target.src = "asset/soup"       +pathName+".png";
					} else {
						el.onmouseover = e => e.target.src = "asset/soupInverse"+pathName+".png";
						el.onmouseout  = e => e.target.src = "asset/soup"       +pathName+".png";
					}
					soup.appendChild(el);
				}
				// total+=62.5;
				total+=1000;
				// total+=1000;
				idx++;
				idx = idx%links.length;
			}
			let f = () => {document.getElementsByClassName("souporsalad")[0].style.height = 9645 +"px";console.log(document.getElementById("container").scrollHeight,h);requestAnimationFrame(f);};
			// f();
		});
		// let container = document.getElementById("container");
		// let soup = document.getElementsByClassName("soup");
		// let h = container.scrollHeight
		// let totalSoupHeight = 0;
		// 	for (let i = 0;i<1;++i) {
		// 		for (let link of links) {
		// 			let page = link.pathName;
		// 			for (let container of soup) {
		// 			let el = document.createElement("a");
		// 			// let a = document.createElement("a");
		// 			el.href = link.href;
		// 			// console.log(link.href);
		// 			// a.classList.add("link");
		// 			// el.appendChild(a);
		// 			el.classList.add("soupContainer");
		// 			let img = document.createElement("img");
		// 			if (invert) img.src = "asset/soupInverse"+page+".png";
		// 			else        img.src = "asset/soup"       +page+".png";
		// 			el.appendChild(img);
		// 			if (invert) {
		// 				el.onmouseout  = e => e.target.src = "asset/soupInverse"+page+".png";
		// 				el.onmouseover = e => e.target.src = "asset/soup"       +page+".png";
		// 			} else {
		// 				el.onmouseover = e => e.target.src = "asset/soupInverse"+page+".png";
		// 				el.onmouseout  = e => e.target.src = "asset/soup"       +page+".png";
		// 			}
		// 			container.appendChild(el);
		// 		}
		// 	}
		// }
	}