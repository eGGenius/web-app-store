export default async function handler(req, res) {
    let templates = await getTemplates(req.headers.key)
//     templates.templates.unshift({title: 'test', description: 'this is a test', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg'})
    console.log(templates)
    res
        .status(200)
        .json(templates)
}

const url = "https://localhost:9443/api/templates ";
export async function getTemplates(key) {
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": 'ptr_HyM+KJc0//mIhm95HpTxHOTGXGL55wcd0Tp8xe87Kl4='
        }
    })
    const templates = await res.json()
    return templates
}
