const API_URL = "https://api.faultsports.com/users";

export async function getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return await response.json();
}

export async function getUserById(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return await response.json();
}

export async function createUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return await response.json();
}

export async function updateUser(id, user) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to update user");
    }

    return await response.json();
}

export async function deleteUser(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete user");
    }

    return true;
}
