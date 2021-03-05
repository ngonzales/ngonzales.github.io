	let photos = [];
	let currentIdx = 0;
	let totalPictures = 0;

	initGallery = (path,numOfPics,id="photoGallery",size=150) => {

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
		}
		let right = document.createElement("span");
		let left = document.createElement("span");
		right.classList = "chevron right"
		left.classList = "chevron left"

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



		onkeydown = (e) => {model.style.display = "none";}
	}
	// onkeydown = (e) => {setPhoto(currentIdx-1)}