const connection = require("../dbconfig/connection.js");
const authors = {
    createAuthor: (data, cb) => {

    },
    getAllAuthors: cb => {
        connection.query('SELECT * FROM AUTHOR', function (error, results) {
            if (error) {
                cb(400, error)
                throw error;
            }
            cb(200, results)
        });
    },
    getAuthor: (name, cb) => {
        connection.query(`SELECT * FROM AUTHOR WHERE authorFirst LIKE %${name}%`, function (error, results) {
            if (error) {
                cb(400, error)
                throw error;
            }
            cb(200, results)
        });
    },
    deleteAuthor: (id, cb) => {
        
    },
    updateAuthor: (data, cb) => {
        
    }
};

module.exports = authors;
