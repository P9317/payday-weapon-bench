const defaultLocale = 'en';

const supportedLocales = {
    en: 'English',
	fr: 'Français',
    cn: '简体中文',
    tr: 'Türkçe',
    ru: 'Русский',
    pl: 'Polski',
    uwu: 'uwu',
};

let currentLocale = defaultLocale;

if (localStorage.getItem('locale')) {
    const storedLocale = localStorage.getItem('locale');

    if (!Object.keys(supportedLocales).includes(storedLocale)) {
        localStorage.removeItem('locale');
    } else {
        currentLocale = localStorage.getItem('locale');
    }
}

let localisations = {};

setLocale(currentLocale);

async function initialiseDefaultLocale() {
    if (!localisations[defaultLocale])
        localisations[defaultLocale] = await fetchLocalisation(defaultLocale);
}

async function setLocale(locale) {
    currentLocale = locale;

    if (!localisations[locale])
        localisations[locale] = await fetchLocalisation(locale);

    localStorage.setItem('locale', locale);

    return document
        .querySelectorAll('[data-localisation-key]')
        .forEach((element) => {
            localise(element);
        });
}

async function fetchLocalisation(locale) {
    const response = await fetch(`./lang/${locale}.json`, window.location);
    return await response.json();
}

function localise(element) {
    const key = element.getAttribute('data-localisation-key');

    let localisation = getLocalisation(key) || '';

    if (typeof localisation == 'object')
        localisation = getPluralForm(
            localisation,
            element.getAttribute('data-localisation-count')
        );

    const variables = JSON.parse(element.getAttribute('data-localisation-var'));
    localisation = interpolateLocalisation(localisation, variables);

    return (element.innerText = localisation);
}

function getLocalisation(key) {
    let locale = currentLocale;

    if (!localisations[currentLocale][key]) locale = defaultLocale;

    return localisations[locale][key];
}

function getPluralForm(localisation, count) {
    if (['ru', 'pl'].includes(currentLocale)) {
        if (count % 10 == 1 && count % 100 != 11) return localisation['one'];

        if (
            [2, 3, 4].includes(count % 10) &&
            ![12, 13, 14].includes(count % 100)
        )
            return localisation['few'] || localisation['many'];
    }

    if (count == 1) return localisation['one'];

    return localisation['many'];
}

function interpolateLocalisation(localisation, variables) {
    for (const variable in variables) {
        localisation = localisation.replaceAll(
            `{{${variable}}}`,
            variables[variable]
        );
    }

    return localisation;
}
