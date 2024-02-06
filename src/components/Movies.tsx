import { useEffect, useState } from 'react'
import { MoviesWrapper } from '../movies.modules'
import axios from 'axios'
import { apiKey, discoverEndpoint } from '../api_links'

interface MovieTypes {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

const Movies = () => {

    const [showItems, setShowItems] = useState<MovieTypes[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${discoverEndpoint}?api_key=${apiKey}`);
                const {results} = response.data;
                setShowItems(results);
                console.log(results);
            } catch (error) {
                console.log("Something Went Wrong, Try Again", error);
            }
        }

        fetchMovies();
    }, [])

  return (
    <MoviesWrapper>
        <h1>Pagination Movie App Demo</h1>
        <div className="movieCard">
            {showItems.map((items) => {
                return (
                    <div className="movie" key={items.id}>
                        <div className="movieImg">
                            <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="Poster" />
                        </div>

                        <div className="movieInfo">
                            <h4>{items.title}</h4>

                            <p>{items.release_date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </MoviesWrapper>
  )
}

export default Movies