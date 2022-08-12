import React from "react";

const MovieList = (props) => {

    /* function handleClick(event) {
        /* console.log("button clicked"); */    //bir şeylerin değişmesini silme veya ekleme gibi şeyler nesneyi kullanırız
    /*  console.log(event)
     } */

    return (
        <div className="row">




            {props.movies.map((movie) =>

            (

                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="sample movie"></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <button type="button" className="badge text-bg-primary ">{movie.rating}</button>


                            </div>
                        </div>
                    </div>
                </div>

            ))
            }

        </div >
    )
}


export default MovieList;