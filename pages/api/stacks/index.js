export default async function handler(req, res) {
    const apiKey = req.headers.xapikey
    const currentStacks = await getStacks(apiKey)
    // check if WebApp Name already exists
    const string = JSON.stringify(currentStacks).toLowerCase();
    const searchString = ('"Name":"' + req.headers.name + '-' + req.headers.username).toLowerCase()
    if (string.search(searchString) > 0){
        res
            .status(406)
            .send({ summary: 'WebApp name already exists', detail: 'Try another name of delete the WebApp with this name'})
        return
    }
    // check if User already installed 3 WebApps
    if (currentStacks.length >= 3){
        res
            .status(406).json({ summary: 'Maximum of 3 WebApps reached', detail: 'delete one WebApp to install another one' })
        return
    }
    else {
        const stack = await createStack(req.headers.name, req.body, apiKey, req.headers.username)
        res
            .status(200)
            .json(stack)
        return
    }
}

export async function getStacks(apiKey) {
    const url = process.env.PORTAINER_API + "stacks";
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "x-api-key": apiKey
        }
    })
    const stacks = await res.json()
    return await stacks
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

