// var a = 3;
// var b = 4;

// a += 5; //a=a+5

// a -= 2;
// a++;
// a--;

// a **= 2;
// console.log(a >= b);


// var age = 16;
// var city = "Sheki";

// console.log(!(age >= 16 && city != "Baki"));

// if (age >= 16) {
//     console.log("Xosh gelmisiz,alish-verish ede bilersiz");
// } else {
//     console.log("Papani chagir");
// }

// var result = (age >= 16) ? "Xosh gelmisiz,alish-verish ede bilersiz" : "Papani chagir";
// console.log(result)

// var task = 40;
// var project = 50;

// var result = 0;

// if (project >= 0 && project <= 100 && task <= 100 && task >= 0) {
//     result = task * 0.4 + project * 0.6;
//     if (result > 50) {
//         console.log("Tebrikler");
//     } else {
//         console.log("Teessuf");
//     }
// } else {
//     console.log("Zehmet olmasa 0-100 arasi eded daxil edin !!!");
// }


// var n = 10;

// while (n < 10) {
//     console.log(n);
//     n++;
// }

// do {
//     n++;
//     console.log(n);

// } while (n < 10)
// var n = 10;
// var m = 20;

// for (var i = n; i <= m; i++) {
//     console.log(i);
// }

// var n = 0;

// if (n > 0) {
//     if (n % 21 == 0) {
//         console.log('Bolunur');
//     } else {
//         console.log('Bolunmur');
//     }
// } else {
//     console.log('Musbet eded daxil edin');
// }


// var result = -1;

// if (result >= 0 && result <= 100) {
//     if (result >= 91 && result <= 100) {
//         console.log("A");
//     } else if (result >= 81 && result <= 90) {
//         console.log("B");
//     } else if (result >= 71 && result <= 80) {
//         console.log("C");
//     } else if (result >= 61 && result <= 70) {
//         console.log("D");
//     } else if (result >= 51 && result <= 60) {
//         console.log("E");
//     } else {
//         console.log("Kesildiniz")
//     }

// } else {
//     console.log("0 - 100 araliginda eded daxil edin");
// }

// var ferid_name = "Ferid";
// var kenan_name = "Kenan";

// var students = ["Ferid", "Kenan", "Abulfat", true, 1];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


// var Student = function(name, surname, age) {
//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.group = "P507"
// }

// var stu1 = new Student("Ferid", "Aliyev", 18);
// var stu2 = new Student("Abulfat", "Memmedov", 23);

// var stu1 = {
//     name: "Ferid",
//     surname: "Aliyev",
//     age: 18,
//     gruop: "P507"
// }

// var stu2 = {
//     name: "Abulfat",
//     surname: "Memmedov",
//     age: 23,
//     gruop: "P507"
// }

// var n = 5;
// var m = 10;


// if (n < m) {
//     for (var i = n; i <= m; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }

// } else {
//     console.log("n m-den kichik olmalidir")
// }


// var n = 1;
// var m = 10;
// var count = 0;


// if (n < m) {
//     for (var i = n; i <= m; i++) {
//         if (i % 2 == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// } else {
//     console.log("n m-den kichik olmalidir")
// }

var n = 5;
var m = 3;
var r = 1;

if (n > 0 && m > 0) {
    for (var i = 0; i < m; i++) {
        r *= n;
    }
    console.log(r);
} else {
    console.log("Zehmet olmasa 0-dan boyuk ededler daxil edin")
}