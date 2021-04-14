import {fetch} from 'whatwg-fetch'
var baseUrl = 'http://localhost:8000';

var service = {
  get (url) {
    return fetch(baseUrl + url)
    .then(function(response) {
      return response.json();
    });
  },
  post(url,body) {
    console.log('mybody',body);
    fetch(baseUrl + url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
}

export default service;