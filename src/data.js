export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export const cardList = [
    {
        id: 1,
        topic: "Web Design",
        title: "Название задачи",
        date: "32.09.99",
        status: "В работе",
    },
    {
        id: 2,
        topic: "Research",
        title: "Найти шрифт",
        date: "05.09.24",
        status: "Нужно сделать",
    },
    {
        id: 3,
        topic: "Web Design",
        title: "Сделать дело",
        date: "03.12.24",
        status: "Без статуса",
    },
    {
        id: 4,
        topic: "Copywriting",
        title: "Гулять смело",
        date: "12.07.21",
        status: "В работе",
    },
    {
        id: 5,
        topic: "Research",
        title: "Найти билеты в эщкерию",
        date: "02.07.27",
        status: "Тестирование",
    },
    {
        id: 6,
        topic: "Research",
        title: "Написать текст",
        date: "12.06.21",
        status: "Без статуса",
    },
    {
        id: 7,
        topic: "Web Design",
        title: "Название задачи 2",
        date: "15.01.21",
        status: "Готово",
    },
];

export const topicStyles = {
    _orange: {
        backgroundColor: "#FFE4C2",
        color: "#FF6D00",
    },
    _green: {
        backgroundColor: "#B4FDD1",
        color: "#06B16E",
    },

    _purple: {
        backgroundColor: "#E9D4FF",
        color: "#9A48F1",
    },

    _gray: {
        backgroundColor: "#94A6BE",
        color: "#FFFFFF",
    },
};

export const topicHeader = {
    "Web Design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
};