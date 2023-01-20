//Task 1
// let fnum=+prompt("Enter first number")
// let snum=+prompt("Enter second number")
// let tnum=+prompt("Enter third number")

// let product=parseFloat(fnum)*parseFloat(snum)*parseFloat(tnum)

// if(product>0){
//     document.write(product+"<br>")
//     document.write("Product is positive <br>")
// }
// else if(product<0){
//     document.write(product+"<br>")
//     document.write("Product is negative <br>")
// }
// else if(product===0){
//     document.write(product+"<br>")
//     document.write("Product is zero <br>")
// }
// else{
//     document.write("Invalid Input")
// }

//Task 2
// for(let i=1;i<101;i++){
//     if(i%3===0&&i%5===0){
//         document.write(i+" FIZZBUZZ <br>")
//     }
//     else if(i%3===0){
//         document.write(i+" FIZZ <br>")
//     }
//     else if(i%5===0){
//         document.write(i+" BUZZ <br>")
//     }
// }

//Task 3
// let arr=[]
// let input=+prompt("How many values you want to add in array?")
// for(let i=0;i<input;i++){
// arr[i]=prompt("Enter "+i+"th value")
// }
// document.write(arr)

//Task 4 (Connected to DOM)
// function cToF(){
//     var cel=document.getElementById("celcius").value
    
//     var fahr=(parseFloat(cel)-32)*5/9;
//     document.getElementById("fahr").innerHTML=fahr
// }
// function fToC(){
//     var fahr=document.getElementById("fahrenheit").value
//     var cel=(fahr)*9/5+32;
//     document.getElementById("cel").innerHTML=cel
// }

//Task 5
// var num1=+prompt("Enter first number")
// var num2=+prompt("Enter second number")
// var sum=num1+num2
// if(num1===num2){
//     alert(3*sum)
// }
// else{
//     alert(sum)
// }

//Task 6
// let number1=+prompt("Enter first number")
// let number2=+prompt("Enter second number")
// let number3=+prompt("Enter third number")

// if(number1===number2&&number2===number3){
//     alert(30)
// }
// else if(number1===number2||number2===number3||number1===number3){
// alert(40)
// }
// else{
//     alert(20)
// }

//Task 7
// var number=+prompt("enter a number to compute factors")
// document.write("<h1>Factors of "+number+" are:</h1>")
// for(let i=1;i<=number;i++){
//     if(number%i===0){
// document.write(i+"<br>")
//     }
// }

//Task 8
// var sentence=prompt("Enter a sentence")
// var check=sentence.charAt(sentence.length-1)
// if(check.toLowerCase()==="a"||check.toLowerCase()==="e"||check.toLowerCase()==="i"||check.toLowerCase()==="o"||check.toLowerCase()==="u"){
//     document.write("Given string ends with a vowel")
// }
// else{
//     document.write("Given string ends with a consonant")
// }