import styled from "styled-components";


export const MoviesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 1px 1px 15px 5px #007bff;
    border-radius: 40px;

    h1 {
        margin-bottom: 2rem;
    }

    .movieCard {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .movie {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 10px;
    }

    .movieImg {
        border-radius: 10px;
        
        > img {
            box-shadow: 1px 1px 15px 5px grey;
            padding: 5px;
            border-radius: 40px;
        }
    }

    .movieInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        > h4 {
            width: 290px;
            text-align: center;
            whitespace: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0;
        }

        > p {
            color: grey;
        }
    }
`