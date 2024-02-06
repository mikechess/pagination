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

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${discoverEndpoint}?api_key=${apiKey}`,
                {
                    params: {
                        page:currentPage
                    }
                }
                );
                const {results, total_pages} = response.data;
                setShowItems(results);
                setTotalPages(total_pages);
            } catch (error) {
                console.log("Something Went Wrong, Try Again", error);
            }
        }

        fetchMovies();
    }, [currentPage]);

    const prevPage = () => {
        if(currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }
    const nextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage((next) => next + 1);
        }
    }

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
        <div className="buttons">
            {currentPage > 1 && (
                <button className='btnPrev' onClick={prevPage}>Back</button>
            )}

            <p>Page | {currentPage}</p>

            {currentPage < totalPages && (
                <button className='btnNext' onClick={nextPage}>Next</button>
            )}
        </div>
    </MoviesWrapper>
  )
}

export default Movies