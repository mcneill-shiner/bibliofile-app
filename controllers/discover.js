const Book = require('../models/Book')
const fetch = require("node-fetch");


module.exports = {

    getDiscover: (req,res)=>{
        const searchResult = ''
        res.render('discover.ejs', {user: req.user, searchResult})
    },
    createBook: async (req, res)=>{
      try{
          await Book.create({book: req.body.bookItem, completed: false, userId: req.user.id})
          console.log('A new book has been added!')
          res.redirect('/books')
      }catch(err){
          console.log(err)
        }
    },
    searchBooks: async (req, res) => {
        const searchText = req.query.bookSearch
        console.log(`Search query is ${searchText}`)

        searchText.split(' ').join('+')
        const queryRes = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyAxINEs5AYuafqj6e64ZENOp-JyKj6UTRk`)
        const books = await queryRes.json()

        let matches = books.items
        console.log(`HTML should display ${matches.length} matches.`)
        console.log(matches[0].volumeInfo.imageLinks.thumbnail)

        const searchResult = matches.map(match => `
            <div class="search-result flex flex-col justify-between mx-auto items-center py-2">
                <div class="h-24">
                    <img src="${match.volumeInfo.imageLinks.thumbnail ? match.volumeInfo.imageLinks.thumbnail : ''}" alt="${match.volumeInfo.title} Cover" class="book-cover shadow-lg my-auto">
                </div>
                <div>
                    <h4 class="italic text-lg text-center">${match.volumeInfo.title}</h4>
                    <span class="text-center">${match.volumeInfo.authors[0]}</span>
                </div>
            </div>
            `
        ).join('')

        res.render('discover.ejs', {user: req.user, searchResult })

        // instead of writing to the dom, we need to res.render 

    }
}