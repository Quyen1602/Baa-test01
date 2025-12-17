## Javascript

###  Scope: Xác định phạm vi biến
    Global: Toàn cục 
    Function scope: hàm
    Block scope: khối
    
### Global
```js
    var Number
    let Number
```

###  Function scope
```js
function getMax() {
    var a  = "thay đổi trong ham"
    let b  = "thay doi trong ham"
    console.log("a"); 
}
console.log("a"); -> //bao loi do k nam trong ham
```
###  Block scope
```js
if (true){
    var varValue = "không có block scope" // không nên dùng
    let letvalue = "trong block scope"
    const constvalue = "trong block scope"
}
```
### Hoisting: di chuyển các khai bao len dau pham vi của chúng trước khi code
 ```js
    console.log(x); // undefined (không phải error)
    var x = 5;
    // Tương đương với:
    var x;
    console.log(x); // undefined
    x = 5;
    // Với let và const:
    console.log(y); // Error: Cannot access 'y' before initialization
    let y = 5;
 ```

### Break: thoát ra khỏi vòng lặp

### Continue : bỏ qua vòng lặp hiện tại -> run tiếp vòng lặp tiếp theo

---
## Câu điều kiện `if ... else`

👉 Dùng khi chỉ có **2 trường hợp: ĐÚNG / SAI**

```js
điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai;
```

### Khi nào nên dùng?

* Gán giá trị cho biến
* Điều kiện đơn giản
* Code cần gọn, dễ đọc

## Câu điều kiện `if ... else if ... else`

👉 Dùng khi có **NHIỀU mức điều kiện** (xếp loại, trạng thái, role…)

### Quy tắc run cần nhớ

* JavaScript **chạy từ trên xuống dưới**
* Gặp điều kiện đúng **đầu tiên → dừng luôn**
* Luôn đặt điều kiện **mạnh nhất / lớn nhất ở trên**

## `switch ... case` (Khi nào nên dùng?)

👉 Dùng khi **so sánh 1 biến với nhiều giá trị cố định**

- Đừng quên `break`
- Gộp nhiều case giống nhau
- Luôn có `default`
- Không dùng `switch` cho điều kiện phức tạp


##  So sánh nhanh

| Trường hợp              | Nên dùng         |
| ----------------------- | ---------------- |
| Đúng / Sai              | `if ... else`    |
| Nhiều mức logic         | `if ... else if` |
| So sánh giá trị cố định | `switch`         |


---

## Ghi chú về các cách dùng vòng lặp trong JavaScript

## 1. for (cổ điển)

-   Dùng khi cần **kiểm soát chỉ số (index)** chặt chẽ.
-   Có thể dùng `break` và `continue`.

``` js
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
```

## 2. for...in

-   Duyệt **keys/index** của object hoặc array.
-   Thường dùng cho **object**.
-   Với array thì cho ra index, không phải value.

``` js
const obj = { name: "Alex", age: 20 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

## 3. for...of

-   Duyệt **values** của iterable (Array, String, Map, Set...).
-   Thường dùng khi chỉ quan tâm đến **giá trị**.
-   Có thể kết hợp `.entries()` để lấy cả index và value.

``` js
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

// Với index
for (const [i, value] of arr.entries()) {
  console.log(i, value);
}
```

## 4. forEach()

-   Method có sẵn của Array.
-   Duyệt qua từng phần tử, callback nhận `value, index`.
-   Không `break/continue` được.

``` js
const arr = [10, 20, 30];
arr.forEach((value, index) => {
  console.log(index, value);
});
```

## 5. So sánh nhanh

 | Vòng lặp  | Trả về      | Dùng cho     | Ưu điểm                    | Nhược điểm                  |
|-----------|-------------|--------------|----------------------------|-----------------------------|
| for       | index+value | Array        | Linh hoạt, dừng sớm được   | Code dài                    |
| for...in  | key/index   | Object/Array | Tốt cho object             | Với array dễ nhầm (trả index) |
| for...of  | value       | Iterable     | Ngắn gọn, dễ hiểu          | Không trực tiếp lấy được index |
| forEach   | value+index | Array        | Clean, functional style    | Không break/continue        |
  ----------------------------------------------------------------------------

## 6. Khi nào dùng?

-   **Object** → `for...in`
-   **Array (cần value)** → `for...of`
-   **Array (cần index + value)** → `forEach` hoặc `for...of entries()`
-   **Cần break/continue** → `for` hoặc `for...of`
