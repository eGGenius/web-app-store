export default async function handler(req, res) {
    const { template } = req.query
    let templates = await getTemplates(template)
    res
        .status(200)
        .json(templates)
}
export async function getTemplates(TemplateTitle) {
    const url = process.env.PORTAINER_API + "templates";
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        }
    })
    const templates = await res.json()
    const wert = templates.templates
    const template = wert.filter(wer => wer.title == TemplateTitle)
    return template[0]
}
