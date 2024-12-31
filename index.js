//b1
let arr1 = ['a', 'b', 'c'];
let arr2 = ['a', 'b', 'c'];
let result = arr1 + arr2;

let isEqual = arr1 == arr2;

//b2
let arr = [3, 7, 9, 12]; 

console.log(arr[0]);
console.log(arr[3]);


let sum = arr[1] + arr[2];
console.log(sum);


let temp = arr[1];
arr[1] = arr[3];
arr[3] = temp;
console.log(arr);

//b3
let arr = [5, 12, 7, 10, 8];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) console.log(arr[i]);
}

let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
}
console.log(min);

//b4
let arr = [];
let n = 5;
for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

//b5
let arr = [1, 2];
let n = 5;
while (arr.length < n) {
    arr.unshift(0);
}
console.log(arr);

//b6
let arr = [4, 6, 8, 10];
while (arr.length > 1) {
    arr.pop();
}
console.log(arr);

//b7
let s = "4,9,16,25";
let n = 10;


let sArr = s.split(',').map(Number);
let squaredArr = sArr.map(x => x ** 2);
console.log(squaredArr);


let filtered = sArr.filter(x => x >= n);
console.log(filtered);


let found = sArr.find(x => x === n);
console.log(found);


//TH
//b1

//tính tích
let arr = [3, 5, 2, 8];
let t3h = 1;
for (let i = 0; i < arr.length; i++) {
    t3h *= arr[i];
}
console.log("Tích các phần tử:", t3h);

//số nhỏ nhất chia hết cho 2
//Infinity: đại diện cho giá trị cực lớn dùng để tìm số nhỏ nhất( nếu ko thỏa mãn thì hiển thị là ko có)
let minSmallest = Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < minSmallest) {
        minSmallest = arr[i];
    }
}
console.log("Số nhỏ nhất chia hết cho 2:", minSmallest === Infinity ? "Không có" : minSmallest);

//số lớn nhất chia hết cho 3
//-Infinity: đại diện cho giá trị cực nhỏ dùng để tìm số lớn nhất( nếu ko thỏa mãn thì hiển thị là ko có)
let maxDivBy3 = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] > maxDivBy3) {
        maxDivBy3 = arr[i];
    }
}
console.log("Số lớn nhất chia hết cho 3:", maxDivBy3 === -Infinity ? "Không có" : maxDivBy3);

//Tính giá trị trung bình
function calculateTheAverage(){
    var n = prompt("Nhập dữ liệu")

    const numberArray = n.split(',').map(num => parseFloat(num.trim()))

    if (numberArray.some(isNaN), !n.includes(',')){
        alert('Dữ liệu bạn vừa nhập không hợp lệ, phải có dấu ( , ) ngăn cách')
        document.getElementById('n').focus();
        return;
    }

    const sum = numberArray.reduce((total, num) => total + num, 0)
    const average = sum / numberArray.length

    console.log(`Ket qua la: ${average.toFixed(2)}`);
    alert(`Trung binh cong: ${average.toFixed(2)}`)
    
}
calculateTheAverage()


//-Lọc ra các số nguyên tố trong mảng.
var n = parseFloat(prompt("Nhập số nguyên tố"))

if (n <= 1){
    console.log(`${n}Khong phai la so nguyen to`)
} else{
    let isPrime = true

    for(let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            isPrime = false
            break;
        }
    }

    if(isPrime){
        console.log(`${n} la so nguyen to.`);
    }else{
        console.log(`${n} khong la so nguyen to.`);
    }
}

//-Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
var b = [1, 3, 50, 140, 4, 8, 90, 5, 100, 200]
const numberUndo10 = b.filter(nb => nb < 10)
console.log('Số nhỏ hơn 10 là: ', numberUndo10);


//-Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
function checked(a, number, testtype){

    if (testtype === "lon_hon"){
        return a.filter(x => x > number)
    }else if (testtype === "nho_hon"){
        return a.filter(x => x < number)
    }else{
        throw new Error("kieu kiem tra phai la dang 'lon_hon' or 'nho_hon'")
    }
}

function main(){
    var a = [2, 4, 6, 8, 24, 50, 18, 26, 40, 20]
    const number = 20

    const numberMax20 = checked(a, number, "lon_hon")
    console.log('Số lớn hơn 20 là: ', numberMax20);

    const numberMin20 = checked(a, number, "nho_hon")
    console.log('Số nhỏ hơn 20 là: ', numberMin20);
}
// goi ham
main()

//-Nhập vào số n cho đến khi n là 1 số trong mảng s.
function checked(){
    var n = Number(prompt("Nhập số (nhấn Cancel để thoát!!! nếu bạn lười không muốn nhập kkk)"))
    const s = [2, 3, 5, 8, 10, 12, 20, 18]

    if (s.includes(n)){
        alert(`Số ${n} hợp lệ.`)
    }else{
        alert(`Số ${n} không hợp lệ.`)
    }
}
checked()

//-Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần. (https://www.geeksforgeeks.org/bubble-sort/)
function bubbleShort(a){

    let n = a.length
    let swapped;

    for (let i = 0; i < n - 1; i++){
        swapped = false

        for(let j = 0; j < n - i - 1;j++){
            if (a[j] > a[j + 1]){
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
                swapped = true
            }
        }

        if (!swapped) break
    }
    return a
}
const a = [50, 9, 8, 12, 15, 18, 20, 40, 24]
console.log('Mảng chưa sắp xếp là', a);
const sortedN = bubbleShort(a)
console.log('Mảng đã sắp xếp', sortedN);


//2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
//-Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
    const s = ["Venom", "OnePiece", "Doraemon", "Chicken", "RealMarid", "Dog"]

    const minLengthStr = s.reduce((minStr, currentStr) => {
        return currentStr.length < minStr.length ? currentStr : minStr;
    }, s[0]);

    console.log('Chuỗi đầu tiên có độ dài nhỏ nhất là', minLengthStr, inputLengthStr);

//-Tìm những chuỗi trong mảng có chứa giá trị text.
const s = ["Venom", "OnePiece", "Doraemon", "Chicken", "RealMarid", "Dog"]
const text = prompt("Nhập vào chuỗi text: ")

const Action = s.filter(str => str.includes(text))
console.log('Chuỗi chứa giá trị text là: ', Action)


//-Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
const s = ["Venom", "OnePiece", "Doraemon", "Chicken", "RealMarid", "Dog"]
const newS = s.map(str => str.slice(0 ,3))

if (newS.every((str, index) => str === s[index].slice(0, 3))){
    console.log(`${newS} chuỗi hợp lệ`);
}else{
    console.log(`${newS} không hợp lệ so với chuỗi ban đầu`);
}

//-Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
const s = ["Venom", "OnePiece", "Doraemon", "Chicken", "RealMarid", "Dog"]
let action = ""
for (let i = 0; i < s.length; i++){
    action += s[i]
    if (i<s.length-1){
        action += "-"
    }
}
console.log(action);

//5. Tạo ra 1 mảng gồm các số bất kỳ. Hãy tính tổng của các số lẻ có trong mảng.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for(let i = 0; i < arr.length;i++){
    if (arr[i] % 2 !== 0){
        sum += arr[i];
    }
}

console.log('Tổng các số lẻ là:', sum);