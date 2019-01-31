
axios.get('https://api.github.com/users/tornoki')
  .then( (res) => {
    target = document.getElementById('output');
    target.insertAdjacentHTML('beforeend', res.data.avatar_url);
  })
  .catch( (res) => {
    console.error( res );
  });

function insertToElement(id, word) {
  targetElementId = document.getElementById(id);
  targetElementId.insertAdjacentHTML('beforeend', word);
}

let url = 'https://api.github.com/users/tornoki';

async function testFunc(url) {
  const result = await axios.get(url);
  insertToElement('test_id', result.data.avatar_url);
}

testFunc(url);

//axios.get()は時間がかかる処理のためPromiseオブジェクトを返す.
async function returnAPI(url) {
  const result = await axios.get(url);
  let x = result.data.id
  return x;
}

returnAPI(url).then((result) => {
  insertToElement('test_id2', result);
});

//だめな例
let var1 = axios.get(url).then((response) => {
  let items = response.data.id;
  console.log(items);
});
console.log(var1);
