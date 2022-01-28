const baseUrl = 'https://task-backend-node-api.herokuapp.com'

export default async (url, data, method = 'POST') => {

  const APIURL = [baseUrl, url].join('/');

  const requestOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  return new Promise((resolve, reject) => {
    fetch(APIURL, requestOptions)
      .then(response => response.json())
      .then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      });
  })
}