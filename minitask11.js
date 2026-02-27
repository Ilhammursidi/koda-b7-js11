// setTimeout(() => {
//   console.log("John");
// }, 1500);
// setTimeout(() => {
//   console.log("Ed");
// }, 2000);
// setTimeout(() => {
//   console.log("jane");
// }, 500);

const data = new Promise((resolve, reject) => {
  const isSuccess = false;
  if (isSuccess) {
    return reject("Gagal menampilkan nama");
  }
  return resolve(
    setTimeout(() => {
      console.log("jane");
    }, 500),
  );
});

// .catch((reason)=>{
//     console.log(`${reason}`)
// })

// setTimeout(() => {
//   console.log("John");
// }, 1500),
// setTimeout(() => {
//   console.log("Ed");
// }, 2000),
