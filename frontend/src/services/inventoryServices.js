export const URL_invtry = ' http://localhost:3030/inventory';
console.log(URL_invtry);

const controller = new AbortController();

export const getAllInvtry = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            signal: controller.signal
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}

export const getAllInvtryById = async (id) => {
    try {
        const res = await fetch(URL_invtry + id, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}



