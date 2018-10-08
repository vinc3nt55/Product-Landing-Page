//scrolling with vanila javaScript
		let html,body;
		window.onload = function() {
			//getting all anchor tags
			let links = document.links;
			//getting html
			html = document.documentElement;
			//getting body
			body = document.body;
			for(let i = 0; i < links.length; i++) {
				links[i].onclick = function() {
					//getting current scroll position
					let scrollTop = Math.round(body.scrollTop||html.scrollTop);
					if(this.hash !== "") {
						//preventing default anchor click behavi
						event.preventDefault();
						//getting element with id found in hash
						let hashElement = document.getElementById(this.hash.substring(1));
						let hashElementTop = 0;
						let obj = hashElement;
						while(obj.offsetParent){
							hashElementTop += obj.offsetTop;
							obj = obj.offsetParent;
						}
						//getting element's position
						hashElementTop = Math.round(hashElementTop);
						scroll(scrollTop, hashElementTop, this.hash);
					}
				};
			}
		};
		function scroll(from, to, hash){
			let timeInterval = 1; //in ms
			let prevScrollTop;
			let increment = (to > from)?10:-10;
			let scrollByPixel = setInterval(function(){
				//getting current scroll position
				let scrollTop = Math.round(body.scrollTop||html.scrollTop);
				if((prevScrollTop === scrollTop)||(to > from && scrollTop >= to) || (to < from && scrollTop <= to)) {
					clearInterval(scrollByPixel);
					//Add hash to the url after scrolling
					window.location.hash = hash;
				}else{
					body.scrollTop += increment;
					html.scrollTop += increment;
					prevScrollTop = scrollTop;
				}
			}, timeInterval);
		};