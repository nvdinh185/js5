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

const menu = `== QUẢN LÝ SINH VIÊN ==
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

Nhập thao tác lựa chọn:`;

var cont = true;
do {
    var input = prompt(menu);

    switch (input) {
        case '':
            alert("Vui lòng nhập thao tác lựa chọn!");
            break;
        case '1':
            inputSinhVien(students);
            alert('Đã thêm thành công!');
            break;
        case '2':
            displaySinhVien(students);
            break;
        case '3':
            var idSt = prompt("Nhập mã sinh viên muốn tìm: ");
            var foundSt = findStudent(students, Number(idSt));
            if (foundSt) {
                console.log(foundSt);
            } else {
                console.log('Không tìm thấy!');
            }
            break;
        case '4':
            var listGoods = filterGoodStudents(students);
            displaySinhVien(listGoods);
            break;
        case '5':
            addMath(students);
            break;
        case '6':
            addPropertySum(students);
            break;
        case '7':
            console.log("Tổng điểm của các sinh viên: ", totalMath(students));
            break;
        case '8':
            sortStudents(students);
            break;
        case '9':
            console.log("Điểm trung bình của các sinh viên: ", totalMath(students) / students.length);
            break;
        case '10':
            var idSt = prompt("Nhập mã sinh viên muốn xóa: ");
            deleteStudent(students, Number(idSt));
            break;
        case '0':
            console.log("Good bye!");
            cont = false;
            break;
    }
} while (cont);

// 1. Nhập sinh viên
function inputSinhVien(arrStudents) {
    var myname = prompt("Nhập tên sinh viên: ");
    var toan = prompt("Nhập điểm toán: ");
    var ly = prompt("Nhập điểm lý: ");
    var hoa = prompt("Nhập điểm hóa: ");
    var newSt = {
        id: students.length + 1,
        name: myname,
        toan: Number(toan),
        ly: Number(ly),
        hoa: Number(hoa)
    }

    arrStudents.push(newSt);
}

// 2. Hiển thị mảng sinh viên
function displaySinhVien(arrStudents) {
    console.log('===DANH SÁCH SINH VIÊN===');
    for (const el of arrStudents) {
        for (const key in el) {
            console.log(key + ": " + el[key]);
        }
        console.log("================");
    }
}

// 3. Tìm sinh viên theo id
function findStudent(arrStudents, id) {
    return arrStudents.find(function (student) {
        return student.id === id;
    });
}

// 4. Lọc ra các sinh viên xếp loại giỏi
function filterGoodStudents(arrStudents) {
    return arrStudents.filter(function (student) {
        return student.toan >= 8 && student.ly >= 8 && student.hoa >= 8;
    });
}

// 5. Cộng cho mỗi sinh viên 1 điểm toán
function addMath(arrStudents) {
    arrStudents.map(function (student) {
        student.toan < 10 ? student.toan += 1 : '';
        return student;
    });
}

// 6. Thêm thuộc tính tổng điểm
function addPropertySum(arrStudents) {
    arrStudents.map(function (student) {
        student.sum = student.toan + student.ly + student.hoa;
        return student;
    })
}

// 7. Tính tổng số điểm của các sinh viên
function totalMath(arrStudents) {
    return arrStudents.reduce(function (total, student) {
        return total + student.sum;
    }, 0);
}

// 8. Sắp xếp danh sách sinh viên theo tổng điểm tăng dần
function sortStudents(arrStudents) {
    function compare(a, b) {
        if (a.sum > b.sum) {
            return 1;
        }
        if (a.sum < b.sum) {
            return -1;
        }
        return 0;
    }

    arrStudents.sort(compare);
}

// 10. Xóa sinh viên theo mã sinh viên
function deleteStudent(arrStudents, id) {
    // Tìm chỉ số của sinh viên muốn xóa
    var delIndex = arrStudents.findIndex(function (student) {
        return student.id == id;
    })

    if (delIndex != -1) {
        arrStudents.splice(delIndex, 1);
        alert("Đã xóa thành công sinh viên có mã " + id);
    } else {
        alert("Không tìm thấy sinh viên muốn xóa!");
    }
}