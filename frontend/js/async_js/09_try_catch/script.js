// const user = {
//     name: 'Sujit',
//     age: 29
// }

// try {
//     console.log(user.address.city);

// } catch(err) {
    // we can accept parameter in catch only. This is not available in try and finally block.
//     console.dir(err.message);
//     console.dir(err.name);

// } finally{
//     console.log('finally runs in every case. similarly also runs in every case');
// }

// console.log(3+7);
// console.log('hello');

async function makeAsyncRequest() {
  try {
    const url =
      "https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

makeAsyncRequest();
