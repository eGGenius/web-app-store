export default async function handler(req, res) {
    let templates = await getTemplates(req.headers.key, '1')
    res
        .status(200)
        .json(templates)
}
export async function getTemplates() {
    const url = process.env.PORTAINER_API + "templates";
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": process.env.PORTAINER_KEY
        }
    })
    const templates = await res.json()
    return templates.templates
}
