$(window).on('load', function() {
	var tabsRecommend = $('.recommend__tabs p');

	tabsRecommend.click(function () {
		if (!$(this).hasClass('active')) {
			tabsRecommend.removeClass('active');
			$(this).addClass('active');
			$('.recommend__content-item').hide().eq($(this).index()).fadeIn(300);
		}
	});

	setTimeout(function () {
		var dropdown = $('.recommend__wrapper .choices');

		dropdown.change(function () {
			$('.recommend__content-item').hide().eq($('.choices__item.is-selected').index()).fadeIn(300);
		});
	}, 100);

	const defaultChoicesOptions = {
		silent: false,
		items: [],
		choices: [],
		renderChoiceLimit: -1,
		maxItemCount: -1,
		addItems: true,
		addItemFilter: null,
		removeItems: true,
		removeItemButton: false,
		editItems: false,
		duplicateItemsAllowed: true,
		delimiter: ',',
		paste: true,
		searchEnabled: false,
		searchChoices: true,
		searchFloor: 1,
		searchResultLimit: 4,
		searchFields: ['label', 'value'],
		position: 'auto',
		resetScrollPosition: true,
		shouldSort: false,
		shouldSortItems: false,
		placeholder: true,
		placeholderValue: null,
		searchPlaceholderValue: null,
		prependValue: null,
		appendValue: null,
		renderSelectedChoices: 'auto',
		loadingText: 'Loading...',
		noResultsText: 'No results found',
		noChoicesText: 'No choices to choose from',
		itemSelectText: '',//'Press to select',
		/*addItemText: (value) => {
			return `Press Enter to add <b>"${value}"</b>`;
		},
		maxItemText: (maxItemCount) => {
			return `Only ${maxItemCount} values can be added`;
		},
		valueComparer: (value1, value2) => {
			return value1 === value2;
		},*/
		classNames: {
			containerOuter: 'choices',
			containerInner: 'choices__inner',
			input: 'choices__input',
			inputCloned: 'choices__input--cloned',
			list: 'choices__list',
			listItems: 'choices__list--multiple',
			listSingle: 'choices__list--single',
			listDropdown: 'choices__list--dropdown',
			item: 'choices__item',
			itemSelectable: 'choices__item--selectable',
			itemDisabled: 'choices__item--disabled',
			itemChoice: 'choices__item--choice',
			placeholder: 'choices__placeholder',
			group: 'choices__group',
			groupHeading: 'choices__heading',
			button: 'choices__button',
			activeState: 'is-active',
			focusState: 'is-focused',
			openState: 'is-open',
			disabledState: 'is-disabled',
			highlightedState: 'is-highlighted',
			selectedState: 'is-selected',
			flippedState: 'is-flipped',
			loadingState: 'is-loading',
			noResults: 'has-no-results',
			noChoices: 'has-no-choices'
		},
		// Choices uses the great Fuse library for searching. You
		// can find more options here: https://github.com/krisk/Fuse#options
		fuseOptions: {
			include: 'score'
		},
		callbackOnInit: null,
		callbackOnCreateTemplates: null
	};

	function initChoices(it, options) {
		return new Choices(it, options || defaultChoicesOptions);
	}

	const selects = document.querySelectorAll('.__js_custom-select');

	if (selects.length) {
		selects.forEach(it => {
			initChoices(it);
		});
	}

	window.initChoices = initChoices;

	document.querySelectorAll('.anchor').forEach(function(el) {
		el.onclick = function(e) {
			e.preventDefault();
			let hash = this.getAttribute('href');
			let target = document.querySelector(hash);
			let elementPosition = target.offsetTop;

			window.scrollTo({
				top: elementPosition,
				behavior: "smooth"
			});
		};
	});

	let switchLang = document.querySelector('.header__lang-swither');

	switchLang.addEventListener('click', function (e) {
		const items = document.querySelectorAll('.header__lang-swither span:not(.delimiter)'),
					target = e.target;

		items.forEach(function (el) {
			el.classList.remove('active');
		});

		target.classList.add('active');
	});


});