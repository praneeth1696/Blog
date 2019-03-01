// addblog.js

var sql = require('mssql/msnodesqlv8');
const Schema = mssql.Schema;

// Define collection and schema for addblogs
let Addblog = new Schema({
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  }
},{
    collection: 'addblogs'
});

module.exports = mongoose.model('Addblog', Addblog);