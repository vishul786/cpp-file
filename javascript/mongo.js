/*

{
    name:'Complete Java Book',
    pages=500,
    price=1000
}

insert: use both pass single and multiple records as well 
      --- but is deprecated after 3.2 use only either insertOne or insertMany
Syntax:   db.books.insert({attributes that should be inserted})

insertOne: store and pass onlu single record/element
       ----- single--object as parameter
Syntax:   db.books.insertOne({attributes that should be inserted})


insertMany: pass multiple record/objcets
     ----multiple ---array as parameter


*********how we update the data**********
similarly we have 3 methods

update:
db.books.update( { _id: ObjectId("64da297c3016edc3f83631af") }, {$set:{ name: 'The Complete Reference', pages: 770, price: 2000 }} ) 


updateOne:
db.books.updateOne({ObjectId},{$set:{attributes that should be changed }})

updateMany:


bulkwrite:


**********Delete the object***********

remove():we pass id and parameter that matches and then remove required object and attribute
           -----it is similiar to insert and update

deleteOne(): to delete one object at a time


deleteMany(): to delete multiple objects at a time



findOneandDelete():


********Common attributes that enhance the view*****
limit(n) : used to display first n records only 

sort({attributeName:+1 or -1}) : used to sort the records in certain order
     ------- (+1)---for ascending order
     ------- (-1)---for descending order




*/