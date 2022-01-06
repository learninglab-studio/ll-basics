#!/usr/bin/env node

var figlet = require('figlet');
var clear = require('clear');
var yargs = require('yargs').argv;
const { red, cyan, yellow, grey, divider } = require(`./src/utilities/ll-logging-tools`);

require(`dotenv`).config()
const grabStuffFromAirtable = require('./src/grab-stuff-from-airtable')

clear()
cyan(figlet.textSync(`ll-basics`))
grey(yargs)

grabStuffFromAirtable()
