import { useEffect, useState } from 'react'
import { MoviesWrapper } from '../movies.modules'
import axios from 'axios'
import { apiKey, discoverEndpoint } from '../api_links'

const Movies = () => {

    const [showItems, setShowItems] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${discoverEndpoint}?api_key=${apiKey}`);
                const results = response.data;
                setShowItems(results);
                console.log(results);
            } catch (error) {
                console.log("Something Went Wrong, Try Again", error);
            }
        }

        fetchMovies();
    }, [])

  return (
    <MoviesWrapper></MoviesWrapper>
  )
}

export default Movies