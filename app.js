function changeIframe(newSrc) {
	document.getElementById('showcase-display-iframe') ? (document.getElementById('showcase-display-iframe').src = newSrc) : null;
}

document.querySelectorAll('.showcase-list-item').forEach(function (item) {
	item.addEventListener('click', function () {
		document.querySelectorAll('.showcase-list-item-active').forEach(function (item) {
			item.classList.remove('showcase-list-item-active');
		});
		item.classList.add('showcase-list-item-active');
	});
});

// Theme changer
let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
	document.documentElement.setAttribute('data-theme', 'light');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/moon.svg';
	});
} else {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
		item.src = '/assets/svg/sun.svg';
	});
}
const switchTheme = () => {
	currentTheme = localStorage.getItem('theme');
	if (currentTheme === 'light') {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.getElementById('showcase-display-iframe')?.contentWindow.location.reload();
		localStorage.setItem('theme', 'dark');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/sun.svg';
		});
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		document.getElementById('showcase-display-iframe')?.contentWindow.location.reload();
		localStorage.setItem('theme', 'light');
		document.querySelectorAll('.theme-changer-icon').forEach(function (item) {
			item.src = '/assets/svg/moon.svg';
		});
	}
};

document.querySelectorAll('.theme-changer').forEach((e) => e.addEventListener('click', switchTheme));

switch (window.location.hash) {
	case '#alert':
		changeIframe('../../pages/components/alert/alert.html');
		break;

	case '#avatar':
		changeIframe('../../pages/components/avatar/avatar.html');
		break;

	case '#badge':
		changeIframe('../../pages/components/badge/badge.html');
		break;

	case '#button':
		changeIframe('../../pages/components/button/button.html');
		break;

	case '#card':
		changeIframe('../../pages/components/card/card.html');
		break;

	case '#image':
		changeIframe('../../pages/components/image/image.html');
		break;

	case '#input':
		changeIframe('../../pages/components/input/input.html');
		break;

	case '#list':
		changeIframe('../../pages/components/list/list.html');
		break;

	case '#modal':
		changeIframe('../../pages/components/modal/modal.html');
		break;

	case '#navigation':
		changeIframe('../../pages/components/navigation/navigation.html');
		break;
	case '#rating':
		changeIframe('../../pages/components/rating/rating.html');
		break;

	case '#text-utilities':
		changeIframe('../../pages/components/text-utilities/text-utilities.html');
		break;
	case '#slider':
		changeIframe('../../pages/components/slider/slider.html');
		break;

	case '#grid':
		changeIframe('../../pages/components/grid/grid.html');
		break;

	default:
		changeIframe('/pages/getting-started/introduction/introduction.html');
		break;
}
