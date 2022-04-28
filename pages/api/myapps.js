export default async function handler(req, res) {
    let myapps = await getMyApps()
    res
        .status(200)
        .json(myapps)
}
export async function getMyApps() {
    const url = process.env.PORTAINER_API + "endpoints/2/docker/containers/json?all=true";
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        }
    })
    const myapps = await res.json()
    return myapps
}

