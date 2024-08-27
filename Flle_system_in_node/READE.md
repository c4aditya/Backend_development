In this program we will see how to create a file using node js 

* using file system we can do many things like 

1- Create a file
2- Update a file 
3- Delete A file 
4- Rename a file 
5- make copy of the file  and many more 

In this program we will see how to create a file 
syntax-
fs.writeFile(file, data[, options], callback)

1- file - name of the file  ex - "adcd.txt"
2- data - what is presetn under the particular file thats we are created in the node ex - "abcd.txt" , "hiii this is mu frist file "
3- call back function - this call back function take a input parameter (err) if err is occur while creating any file than it show else create the file in  the main file 


step 1 - Import fs using require() 
ex- const file_system = require('fs)

step 2- We have to use a call back function 
