import React, { Component } from "react";
import PropType from "prop-types";
import ReactImageFallback from "react-image-fallback";
// const tags = [
//   { Id: 1, name: "diec" },
//   { Id: 2, name: "economic" },
//   { Id: 3, name: "family" }
// ];
// const genre = [
//   { Id: 1, name: "diec" },
//   { Id: 2, name: "economic" },
//   { Id: 3, name: "family" }
// ];

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    fetured: false,
    // tags: [],
    // genre: [],
    publisher: 0,
    thumbnail: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleStringchange = e => this.setState({ [e.target.name]: e.target.value });

  handleNumberchange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });

  handlecheckboxchange = e =>
    this.setState({ [e.target.name]: e.target.checked });

  // toggleTag = tag =>
  //   this.state.tags.includes(tag.Id)
  //     ? this.setState({ tags: this.state.tags.filter(Id => Id !== tag.Id) })
  //     : this.setState({ tags: [...this.state.tags, tag.Id] });

  // toggleGenre = gen => this.setState({ genre: gen.Id });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="eleven wide column">
            <div className="field">
              <label htmlFor="name">Game name</label>
              <input
                type="text"
                name="name"
                placeholder="Game name"
                value={this.state.name}
                onChange={this.handleStringchange}
              />
            </div>
            <div className="field">
              <label htmlFor="description">Game description</label>
              <textarea
                type="text"
                name="description"
                placeholder="Game title"
                value={this.state.description}
                onChange={this.handleStringchange}
              />
            </div>
          </div>
          <div className="five wide column">
            <ReactImageFallback
              src={this.state.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnaill"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="thumbnail">Thumbnail </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Image URL"
            value={this.state.thumbnail}
            onChange={this.handleStringchange}
          />
        </div>

        <div className="three fields">
          <div className="field">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={this.state.price}
              onChange={this.handleNumberchange}
            />
          </div>

          <div className="field">
            <label htmlFor="duration">Duration (in second)</label>
            <input
              type="number"
              name="duration"
              placeholder="duration"
              value={this.state.duration}
              onChange={this.handleNumberchange}
            />
          </div>

          <div className="field">
            <label htmlFor="players">Players</label>
            <input
              type="text"
              name="players"
              placeholder="players"
              value={this.state.players}
              onChange={this.handleStringchange}
            />
          </div>
        </div>

        <div className="field">
          <div className="inline field">
            <label htmlFor="fetured">Fetured?</label>
            <input
              type="checkbox"
              name="fetured"
              placeholder="fetured"
              checked={this.state.fetured}
              onChange={this.handlecheckboxchange}
            />
          </div>
        </div>

        {/* <div className="field">
          <label>Tags</label>
          {tags.map(tag => (
            <div className="inline field" key={tag.Id}>
              <label htmlFor={`Tag-${tag.Id}`}>{tag.name}</label>
              <input
                type="checkbox"
                id={`Tag-${tag.Id}`}
                checked={this.state.tags.includes(tag.Id)}
                onChange={() => this.toggleTag(tag)}
              />
            </div>
          ))}
        </div>

        <div className="field">
          <label>Genre</label>
          {genre.map(genre => (
            <div className="inline field" key={genre.Id}>
              <label htmlFor={`gen-${genre.Id}`}>{genre.name}</label>
              <input
                type="checkbox"
                id={`gen-${genre.Id}`}
                checked={this.state.genre === genre.Id}
                onChange={() => this.toggleGenre(genre)}
              />
            </div>
          ))}
        </div> */}

        <div className="field">
          <label>Publishers</label>
          <select
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleNumberchange}
          >
            <option value="0">Choose publisher</option>

            {this.props.publishers.map(p => (
              <option value={p.id} key={p.id}>
                {p.Name}
              </option>
            ))}
          </select>
        </div>

        <div className="ui fluid buttons">
          <button className="ui button" onClick={this.props.cancelGameForm}>Cancel</button>
          <div className="or" />
          <button className="ui primary button" type="submit">Create</button>
        </div>

      </form>
    );
  }
}

GameForm.protoTypes = {
  publishers: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      name: PropType.string.isRequired
    })
  ).isRequired,
  cancelGameForm: PropType.func.isRequired
};
GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
