# 📘 Lesson 4 – JavaScript (Continue)
---

## 2. Object
- Dùng để nhóm tất cả thông tin liên quan đến 1 thực thể
- Dùng để lưu trữ dữ liệu dạng key-value
- Có thể:
  - Thêm / sửa / xoá thuộc tính
  - Lồng object

```js
const employee = {
  id: "NV001",
  name: "Nguyễn Văn A",
  position: "Accountant",
  skills: ["Excel", "Tax", "English"]
};

// Truy cập:
console.log(employee.name); // "Nguyễn Văn A"
employee.salary = 1500; // Thêm thuộc tính mới
```

- Cách khai báo có 2 cách
  - Cách 1 (Object Literal): let obj = { ... }; (Dùng trong 99% trường hợp)
  - Cách 2 (new Object): let obj = new Object();

⚠️ Lưu ý về Key:
Nếu tên key không có dấu cách: Không cần để trong ngoặc kép (ví dụ: age: 25).
Nếu tên key có dấu cách hoặc ký tự đặc biệt: Bắt buộc để trong ngoặc kép.

- Truy xuất dữ liệu (Cực kỳ quan trọng)
Bạn có 2 cách để lấy giá trị từ Object:

| Cách dùng                  | Cú pháp        | Khi nào dùng |
|----------------------|---------------|-------------|
| Dot notation| obj.key| Dùng khi tên key viết liền, không có ký tự đặc biệt |
| Bracket notation| obj["key"]    | Dùng khi key có dấu cách hoặc tên key nằm trong một biến |

```js
let sinhVien = { hoTen: "Lan", tuoi: 22 };
let query = "hoTen";

console.log(sinhVien.hoTen);   // ✅ "Lan"
console.log(sinhVien[query]);  // ✅ "Lan" (Truy xuất qua biến query)
console.log(sinhVien.query);   // ❌ undefined (Vì nó tìm key tên là "query" trong Object)
```

- Thêm, Sửa, Xóa thuộc tính
  - Việc thay đổi Object rất linh hoạt, không cần khai báo trước các thuộc tính.
  - Thêm/Sửa: Dùng dấu = để gán giá trị.
  - Xóa: Dùng từ khóa delete.

```js
let car = { brand: "Toyota" };

// Thêm & Sửa
car.color = "Red";   // Thêm mới
car.brand = "Honda"; // Cập nhật giá trị cũ

// Xóa
delete car.color; 
console.log(car); // { brand: "Honda" }
```

- Object lồng nhau (Nested Object)
  - Trong thực tế (nhất là khi nhận phản hồi từ API), Object thường lồng nhau nhiều lớp.

```js
let employee = {
  id: 1,
  info: {
    name: "John",
    contact: {
      email: "john@test.com",
      phone: "0123456"
    }
  }
};
// Cách lấy dữ liệu tầng sâu:
console.log(employee.info.contact.email); // "john@test.com"
```
---

## 3. Array
- Dùng để lưu danh sáchArray (Mảng) là một biến duy nhất dùng để lưu trữ danh sách các giá trị có thứ tự.
- Tại sao cần? Thay vì khai báo 50 biến rời rạc (mon1, mon2,...), ta chỉ cần 1 biến monHoc duy nhất.
- Quy tắc Index: Mỗi phần tử trong mảng có một vị trí (index) bắt đầu từ 0.
- Cách khai báo & đặc điểm
  - Cách dùng (Literal): let traiCay = ["Táo", "Cam", "Xoài"]; (Dùng 100% thực tế).
  - Mảng rỗng: let hocSinh = [];.
  - Lưu ý: Một mảng có thể chứa nhiều kiểu dữ liệu (String, Number, Object,...) nhưng nên để cùng kiểu để dễ xử lý.
- Truy xuất & thao tác dữ liệu 
  - Truy xuất phần tử
  ```js
    let monHoc = ["Toán", "Lý", "Hoá"];
    console.log(monHoc[0]);       // "Toán" (Phần tử đầu tiên)
    console.log(monHoc.length);   // 3 (Đếm số phần tử)
    console.log(monHoc[monHoc.length - 1]); // "Hoá" (Phần tử cuối cùng)
  ```
  - Thay đổi giá trị
  ```js
  monHoc[1] = "Vật lý"; // Thay "Lý" bằng "Vật lý"
  ```
- Các phương thức thêm/ xóa phổ biến
  - Đây là các hàm bạn sẽ dùng rất nhiều để cập nhật danh sách dữ liệu.

    | Thao tác  | Phương thức            | Vị trí tác động |
    |----------|------------------------|-----------------|
    | Thêm mới | push(giá_trị)          | Cuối mảng       |
    | Xóa đi   | pop()                  | Cuối mảng       |
    | Thêm mới | unshift(giá_trị)       | Đầu mảng        |
    | Xóa đi   | shift()                | Đầu mảng        |

- Duyệt mảng
  -  Cách 1: Vòng lặp `for` (truyền thống)
      - Dùng khi cần **index**

      ```js
      for (let i = 0; i < monHoc.length; i++) {
        console.log(`Môn thứ ${i + 1}: ${monHoc[i]}`);
      }
      ```
  - Cách 2: vòng lặp `for...of` (Gọn nhất và dùng khi chỉ cần giá trị)
    ```js
      for (let mon of monHoc) {
        console.log(mon);
      }
      ```
  - Cách 3: Vòng lặp `ForrEach()` (Hiện đại dùng khi muốn viết ngắn và clean)
      ```js
      monHoc.forEach((mon, index) => {
        console.log(`${index}: ${mon}`);
      });
      ```
---

## 4. Function
- Function (Hàm) là một khối lệnh được đặt tên, dùng để thực hiện một công việc cụ thể.
  - Mục đích: Tránh lặp lại code (DRY - Don't Repeat Yourself). Viết một lần, dùng nhiều lần.
  - Lợi ích: Dễ quản lý, dễ sửa lỗi (chỉ cần sửa tại nơi khai báo hàm).
  - Quy tắc nhớ: Giống như một công thức nấu ăn — viết sẵn công thức, khi nào muốn ăn (cần chạy code) thì mang ra "nấu".
  - Đóng gói logic xử lý để dùng lại nhiều lần 
- Cách khai báo 
```js
function calculateNetSalary(gross, taxRate = 0.1) {
  return gross - (gross * taxRate);
}

console.log(calculateNetSalary(2000)); // 1800
console.log(calculateNetSalary(3000, 0.15)); // 2550
```
- Quy tắc đặt tên (CamelCase)
  - Nên bắt đầu bằng động từ: tinhTong, layDuLieu, hienThiSanPham, kiemTraEmail.
  - Tên hàm phải diễn tả đúng hành động mà nó thực hiện.
  - Lưu ý: Khai báo hàm mới chỉ là "ghi công thức", code bên trong chưa chạy.
- Giá trị trả về (return)
  - Đây là 1 phần quan trọng để lấy kq từ hàm mang đi sử dụng tiếp nơi khác
    - Có return: hàm thực hiện xong và "gửi trả" kq về nơi gọi
    - Không có return Hàm chỉ làm việc rồi kết thúc
    - Lưu ý: Lệnh return sẽ dừng hàm ngay lập tức. Mọi dòng code phía sau return sẽ không được chạy.

    ```js
      function tinhTong(a, b) {
          return a + b; // Trả kết quả về
      }

      let ketQua = tinhTong(5, 10); 
      console.log(ketQua); // 15
    ```

---

## 5. Scope (Phạm vi biến)

### Block scope
- `let`, `const`: chỉ dùng trong `{}`  
- `var`: không có block scope

### Function scope
- Biến trong function → không dùng ngoài

### Global scope
- Khai báo ngoài → dùng mọi nơi

```js
let globalTask = "Công ty"; // Global scope

function working() {
  let localTask = "Việc cá nhân"; // Function scope
  console.log(globalTask); // Dùng được
  console.log(localTask);  // Dùng được
}

// console.log(localTask); // LỖI: Không thể gọi việc cá nhân ra ngoài công ty
```
---

## 6. break & continue

### break
- Thoát vòng lặp
### continue
- Bỏ qua lần lặp

```js
const numbers = [1, 2, 3, 4, 5, 6];

for (let n of numbers) {
  if (n === 4) break; // Gặp số 4 là dừng hẳn vòng lặp
  if (n % 2 === 0) continue; // Nếu là số chẵn thì bỏ qua, nhảy sang số tiếp theo
  console.log(n); // Kết quả: 1, 3
}
```

---

## 7. Câu điều kiện

### if - else
```js
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

### Ternary
```js
let result = score >= 60 ? "Pass" : "Fail";
```

---

## 8. Vòng lặp nâng cao

```js
const settings = { theme: "dark", language: "vi" };

// for...in dùng cho Object
for (let key in settings) {
  console.log(`${key} hiện tại là: ${settings[key]}`);
}

// forEach dùng cho Array
const colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) => console.log(`${index}: ${color}`));
```
---

## 9. String Utils
Xử lý dữ liệu văn bản (rất hữu ích khi làm sạch dữ liệu đầu vào).
- trim()
- toUpperCase() / toLowerCase()
- includes()
- split()
- replace()

```js
let email = "  User@Gmail.com  ";

let cleanEmail = email.trim().toLowerCase(); 
console.log(cleanEmail); // "user@gmail.com"

let sentence = "JavaScript is fun";
console.log(sentence.includes("fun")); // true
console.log(sentence.replace("fun", "awesome")); // "JavaScript is awesome"

```
---

## 10. Array Utils

### Thêm - Xóa
- push, unshift, splice
- pop, shift, splice

```js
let snacks = ["Apple", "Cake"];

snacks.push("Candy");     // Thêm cuối: ["Apple", "Cake", "Candy"]
snacks.unshift("Water");  // Thêm đầu: ["Water", "Apple", "Cake", "Candy"]
snacks.pop();             // Xóa cuối: ["Water", "Apple", "Cake"]
snacks.splice(1, 1);      // Xóa 1 phần tử từ vị trí index 1 (Apple): ["Water", "Cake"]
```

### Tìm kiếm - Biến đổi
- find → 1 phần tử
- filter → nhiều phần tử
- map
- sort((a, b) => a - b)

```js
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 }
];

// 1. find: Tìm 1 sản phẩm
const item = products.find(p => p.name === "Mouse"); 

// 2. filter: Lọc các sản phẩm đắt tiền (> 40)
const expensive = products.filter(p => p.price > 40);

// 3. map: Chỉ lấy danh sách tên sản phẩm
const names = products.map(p => p.name); // ["Laptop", "Mouse", "Keyboard"]

// 4. sort: Sắp xếp giá từ thấp đến cao
products.sort((a, b) => a.price - b.price);
```
---
