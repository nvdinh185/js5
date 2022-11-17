var students = [
    {
        id: 1,
        name: "Dinh",
        diachi: "hue"
    },
    {
        id: 2,
        name: "Nam",
        diachi: "quang nam"
    },
    {
        id: 3,
        name: "Tan",
        diachi: "da nang"
    },
    {
        id: 4,
        name: "Hung",
        diachi: "hue"
    },
    {
        id: 5,
        name: "Tri",
        diachi: "quang tri"
    },
    {
        id: 6,
        name: "Anh",
        diachi: "hue"
    },
    {
        id: 7,
        name: "Binh",
        diachi: "da nang"
    }
];

students = students.map(function (student) {
    return {
        id: student.id,
        name: student.name,
        diachi: student.diachi,
        toan: Math.floor(Math.random() * 11),
        ly: Math.floor(Math.random() * 11),
        hoa: Math.floor(Math.random() * 11)
    }
});

console.log(students);