	let photos = [];
	let currentIdx = 0;
	let totalPictures = 0;
	let captions;
	readTextFile = (file) => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {if(rawFile.readyState === 4) if(rawFile.status === 200 || rawFile.status == 0) captions =rawFile.responseText.split(/\r?\n/);}
		rawFile.send(null);
	}
	initGallery = (path,numOfPics,id="photoGallery",size=150) => {
		readTextFile(path+"/captions.txt");
		let photoGallery = document.getElementById(id);
		photoGallery.style["grid-template-columns"] = "repeat(auto-fill, minmax("+size+"px, 1fr))";
		let model = document.getElementById("modal");
		let setPhoto = i => {
			let pLs = document.getElementsByClassName("galleryPhoto");
			i = i<=0 ? pLs.length-1 : (i-1)%pLs.length;
			for (let p of pLs) {p.style.display = "none"}
			pLs[i].style.display = "block";
			modal.style.display = "block";
			pLs[i].style["padding-top"] = (innerHeight - pLs[i].height)/2;
			currentIdx = i+1;
			caption.innerHTML = captions[i];
		}
		let right = document.createElement("span");
		let left = document.createElement("span");
		let caption = document.createElement("p");
		caption.classList = "caption";
		right.classList = "right"
		left.classList  = "left"
		right.innerText = ">";
		left.innerText  = "<";

		let prev = document.createElement("button");
		prev.classList = "navButton prevButton";
		prev.appendChild(left);
		// prev.innerText = "PREVIOUS";
		prev.onclick = () => setPhoto(currentIdx-1);
		model.appendChild(prev);

		for (let i = 1; i<=numOfPics; ++i) {
			let img     = document.createElement("img");
			let fullImg = document.createElement("img");
			photos.push(img);
			    img.src = path+i+".jpg";
			fullImg.src = path+i+".jpg";
			fullImg.classList = "galleryPhoto";
			img.classList = "photo";
			img.style.width = size;
			img.style.height = size;
			let index = photos.length;
			img.onclick = () => setPhoto(index);
			photoGallery.appendChild(img);
			model.appendChild(fullImg);
			model.appendChild(fullImg);
		}
		totalPictures+=numOfPics;

		let next = document.createElement("button");
		next.classList = "navButton nextButton";
		next.onclick = () => setPhoto(currentIdx+1);
		model.appendChild(next);
		// next.innerText = "NEXT";
		next.appendChild(right);

		let close = document.createElement("button");
		close.classList = "navButton closeButton";
		close.onclick = () => model.style.display = "none";
		close.innerText = "X";
		model.appendChild(close);
		model.appendChild(caption);

		onkeydown = (e) => {

			if (model.style.display == "none"||!model.style.display) return
			switch (e.key){
				case "ArrowLeft" : setPhoto(currentIdx-1); break;
				case "ArrowRight" : setPhoto(currentIdx+1); break;
				default : model.style.display = "none";
			}

		}
	}
	// onkeydown = (e) => {setPhoto(currentIdx-1)}