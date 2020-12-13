import react from 'react';
import proptypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie ({title, year, summary, poster, genres}) {
    return(
    <div className ="movie">
        <Link to ={{pathname: '/movie-detail', state : {year, title,summary, poster, genres} }}>
         <img src={poster} alt={title} title={title}/>
         <div className="movie-data">
             <h3 className="movie-title">{title}</h3>
             <h5 className="movie-year">{year}</h5>
             <ul className="movie-genres">
                 {genres.map((genre, index) => (
                     <li key ={index} className="movie_genre">
                         {genre}
                     </li>
                 ))}
             </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
         </div>

        </Link>
    </div>
    );
}

Movie.prototypes ={
    year: proptypes.number.isRequired,
    title:proptypes.string.isRequired,
    summary: proptypes.string.isRequired,
    poster: proptypes.string.isRequired,
};

export default Movie;