export const URL_invtry = 'http://localhost:3000/inventory';

const controller = new AbortController();

async function setId() {
    const invtry = await this.getAllInvtry(URL_invtry);
    const lastInvtry = invtry[invtry.length - 1];
    const id = lastInvtry.id + 1; //remember zero index array
    return id;
}

export const getAllInvtry = async (URL_invtry) => {
    try {
        const res = await fetch(URL_invtry, {
            method: 'GET',
            headers: { 'Content-Type': "application/json" },
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
            headers: { 'Content-Type': "application/json" },
            signal: controller.signal
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}

export const addInvtry = async (invtry) => {
    try {
        const id = await setId();
        const newInvtry = { ...invtry, id }
        const res = await fetch(URL_invtry,{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newInvtry)
        });
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = res.json()
        return parsed;
    } catch (err) {
        throw new Error(err);
    }
}



