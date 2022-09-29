const options = {
  method: 'GET',
  headers: {
    'X-Cassandra-Token': 'AstraCS:liAAWxrMaOlaIXieJCpNAnJm:8cf8ab4aff3a50825a783d6109c9aa0c00fcb683f6581dd5191a48a32a5e8567'
  }
};

fetch('https://2a2a6881-76d7-4969-8f9e-b349ba164ad7-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/reviews_2/collections/michelin', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
