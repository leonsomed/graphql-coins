const { gql } = require('apollo-server');
const fs = require('fs');

const files = fs.readdirSync(__dirname);

const types = files
  .filter(file => file.includes('.gql'))
  .map((file) => fs.readFileSync(__dirname + '/' + file, 'utf8'))
  .join('');

const typeDefs = gql`${types}`;

module.exports = typeDefs;
