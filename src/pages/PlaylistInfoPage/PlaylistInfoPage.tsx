import { Link, useParams} from "react-router-dom"
import { PLAYLISTS } from "../../data";


export const PlaylistInfoPage = () => {
    const { playlistId } = useParams();
    const playlist = PLAYLISTS[Number(playlistId)];

    if (!playlist) {
        return (
            <div>
                <h2>PlaylistInfoPage</h2>

                <p>Плейлиста c данным id не существует</p>
            </div>
        )
    }

    return (
        <div className="playlist">
            <h2>PlaylistInfoPage</h2>
            <div className="playlist__main-info">
                <p className="playlist__main-genre">
                    <Link to={`/playlists`}>Жанр: {playlist.genre}</Link>
                </p>
                <p className="playlist__main-name">
                    Название: {playlist.name}
                </p>
                <ul className="playlist__list">
                    {playlist.songs.map((songName, index) => (
                        <li className="song-item" key={index}>{songName}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}