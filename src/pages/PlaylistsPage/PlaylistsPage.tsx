import { Link, useSearchParams } from "react-router-dom"
import { PLAYLISTS } from "../../data"
import './PlaylistsPage.css'
import { ChangeEvent } from "react"

export const PlaylistsPage = () => {
    const [ searchParam, setSearchParam ] = useSearchParams();

    const handleSearchJanre = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setSearchParam(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('searchJanre', value.toLowerCase());
            return newParams;
        })
    }

    const searchJanre = searchParam.get(`searchJanre`) || '';

    const handleSearchMusicName = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setSearchParam(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('searchMusicName', value.toLowerCase());
            return newParams;
        })
    }

    const searchMusicName = searchParam.get('searchMusicName') || '';

    const filtredPlaylist = PLAYLISTS.filter((item) => {
        const matchesJanre = searchJanre ? item.genre.toLowerCase().includes(searchJanre) : true;
        const matchesMusicName = searchMusicName ? item.name.toLowerCase().includes(searchMusicName) : true;

        return matchesJanre && matchesMusicName;
    })

    return (
        <div className="playlistsPage">
            <h2 className="playlists-title">Playlists Page</h2>

            <div className="playlist-div">
                <label>
                    Введите жанр{" "}
                    <input type="text" value={searchJanre} onChange={handleSearchJanre}></input>
                </label>

                <label>
                    Введите название{" "}
                    <input type="text" value={searchMusicName} onChange={handleSearchMusicName}></input>
                </label>


                {filtredPlaylist.map(({id, name}) => (
                    <Link to={`/playlists/${id}`} key={id}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}