
const isDev = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDev ? 'http://localhost:8000' : 'https://api.taskhola.app';

console.log('Connecting to API =>', API_BASE_URL);
