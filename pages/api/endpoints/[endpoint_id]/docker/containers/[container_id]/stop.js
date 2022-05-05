export default async function handler(req, res) {
    let container  = await stopContainer(req.query.container_id)
    res
        .status(200)
        .json(container)
}

export async function stopContainer(id) {
    console.log(id)
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/' + id + '/stop';
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_KEY
        },
        body: "stop container"
    })
    return res.json()
}
