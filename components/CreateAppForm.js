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
                    <p className="text-sm">sername/WebApp Name will be the Name of the WebApp</p>
                </li>
                <br />
                <li>
                    <h5>WebApp Logo</h5>
                    <p className="text-sm">PNG Logo</p>
                </li>
                <br />
                <li>
                    <h5>WebApp Description</h5>
                    <p className="text-sm">one sentance that describes the WebApp</p>
                </li>
                <br />
                <li>
                    <h5>Docker Command</h5>
                    <p className="text-sm">Docker Command to run the WebApp (Compose will be supported soon)</p>
                </li>
            </ul>
            <br />
            <h5>We will validate the WebApp and inform you when something is missing or add to the Store</h5>
        </>
    )
}