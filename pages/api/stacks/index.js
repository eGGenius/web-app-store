export default async function handler(req, res) {
    const apiKey = req.headers.xapikey
    const stack = await createStack(req.headers.name, req.body, apiKey, req.headers.username)
    res
        .status(200)
        .json(stack)
}

export async function createStack(name, body, apiKey, username) {
    const url = process.env.PORTAINER_API + 'stacks?type=1&method=string&endpointId=' + process.env.ENDPOINT_ID;
    const detail = JSON.parse(body)
    const content = {
        "env": [
            {
                "name": "webapp",
                "value": detail.webapp
            },
            {
                "name": "webapp-logo",
                "value": detail.logo
            }
        ],
        "name": name + '-' + username,
        "stackFileContent": detail.stackFileContent,
        "swarmID": process.env.SWARM_ID
    }
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        },
        body: JSON.stringify(content)
    })
    return res.json()
}

