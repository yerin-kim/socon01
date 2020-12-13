import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
class Home extends React.Component {
  state = {
   isLoading : true,
   movies :[],
  };
  getMovies = async () => {
    const {
      data :{
        data:{movies},
      },
    } = await axios.get
    ('http://yts.mx/api/y2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading:false});
  };
  ComponentDidMount(){
   this.getMovies();
  }
  render() {
    const {isLoading} = this.state;
    return(
      <section className="container">
        {isLoading? (
          <div className="Loader">
            <span className="loader_text">Loading..</span>
          </div>

        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie>
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              </Movie>
            ))}
          </div>
        )      
      }
      </section>
    );
  }
}
  export default Home;

 /* add = () => {
    this.setState(current => ({
      count: current.count +1,
    }));
  };
  minus =() => {
    this.setState(current => ({
      count: current.count -1,
    }));
  };
  render() {
    return (
      <div>
        <h1> The number is :{this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    );
  }


export default Home; 
/*function Food({name, picture, rating}){
  return(
    <div>
  <h1>I like{ name}  </h1>
  <h4>{rating}/5.0 </h4>
  <img src ={picture} alt={name}/>
  </div>
  );
}
function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="kimchi" />
      
    </div>
  );
}*/
