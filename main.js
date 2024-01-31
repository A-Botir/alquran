fetch(`https://api.alquran.cloud/v1/quran/ar.alafasy`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data);
  });