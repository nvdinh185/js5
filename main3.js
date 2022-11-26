var students = [
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

students = students.map(function (student) {
    return {
        id: student.id,
        name: student.name,
        address: student.address,
        toan: Math.floor(Math.random() * 11),
        ly: Math.floor(Math.random() * 11),
        hoa: Math.floor(Math.random() * 11)
    }
});

console.log(students);