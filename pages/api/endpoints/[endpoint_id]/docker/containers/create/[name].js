export default async function handler(req, res) {
    let container  = await createContainer(req.query.name, req.body)
    res
        .status(200)
        .json(container)
}

export async function createContainer(name, details) {
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/create?name=' + name;
    const detail = JSON.parse(details)
    const content = {"image": detail.image,"HostConfig":{ "PublishAllPorts": true }}
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        },
        body: JSON.stringify(content)
    })
    return res.json()
}
