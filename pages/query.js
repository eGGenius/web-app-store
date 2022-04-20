export default function Test({users}) {
    return (
        <ul>
            {users.map((user) => ( <> <li>{user.Name}</li> < li > {
                user.Id
            } < /li></ >))}
             <li><iframe src = "http://localhost:55004/files/" width="1000" height="1000"/></li>
        </ul>
    )
}

const url = "https://localhost:9443/api/teams ";
export async function getServerSideProps() {
    // Default options are marked with *
    const res = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            "x-api-key": "ptr_HyM+KJc0//mIhm95HpTxHOTGXGL55wcd0Tp8xe87Kl4="
        }
    })
    const users = await res.json()
    console.log(users)
    return {props: {
            users
        }}
}
