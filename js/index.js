const toggleClass = (id, className) => {
	const element = document.getElementById(id);
	if (element) {
		element.classList.toggle(className);
	} else {
		console.error('Element with ID ' + id + ' not found.');
	}
}

document.addEventListener("DOMContentLoaded", function () {
	/* ACCARDION CODE */
	const accordionButtons = document.querySelectorAll(".accordion-button");

	accordionButtons.forEach(button => {
		button.addEventListener("click", function () {
			const content = this.nextElementSibling;
			const activeContent = document.querySelector(".accordion-content[style]");

			if (activeContent && activeContent !== content) {
				activeContent.style.maxHeight = null;
				activeContent.previousElementSibling.classList.remove("active");
			}

			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				this.classList.remove("active");
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
				this.classList.add("active");
			}
		});
	});

	/* Sidebar active menu, hide menu items */
	const items = document.querySelectorAll(".main-content__nav-item");
	for (const item of items) {
		if (item.getAttribute('item-url') === location.pathname) {
			item.classList.add('main-content__nav-item--active');
		}
	}
});
