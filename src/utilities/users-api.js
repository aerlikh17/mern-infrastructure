const BASE_URL = '/api/users';
import sendRequest from './send-request'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
  }
  
export function login(credentials) {
   return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}