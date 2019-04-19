const connection = require("../dbconfig/connection.js");
const authors = {
    createAuthor: (data, cb) => {
        connection.query(`INSERT INTO AUTHOR VALUES (${data.AuthorNum}, '${data.AuthorLast}', '${data.AuthorFirst}')`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    getAllAuthors: cb => {
        connection.query('SELECT * FROM AUTHOR', function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    getAuthor: (id, cb) => {
        connection.query(`SELECT * FROM AUTHOR WHERE AuthorNum = '${id}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    deleteAuthor: (id, cb) => {
        connection.query(`DELETE FROM AUTHOR WHERE AuthorNum = '${id}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    },
    updateAuthor: (data, cb) => {
        connection.query(`UPDATE AUTHOR SET AuthorFirst = '${data.AuthorFirst}', AuthorLast = '${data.AuthorLast}  WHERE AuthorNum = '${data.AuthorNum}'`, function (error, results) {
            if (error) {
                cb(400, error)
                console.log(error);
                return;
            }
            cb(200, results)
        });
    }
};

module.exports = authors;
