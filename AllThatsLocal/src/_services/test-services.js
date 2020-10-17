export default class TestService {
  getTestData() {
    return fetch('http://localhost:8080/testAPI/')
      .then(response => response.json())
      .then(data => Promise.resolve(data))
  }

  createGuide(data) {
    const headers = {
      Accept: 'applicatoin/json',
      'Content-Type': 'application/json',
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }
    console.log('options:', options);
    return fetch('http://localhost:8080/testAPI/add', options)
      .then(response => response.json())
      .then(data => Promise.resolve(data))
  }
}
