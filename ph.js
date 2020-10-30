"use strict";
exports.__esModule = true;
var fs = require('fs');
var inquirer = require('inquirer');
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var phoneBook = /** @class */ (function () {
    function phoneBook() {
        this.phone_book = [];
    }
    phoneBook.prototype.addContact = function (name, phone) {
        var _this = this;
        fs.readFile('phbook.json', function (err, data) {
            if (err)
                throw err;
            _this.phone_book = JSON.parse(data);
            _this.phone_book.push({
                name: name,
                phone: phone
            });
            console.log(_this.phone_book);
            data = JSON.stringify(_this.phone_book);
            fs.writeFile("phbook.json", data, function (err) {
                if (err)
                    throw console.log(err);
            });
        });
        return this.phone_book;
    };
    phoneBook.prototype.deleteContact = function (delNameInput) {
        var _this = this;
        fs.readFile('phbook.json', function (err, data) {
            if (err)
                throw err;
            _this.phone_book = JSON.parse(data);
            var nameIndex = _this.phone_book.map(function (a) { return a.name; }).indexOf(delNameInput);
            console.log(nameIndex);
            _this.phone_book.splice(nameIndex, 1);
            console.log(_this.phone_book);
            data = JSON.stringify(_this.phone_book);
            fs.writeFile("phbook.json", data, function (err) {
                if (err)
                    throw console.log(err);
            });
        });
        return this.phone_book;
    };
    phoneBook.prototype.updateContact = function (oldNameInput, name, phone) {
        var _this = this;
        fs.readFile('phbook.json', function (err, data) {
            if (err)
                throw err;
            _this.phone_book = JSON.parse(data);
            var nameIndex = _this.phone_book.map(function (a) { return a.name; }).indexOf(oldNameInput);
            _this.phone_book[nameIndex] = { name: name, phone: phone };
            console.log(_this.phone_book);
            data = JSON.stringify(_this.phone_book);
            fs.writeFile("phbook.json", data, function (err) {
                if (err)
                    throw console.log(err);
            });
        });
        return this.phone_book;
    };
    phoneBook.prototype.viewContact = function (nameInput) {
        var _this = this;
        fs.readFile('phbook.json', function (err, data) {
            if (err)
                throw err;
            _this.phone_book = JSON.parse(data);
            var nameIndex = _this.phone_book.map(function (a) { return a.name; }).indexOf(nameInput);
            console.log(nameIndex);
            _this.phone_book[nameIndex];
            console.log(_this.phone_book[nameIndex]);
            data = JSON.stringify(_this.phone_book);
            fs.writeFile("phbook.json", data, function (err) {
                if (err)
                    throw console.log(err);
            });
        });
        return this.phone_book;
    };
    phoneBook.prototype.viewAllContacts = function () {
        var _this = this;
        fs.readFile('phbook.json', function (err, data) {
            if (err)
                throw err;
            _this.phone_book = JSON.parse(data);
            console.log(_this.phone_book);
            data = JSON.stringify(_this.phone_book);
            fs.writeFile("phbook.json", data, function (err) {
                if (err)
                    throw console.log(err);
            });
        });
        return this.phone_book;
    };
    return phoneBook;
}());
var personcart = new phoneBook();
function add() {
    rl.question('Enter a name: ', function (nameInput) {
        rl.question('Add a phone number: ', function (phoneInput) {
            personcart.addContact(nameInput, phoneInput);
            rl.close();
        });
    });
}
function del() {
    rl.question('Enter a name: ', function (delNameInput) {
        personcart.deleteContact(delNameInput);
        rl.close();
    });
}
function update() {
    rl.question('Enter a name to update: ', function (oldNameInput) {
        rl.question('Enter a name: ', function (updateNameInput) {
            rl.question('Add a phone number: ', function (updatePhoneInput) {
                personcart.updateContact(oldNameInput, updateNameInput, updatePhoneInput);
                rl.close();
            });
        });
    });
}
function viewOne() {
    rl.question('Enter a name to search: ', function (nameInput) {
        personcart.viewContact(nameInput);
        rl.close();
    });
}
function viewAll() {
    personcart.viewAllContacts();
    rl.close();
}
console.log("Enter 'a' to add contact");
console.log("Enter 'b' to delete contact");
console.log("Enter 'c' to update contact");
console.log("Enter 'd' to view a single contact");
console.log("Enter 'e' to view all contacts");
rl.question('What do you want to do: ', function (choice) {
    if (choice == 'a') {
        add();
    }
    else if (choice == 'b') {
        del();
    }
    else if (choice == 'c') {
        update();
    }
    else if (choice == 'd') {
        viewOne();
    }
    else if (choice == 'e') {
        viewAll();
    }
});
// inquirer.prompt([{
//     name:'menu',
//     type:'input',
//     message:'Menu: '
// },
// ]).then((answer)=>{
//     if(answer['name']=='Add contact'){
//         console.log('liiii');
//     }
// })
// inquirer
// .prompt([
//     {
//         name:'menu',
//         type:'list',
//         message:'Menu: ',
//         choices:['Add contact','Find Contact','Delete Contact','Update Contact']
//     },
// ])
// .then(answer => {
//         const ans = answer.menu;
//         console.info('Answer:', ans);
// })
// .then(a=>{
//     add()
//     console.log('yes');
// })
//   if( ans =='Add contact'){
//     add();
//     }
// console.log('-------------------------------------------------------------------------------------')
// del();
// console.log('-------------------------------------------------------------------------------------')
// update();
// console.log('-------------------------------------------------------------------------------------')
// viewOne();
// console.log('-------------------------------------------------------------------------------------')
// viewAll();
// console.log('-------------------------------------------------------------------------------------')
