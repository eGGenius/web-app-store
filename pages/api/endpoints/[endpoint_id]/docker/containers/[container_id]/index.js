export default async function handler(req, res) {
    let apiKey = req.headers.apikey
    if (req.method == 'DELETE') {
        let container = await deleteContainer(req.query.container_id, apiKey)
        res
            .status(200)
            .json(container)
    } else {
        res.status(404).json('invalid request method')
    }

}

export async function deleteContainer(id, apiKey) {
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/' + id + '?force=true';
    const res = await fetch(url, {
        method: 'DELETE',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey
        },
        body: {"force": true}
    })
    return res.json()
}
