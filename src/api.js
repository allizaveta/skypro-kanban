/* const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"; */
const URL = "https://wedev-api.sky.pro/api/kanban"
const URL_USER = "https://wedev-api.sky.pro/api/user"
export async function getTasks(token) {
    const response = await fetch(URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Ошибка");
    };
    const data = await response.json();
    return data;
}

export async function signup({ name, login, password }) {
    return fetch(URL_USER, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("пользователь уже существует");
        }
        return response.json();
    });
}

export function login({ login, password }) {
    return fetch(URL_USER + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        if (response.status === 400) {
            throw new Error("Неправильный логин или пароль");
        }
        if (response.status === 500) {
            throw new Error("ошибка, повторите позднее!")
        }
    });
}

export async function addNewCard({
    token,
    title,
    topic,
    status,
    description,
    date,
}) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
    });

    if (!response.ok) {
        throw new Error(
            "Ошибка! Задача не может быть добавлена. Пожалуйста, проверьте правильность заполнения полей."
        );
    }
    const data = await response.json();
    return data;
}

export async function deleteTask({ id, token }) {
    const responce = await fetch(URL + `/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (responce.status === 400) {
        throw new Error("Ошибка удаления");
    } else {
        const data = await responce.json();
        return data;
    }
}
export async function updateTask({ id, token, ...taskData }) {
    console.log('Update Task Data:', { id, token, ...taskData });
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
    });

    if (response.status === 400) {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        throw new Error("Ошибка редактирования");
    } else {
        const data = await response.json();
        return data;
    }
}