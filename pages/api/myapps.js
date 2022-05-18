export default async function handler(req, res) {
    let apiKey = req.headers.xapikey
    const myapps = await getMyApps(apiKey)
    res.status(200).json(myapps)
}
export async function getMyApps(apiKey) {
    const url = process.env.PORTAINER_API + "endpoints/1/docker/containers/json?all=true";
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "x-api-key": apiKey
        }
    })
    const myapps = await res.json()
    return myapps
}

