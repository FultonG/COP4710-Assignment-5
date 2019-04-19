const connection = require("../dbconfig/connection.js");
const books = {
    createBook: (data, cb) => {
        connection.query(`INSERT INTO BOOK VALUES (${data.BookCode}, '${data.Title}', '${data.PublisherCode}', '${data.Type}', '${data.Price}', '${data.PaperBack}')`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    getAllBooks: cb => {
        connection.query('SELECT * FROM BOOK', function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    getBook: (id, cb) => {
        connection.query(`SELECT * FROM BOOK WHERE BookCode = '${id}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    deleteBook: (id, cb) => {
        connection.query(`DELETE FROM BOOK WHERE BookCode = '${id}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    updateBook: (data, cb) => {
        connection.query(`UPDATE BOOK SET Title = '${data.Title}', PublisherCode = '${data.PublisherCode}, Type ='${data.Type}' ,Price = '${data.Price}', PaperBack = '${data.PaperBack}'  WHERE BookCode = '${data.BookCode}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    }
};

module.exports = books;
