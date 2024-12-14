import SpotifyPlayer from "./SpotifyPlayer.tsx";
import './music.css';

const Music = () => {
    return (
        <div className={'music component-parent'}>
            <h2>Music</h2>
            <SpotifyPlayer/>
        </div>
    )
}

export default Music;