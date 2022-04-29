export default async function handler(req, res) {
    let container  = await createContainer(req.query.name)
    res
        .status(200)
        .json(container)
}

export async function createContainer(name) {
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/create?name=' + name;
    const content = {"image": "nginx:latest","ExposedPorts": {"80/tcp": { }},"HostConfig":{ "PortBindings": { "80/tcp": [{ "HostPort": "8080" }] } }}
    console.log(name)
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
