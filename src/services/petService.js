const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;


async function index() {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
      } catch (err) {
        console.log(err);
      }
}


async function create(petData) {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(petData),
        });
        const data = await res.json();
        return data;
        
    } catch (err) {
        console.log(err);
    }
}


export { index, create };