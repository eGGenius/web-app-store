import { firestore } from "../../../lib/firebase"

export default async function handler(req, res) {   
    const portainerUserId  = await createPortainerUser(req.body.username)
    const portainerTeamId  = await addUserToTeam(portainerUserId)
    const portainerJwt  = await getJWT(req.body.username)
    const portainerApiKey = await getApiKey(portainerJwt)
    const success = await writeKeyToFirestore(req.body.user, portainerUserId, portainerApiKey)

    res.status(200).json({portainerApiKey})
}

let password = '';
let portainerUserId = 0;

async function createPortainerUser(username) {
    password = Math.random().toString(36).slice(-8);
    const url = process.env.PORTAINER_API + 'users';

    const content = {
        "password": password,
        "role": 2,
        "username": username
      }
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        },
        body: JSON.stringify(content)
    })
    const response = await res.json()
    portainerUserId = await response.Id
    return portainerUserId
}

async function addUserToTeam(portainerUserId) {
    const url = process.env.PORTAINER_API + 'team_memberships';

    const content = {
        "userID": portainerUserId,
        "teamID": 3,
        "role": 2
    }
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.PORTAINER_ADMIN_KEY
        },
        body: JSON.stringify(content)
    })
    const response = await res.json()
    const portainerTeamId = await response.TeamID
    return portainerTeamId
}

async function getJWT(username) {
    // create User
    const url = process.env.PORTAINER_API + 'auth';
    const content = {
        "password": password,
        "username": username
      }
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
    })
    const response = await res.json()
    const portainerJwt = await response.jwt

    return portainerJwt
}

async function getApiKey(portainerJwt) {
    // create API Token
    const url = process.env.PORTAINER_API + 'users/' + portainerUserId + '/tokens';
    const content = {
        "description": "WebAppStore"
      }
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + portainerJwt
        },
        body: JSON.stringify(content)
    })
    const response = await res.json()
    const rawAPIKey = await response.rawAPIKey
    return rawAPIKey
}

async function writeKeyToFirestore(user, portainerUserId, apiKey) {
    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.update(userDoc, { 'portainerUserId': portainerUserId, 'portainerApiKey': apiKey });

    await batch.commit();
}