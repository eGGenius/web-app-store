export default async function handler(req, res) {
    const container  = await createContainer(req.query.name, req.body)
    const start  = await startContainer(container.Id)
    res
        .status(200)
        .json(container, start)
}

export async function createContainer(name, details) {
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/create?name=' + name;
    const detail = JSON.parse(details)
    console.log(detail)
    const labelName1 = "traefik.http.routers." + name + ".rule"
    const labelValue1 = "Host(`" + name + ".webapp-store.de`)"
    const labelName2 = "logo"
    const labelValue2 = detail.logo
    const labelName3 = "webapp"
    const labelValue3 = detail.webapp
    const content = {"image": detail.image,"HostConfig":{ "PublishAllPorts": true },"Labels": {[labelName1]: labelValue1,[labelName2]: labelValue2,[labelName3]: labelValue3}}
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_KEY
        },
        body: JSON.stringify(content)
    })
    return res.json()
}

async function startContainer(container_id) {
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/' + container_id + '/start';
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_KEY
        },
        body: "test"
    })
    return res.json()
}