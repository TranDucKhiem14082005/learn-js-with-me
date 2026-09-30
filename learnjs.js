// /* cách làm việc với mảng

// 1. To String
// 2. Join 
// 3. Pop
// 4. Push
// 5. Shift
// 6. Unshift
// 7. splicing
// 8. Concat
// 9. Slicing

// */
// var languages = ["JavaScript", "PHP", "Ruby"];

// console.log(languages.pop()); // xoa pt cuoi cung va in ra pt do
// console.log(languages);
// console.log(languages.push("Ruby"));
// console.log(languages);

// console.log(languages.shift()); // xoa pt dau tien va in ra pt do
// console.log(languages);
// console.log(languages.unshift("Dart")); // Them pt vao dau mang va tra ve do dai cua mang
// console.log(languages);

// var languages2 = ["Dart", "Java", "C#"];

// console.log(languages.concat(languages2));// noi 2 mang lai voi nhau va tra ve mot mang chinh co pt o 2 mang

// console.log(languages.slice(0,2)); // cat 1 mang moi tu mang cu, 
// // tra ve 1 mang moi co cac pt tu vi tri bat dau den vi tri ket thuc (khong bao gom vi tri ket thuc)


//------------------//

// Hàm trong JS

// function showDialog() {
//     alert("hiển thị thông báo");
// }

// showDialog();

// function writeLog() {
//     myString = "";
//     for(var param of arguments) {
//         myString += `${param} - `;
//     }
//     console.log(myString);
// }
// writeLog("Test 1", "test 2", "test 3");


//----------------------------------------------------
/**
    Toán tử chuỗi - String operator

 */

// var firstName = "Tran";
// var lastName = "Khiem";

// console.log(firstName + " " + lastName); // Nối chuỗi


//----------------------------------------------------
/**
 * Kiểu dữ liệu trong JavaScript
    1. Kiểu nguyên thủy (Primitive data type)
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol (ES6)
        - BigInt (ES2020)
    2. Kiểu phức tạp 
        - Array
        - Object
        - Function


 */

var a = 1; // Number
var fullName1 = 'Tran Khiem'; // String
var fullName2 = 'Tran \'Khiem\'';// Str
console.log(fullName2);

var isSuccess = true; // Boolean

var age; // Undefined: Định nghĩa ra một biến nhưng không gán giá trị cho nó
console.log(age);

var isNull = null; // Null: không có thứ gì cả

var id = Symbol('id'); // Symbol: giá trị duy nhất, không thể trùng nhau

// Function
// var myFunction = function() {
//     alert('Hiển thị thông báo');
// }

// myFunction(); // gọi hàm


// Object
var myObject = {
    name: 'Khiem Tran',
    age: 21,
    address: 'Nha Trang',
    myFunction: function() {

    }
};

console.log('myObject: ', myObject);

// Array
var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
]

console.log('myArray: ', myArray);