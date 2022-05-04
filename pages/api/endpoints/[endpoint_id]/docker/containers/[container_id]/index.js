export default async function handler(req, res) {
    console.log(req.method)
    if (req.method == 'DELETE') {
        let container = await deleteContainer(req.query.container_id)
        res
            .status(200)
            .json(container)
    } else {
        res.status(404).json('invalid request method')
    }

}

export async function deleteContainer(id) {
    console.log(id)
    const url = process.env.PORTAINER_API + 'endpoints/2/docker/containers/' + id;
    const res = await fetch(url, {
        method: 'DELETE',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        },
        body: {"force": true}
    })
    return res.json()
}
