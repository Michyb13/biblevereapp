const bibleVerse = document.getElementById("bible-verse")
const bibleChapter = document.getElementById("bible-chapter")
const generateBtn = document.getElementById("generate")
const book = document.getElementById("book")
const chapterNumber = document.getElementById("chapter-number")
const verseNumber = document.getElementById("verse-number")
const error = document.getElementById("error")
const apiUrl = "https://bible-api.com/"


  async function bibleData(Book,Chapter,Verse){
    const response =   await fetch(`${apiUrl}${Book}${Chapter}:${Verse}`)
    if(response.status === 404){
        error.innerHTML ="Scripture Not Found! Try Again."
     }else{
    let data =  await response.json()
    
    bibleChapter.innerHTML = data.reference
    bibleVerse.innerHTML = data.verses[0].text

}
  }

  

generateBtn.addEventListener("click", function(){
    bibleData(book.value,chapterNumber.value,verseNumber.value)
    book.value=""
    chapterNumber.value=""
    verseNumber.value=""
})






















// "https://labs.bible.org/api/?passage=random&type=json"