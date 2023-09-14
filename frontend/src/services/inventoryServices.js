export const URL_invtry = 'http://localhost:3000/inventory/';

const controller = new AbortController();

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
        const res = await fetch(`${URL_invtry}${id}`, {
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
        const res = await fetch(URL_invtry, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invtry)
        });
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = res.json()
        return parsed;
    } catch (err) {
        throw new Error(err);
    }
}

export const deleteInvtry = async (invtry) => {
    try {
        const res = await fetch(`${URL_invtry}${invtry.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = await res.json();
        window.location.reload();
        return parsed
    } catch (err) {
        throw new Error(err);
    }
}

export const updateInvtryById = async (id, updatedProduct) => {
    try {
        const res = await fetch(`${URL_invtry}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        console.log("PRODUCTO NUEVO", updatedProduct);
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw new Error(err);
    }
}

export const itemsInvtry = ['Tranquera', 'ropa trabajo', 'Ferretería'];

export const getInvtryByItem = async (item) => {
    const res = await fetch(URL_invtry)
    const allInvtry = await res.json();
    const items = allInvtry.filter((invtry) => invtry.item === item)
    //console.log(items);        
    if (!items.length) throw new Error(`No hay ${item} en stock`)
    return items;
}


