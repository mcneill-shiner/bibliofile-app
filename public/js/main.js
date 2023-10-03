const deleteBtn = document.querySelectorAll('.del')
const bookItem = document.querySelectorAll('span.not')
const bookComplete = document.querySelectorAll('span.completed')
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
const searchResult = document.querySelectorAll('.search-result')
const selectBook = document.querySelectorAll('.select-book')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBook)
})

Array.from(bookItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(bookComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(selectBook).forEach((el)=>{
  el.addEventListener('click', addBook)
})

// search.addEventListener('input', () => searchBooks(search.value))

// Array.from(searchResult).forEach((el) => {
//   el.addEventListener('click', displayResult)
// })
            
                     

async function deleteBook(){
  console.log('Event listener is working!')
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/deleteBook', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// const searchBooks = async searchText => {
//   console.log('Event listener is working!')
//   searchText.split(' ').join('+')
//   const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyAxINEs5AYuafqj6e64ZENOp-JyKj6UTRk`)
//   const books = await res.json()

//   let matches = books.items
//   console.log(matches)
//   console.log(`HTML should display ${matches.length} matches.`)
//   console.log(matches[0].volumeInfo.imageLinks.thumbnail)

//   if (searchText != '') {
//     matchList.innerHTML = ''
//   }

//   // storeSearchResults(matches)
//   outputHtml(matches)

//   console.log(matches)
// }

// const outputHtml = matches => {
//   if (matches.length > 0) {
//     console.log('We have matches!')
//     const html = matches.map(match => `
//       <div class="search-result flex flex-col justify-center">
//         <img src="${match.volumeInfo.imageLinks.thumbnail}" alt="${match.volumeInfo.title} Cover" class="book-cover">
//         <div>
//           <h4 class="italic">${match.volumeInfo.title}</h4>
//           <span>${match.volumeInfo.authors[0]}</span>
//         </div>
//       </div>
//     `
//     ).join('')

//     matchList.innerHTML = html
//   }
// }

// const displayResult = 

