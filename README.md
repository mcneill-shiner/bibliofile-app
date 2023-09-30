# Introduction

Book Tracker is built using the MVC Architecture, local auth, and (eventually) utilizing a book API for search and display 

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Things to add: Finishing the Discover/API usage

1) Rework autofill to only display title & author, maybe on one line. Limit autofill results to something reasonable...10-ish?

2) Finish off the autofill search: Add event listeners to each autofill/display result, and save each as a global object.  On click, clear input and display only that result below with "add book" button. Also look into debounching for the inputs. 
  
3) Create full search: "search" button next to input so that user can display full search results if they don't see what they want in autofill results.  On click, clear input and display each result below with "add book" button

4) Add book functionality (put request): save title, author, and cover image to db for user

5) Once all API/Discover page functionality is good, Rework Bookshelf page to display title/author/cover image for each, plus completed/delete buttons. Maybe a grid format

Bonus: Look into whether a different book API would be more reliable re: covers.  This one has listings for a million different editions of each book, and it's hard to consistently get a cover image.

Bonus #2: Look for a faster way to handle the autofill search.  Possibly using jQuery scripts OR React.

# Things to add: Other potential features

Add a page tracker to bookshelf, and display percentage read

