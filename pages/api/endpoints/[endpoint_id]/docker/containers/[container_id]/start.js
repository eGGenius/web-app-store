export default async function handler(req, res) {
    let container  = await startContainer(req.query.container_id)
    res
        .status(200)
        .json(container)
}

export async function startContainer(id) {
    console.log(id)
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/' + id + '/start';
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_KEY
        },
        body: "test"
    })
    console.log(res)
    return res.json()
}
