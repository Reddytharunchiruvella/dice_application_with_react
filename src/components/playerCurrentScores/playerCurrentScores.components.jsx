import "./playerCurrentScores.styles.css"

export const PlayerCurrentScores = ({Playername , playerscore , currentscore, activeplayer}) => {
    return (
        <>
        <div className="playerCurrentDiv">
            <div className="player12">
                <h2 id="activeplayer">{Playername}</h2>
                <p>{playerscore ? playerscore : 0}</p>
            </div>
            <div className="current12">
                <h2>CURRENT</h2>
                <p>{currentscore ? currentscore : 0}</p>
            </div>
        </div>
        </>
    )
}