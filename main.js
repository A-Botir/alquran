let search = document.getElementById("search");
let title = document.getElementById("title");
let texts = document.getElementById("surah");
let page = document.getElementById("page");
let audio = document.getElementById("audio");
let nom = document.getElementById("nom");
let names=document.getElementById("name")
let juz=document.getElementById("juz")
let ar_name= document.getElementById("ar_name")
let sura = "";

search.addEventListener("input", (e) => {
  let b = e.target.value;
  x(b);
});
function x(b) {
  fetch(`https://api.alquran.cloud/v1/quran/ar.alafasy`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let text = data.data.surahs;
      let arr = text.map((item) => {
        // console.log(item);
        // console.log(item.ayahs[0].page);

        if (item.englishName == b) {
          nom.innerHTML = `<p></p></p><h2>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ </h2>`;
          item.ayahs.map((item, i) => {
            if (i > 0) {
              sura += `${item.text}  (${convertToArabic(item.numberInSurah.toString())}) `;
              texts.textContent = sura;
            }
          });

          juz.textContent=`Juz ${item.ayahs[0].juz}`
          ar_name.textContent=item.name
          names.textContent=item.englishName
          console.log(item.englishNameTranslation);
          console.log(`nozil bolgan joyi "${item.revelationType}"`);
        }
      });
    });
}




function convertToArabic(text) {
    const arabicNumbers = {
      '1': '١', '2': '٢', '3': '٣', '4': '٤', '5': '٥',
      '6': '٦', '7': '٧', '8': '٨', '9': '٩', '0': '٠'
    };

    return text.replace(/\d/g, digit => arabicNumbers[digit] || digit);
  }

//   const originalTextElement = document.getElementById('originalText');
//   originalTextElement.innerHTML = convertToArabic(originalTextElement.innerHTML);
//   console.log();