/**
 * Created by u on 2017/11/22.
 */
var Sequelize = require('sequelize');
var sqlite=require("sqlite3");
var path=require("path");
var sequelize = new Sequelize(undefined, undefined,undefined, {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: path.join(__dirname,'../databases/database.sqlite')
});

sequelize
    .authenticate()
    .then(function(err) {
    console.log('Connection has been established successfully.');
})
.catch(function(err) {
    console.error('Unable to connect to the database:', err);
});

const note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    uid:{
        type: Sequelize.STRING
    }
});
/*note.sync({
    force:true
});*/
/*note.sync().then(function() {
    // Table created
    return note.create({
        text: 'hello xll',

    }

    );
}).then(function () {
    note.findAll({raw:true}).then(function(notes){
        console.log(notes);
    });
});*/
/*/!*note.findAll({raw:true,where:{id:1}}).then(function (notes) {
    console.log(notes);
})*!/*/
module.exports.Note= note;
