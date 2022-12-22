// Search
import React from "react";
import styles from "./Search.module.scss";

class Search extends React.Component {
  state = {
    search: "",
  };

  handlekey = (event) => {
    if(event.key ==='Enter') {
        this.props.searchMovies(this.state.search)
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <div className={styles.input}>
              <input
                placeholder='search...'
                type='search'
                className='validate'
                value={this.state.search}
                onChange={(event) => this.setState({ search: event.target.value })}
                onKeyDown={this.handlekey}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
