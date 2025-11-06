const API_KEY = 'live_m5WVjh8WDktqF6Av3UiYrYjbC8W9Apr8nVYrxAQApktG62PAvihGIvhjb7LjMzAg'
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${API_KEY}`;
const API_URL_FAV = `https://api.thecatapi.com/v1/favourites?limit=5&order=DESC&page=1`; //&api_key=${API_KEY}
const API_URL_UPLOAD = `https://api.thecatapi.com/v1/images/upload`;
const API_URL_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`; //?api_key=${API_KEY}