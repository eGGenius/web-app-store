export default async function handler(req, res) {
    let apiKey = req.headers.apikey
    if (req.method == 'DELETE') {
        let stack = await deleteStack(req.query.stack_id, apiKey)
        res
            .status(200)
            .json(stack)
    } else {
        res.status(404).json('invalid request method')
    }

}

export async function deleteStack(id, apiKey) {
    const url = process.env.PORTAINER_API + 'stacks/' + id + '?endpointId=1';
    const res = await fetch(url, {
        method: 'DELETE',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        }
    })
    return res.json()
}
