import React from "react";
import { Form } from "react-bootstrap";

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }


    render() {


        return (
            <form onSubmit={this.handleFromSubmit}>
                <div className="form-row mb-5">
                    <div className="col-10">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control"
                            placeholder="Search a movie "
                        />
                    </div>

                    <div className="col-12">
                        <button type="button"
                            className="btn btn-md btn-danger"
                            style={{ float: 'right' }}>Add Movie
                        </button>
                    </div>

                </div>

            </form>
        )
    }
}

export default SearchBar;