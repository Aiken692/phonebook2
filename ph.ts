const fs = require('fs');
import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
class phoneBook{
    phone_book = [];

    addContact(name,phone){
            fs.readFile('phbook.json', (err, data) => {
                if (err) throw err;
                this.phone_book = JSON.parse(data);
                
                this.phone_book.push(
                    {
                        name,
                        phone
                    });
                console.log(this.phone_book);
                data = JSON.stringify(this.phone_book)
                fs.writeFile("phbook.json" ,data, (err)=>{
                    if(err) throw console.log(err);
                });
            });
        return this.phone_book  
    }

    deleteContact(delNameInput){
        fs.readFile('phbook.json', (err, data) => {
            if (err) throw err;
            this.phone_book = JSON.parse(data);

            const nameIndex = this.phone_book.map(a => a.name).indexOf(delNameInput)

            console.log(nameIndex);
            
            this.phone_book.splice(nameIndex,1);
            console.log(this.phone_book);
            data = JSON.stringify(this.phone_book)
            fs.writeFile("phbook.json" ,data, (err)=>{
                if(err) throw console.log(err);
            });
        });
        return this.phone_book  
    }

    updateContact(oldNameInput,name,phone){
        fs.readFile('phbook.json', (err, data) => {
            if (err) throw err;
            this.phone_book = JSON.parse(data);

            const nameIndex = this.phone_book.map(a => a.name).indexOf(oldNameInput)
            
            this.phone_book[nameIndex]= {name,phone};
            console.log(this.phone_book);
            data = JSON.stringify(this.phone_book)
            fs.writeFile("phbook.json" ,data, (err)=>{
                if(err) throw console.log(err);
            });
        });
        return this.phone_book  
    }

    viewContact(nameInput){
        fs.readFile('phbook.json', (err, data) => {
            if (err) throw err;
            this.phone_book = JSON.parse(data);

            const nameIndex = this.phone_book.map(a => a.name).indexOf(nameInput)

            console.log(nameIndex);
            
            this.phone_book[nameIndex];
            console.log(this.phone_book[nameIndex]);
            data = JSON.stringify(this.phone_book)
            fs.writeFile("phbook.json" ,data, (err)=>{
                if(err) throw console.log(err);
            });
        });
        return this.phone_book
    }

    viewAllContacts(){
        fs.readFile('phbook.json', (err, data) => {
            if (err) throw err;
            this.phone_book = JSON.parse(data);

            console.log(this.phone_book);
            data = JSON.stringify(this.phone_book)
            fs.writeFile("phbook.json" ,data, (err)=>{
                if(err) throw console.log(err);
            });
        });
        return this.phone_book
    }


}

const personcart = new phoneBook();

function add(){
    rl.question('Enter a name: ',(nameInput)=>{   
        rl.question('Add a phone number: ',(phoneInput)=>{
            personcart.addContact(nameInput,phoneInput);
            
            rl.close()
        })
    }) 
}

function del(){
        rl.question('Enter a name: ',(delNameInput)=>{   
        personcart.deleteContact(delNameInput);
        rl.close()
    })
}

function update(){
    rl.question('Enter a name to update: ',(oldNameInput)=>{ 
        rl.question('Enter a name: ',(updateNameInput)=>{   
            rl.question('Add a phone number: ',(updatePhoneInput)=>{
                personcart.updateContact(oldNameInput,updateNameInput,updatePhoneInput);
                
                rl.close()
            })
        })
    })
}

function viewOne(){
    rl.question('Enter a name to search: ',(nameInput)=>{ 
        personcart.viewContact(nameInput);
        rl.close()
    })
}

function viewAll(){
    personcart.viewAllContacts();
    rl.close()
    
}


console.log("Enter 'a' to add contact");
console.log("Enter 'b' to delete contact");
console.log("Enter 'c' to update contact");
console.log("Enter 'd' to view a single contact");
console.log("Enter 'e' to view all contacts");

rl.question('What do you want to do: ',(choice)=>{ 
    if(choice=='a'){
        add();
    }
    else if(choice=='b'){
        del();
    }
    else if(choice=='c'){
        update();
    }
    else if(choice=='d'){
        viewOne();
    }
    else if(choice=='e'){
        viewAll();
    }
    
})

