function showName(nama, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama) {
        resolve(nama);
      } else {
        reject("Nama tidak valid");
      }
    }, delay);
  });
}

showName("Jane", 500)
  .then((result) => {
    console.log(result);
    return showName("John", 1500);
  })
  .then((result) => {
    console.log(result);
    return showName("Ed", 2000);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function tampilSemua() {
  try {
    const nama3 = await showName("Jane", 500);
    console.log(nama3);

    const nama1 = await showName("John", 1500);
    console.log(nama1);

    const nama2 = await showName("Ed", 2000);
    console.log(nama2);
  } catch (error) {
    console.log(error);
  }
}

tampilSemua();
