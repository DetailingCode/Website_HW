
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')


const showCookie = () => {
	const cookieRemove = localStorage.getItem('cookie')
	
	if (cookieRemove) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()



// const cookieBox = document.querySelector(".cookie-box");
// const cookieBtn = document.querySelector(".cookie-btn");

// const showCookie = () => {
// 	const cookieAccept = localStorage.getItem("cookie");
// 	if (cookieAccpet) {
// 		cookieBox.classList.add("hide");
// 	}
// };

// const handleCookiesBox = () => {
// 	localStorage.setItem("cookie", "true");
// 	cookieBox.classList.add("hide");
// };

// cookieBtn.addEventListener("click", handleCookiesBox);
// showCookie()