const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const URL = "https://wedev-api.sky.pro/api/kanban"
const URL_USER = "https://wedev-api.sky.pro/api/user"
export async function getTasks() {
    const response = await fetch(URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error("Ошибка");
    };
    const data = await response.json();
    return data;
}
