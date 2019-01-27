
axios.get('https://api.github.com/users/tornoki')
  .then( (res) => {
    target = document.getElementById('output');
    target.insertAdjacentHTML('beforeend', res.data.avatar_url);
  })
  .catch( (res) => {
    console.error( res );
  });

const insertToElement = (id, word) => {
  targetElementId = document.getElementById(id);
  targetElementId.insertAdjacentHTML('beforeend', word);
};

insertToElement('test_id', 'test word');
