# BÀI TẬP ĐỂ ÁP DỤNG CÁC HÀM forEach, every, some, filter, find, map, reduce:

## Bài tập 1: Cho mảng sinh viên gồm các thông tin sau:

```js
const students = [
    {
        id: 1,
        name: "Dinh",
        address: "hue"
    },
    {
        id: 2,
        name: "Nam",
        address: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        address: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        address: "hue"
    },
    {
        id: 5,
        name: "Tri",
        address: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        address: "hue"
    },
    {
        id: 7,
        name: "Binh",
        address: "da nang"
    }
];
```

- Thêm các thuộc tính điểm Toán, điểm Lý, điểm Hóa để lưu thông tin điểm thi cho các sinh viên là các số ngẫu nhiên từ 0 đến 10

## Bài tập 2: Cho mảng sinh viên như sau:

```js
var students = [
    {
        id: 1,
        name: "Dinh",
        toan: 5,
        ly: 6,
        hoa: 7
    },
    {
        id: 2,
        name: "Nam",
        toan: 10,
        ly: 8,
        hoa: 5,
    },
    {
        id: 3,
        name: "Tan",
        toan: 3,
        ly: 4,
        hoa: 5,
    },
    {
        id: 4,
        name: "Hung",
        toan: 9,
        ly: 7,
        hoa: 7,
    },
    {
        id: 5,
        name: "Tri",
        toan: 9,
        ly: 8,
        hoa: 9,
    },
    {
        id: 6,
        name: "Anh",
        toan: 9,
        ly: 10,
        hoa: 9,
    },
    {
        id: 7,
        name: "Binh",
        toan: 3,
        ly: 6,
        hoa: 9,
    }
];
```

1. Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

2. Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

3. Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa

4. Tìm 1 sinh viên xếp loại giỏi

5. Cộng cho mỗi sinh viên 1 điểm toán

6. Tính tổng điểm toán của các sinh viên, và tính điểm toán trung bình của các sinh viên