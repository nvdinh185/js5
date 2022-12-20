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
- Hiển thị danh sách sinh viên trong danh sách theo định dạng:

```html

    id: 0
    name: abc
    address: xyz
    toan: 0
    ly: 0
    hoa: 0
 
```

## Bài tập 2: Cho mảng sinh viên như sau:

```js
const students = [
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

Tạo menu như sau:
---------------------------------------
1. Nhập dữ liệu
2. Xuất dữ liệu
3. Tìm sinh viên
4. Lọc ra các sinh viên xếp loại giỏi
5. Cộng cho mỗi sinh viên 1 điểm toán
6. Thêm thuộc tính tổng điểm 3 môn
7. Tính tổng điểm của các sinh viên
8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
9. Tính điểm trung bình của các sinh viên
10. Xóa sinh viên
0. Thoát
---------------------------------------

- Khi chọn 1: Nhập 1 sinh viên và thêm vào danh sách
- Khi chọn 2: Hiển thị danh sách sinh viên hiện có
- Khi chọn 3: Tìm sinh viên theo id và hiển thị , nếu không tìm thấy thì hiển thị "Không tìm thấy!"
- Khi chọn 4: Lọc ra các sinh viên xếp loại giỏi và hiển thị
- Khi chọn 5: Cộng cho mỗi sinh viên 1 điểm toán
- Khi chọn 6: Thêm thuộc tính sum để lưu tổng điểm 3 môn
- Khi chọn 7: Tính tổng điểm của các sinh viên
- Khi chọn 8: Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
- Khi chọn 9: Tính điểm trung bình của các sinh viên
- Khi chọn 10: Xóa sinh viên theo id
- Khi chọn 0: Thoát khỏi hệ thống và in ra dòng chữ: "Goodbye!"