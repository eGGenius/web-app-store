export default function CreateAppForm({ }) {
    return (
        <>
            <h1>You have an idea of a new WebApp? </h1>
            <h5>Great then send a email to <a href="mailto:webapp@webapp-store.de">webapp@webapp-store.de</a> that contains:</h5>
            <br />
            <ul>
                <li>
                    <h5>Username</h5>
                    <p className="text-sm">Your Username</p>
                </li>
                <br />
                <li>
                    <h5>WebApp Name</h5>
                    <p className="text-sm">Username/WebApp Name will be the Name of the WebApp</p>
                </li>
                <br />
                <li>
                    <h5>WebApp Logo</h5>
                    <p className="text-sm">PNG Logo</p>
                </li>
                <br />
                <li>
                    <h5>WebApp short Description</h5>
                    <p className="text-sm">maximum 20 letters</p>
                </li>
                <br />
                <li>
                    <h5>Docker Compose File</h5>
                    <p className="text-sm">Docker Compose file Version 3 or higher</p>
                </li>
            </ul>
            <br />
            <h5>We will validate the WebApp and inform you when something is missing or add to the Store</h5>
        </>
    )
}