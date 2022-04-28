export default async function handler(req, res) {
    let templates = await getTemplates(req.headers.key, '1')
//     templates.templates.unshift({title: 'test', description: 'this is a test', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'})
    console.log(templates)
    res
        .status(200)
        .json(templates)
}
const url = "https://212.227.208.220:9443/api/custom_templates";
export async function getTemplates(key, id) {
    const uri = "https://212.227.208.220:9443/api/custom_templates/1"
    const res = await fetch(uri, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": 'ptr_lD5Jv9Lno8tX5dxE9TxE6Y1Q3vlG8nmmuvo7rJ1dYO4='
        }
    })
    const templates = await res.json()
    return templates
}
