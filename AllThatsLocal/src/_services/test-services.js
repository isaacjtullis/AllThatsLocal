export default class TestService {
  getTestData() {
    return fetch('http://localhost:8080/testAPI/')
      .then(response => response.json())
      .then(data => Promise.resolve(data))
  }
}
