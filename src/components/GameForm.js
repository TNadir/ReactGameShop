import React, { Component } from "react";
import PropType from "prop-types";
import ReactImageFallback from "react-image-fallback";
import FormInlineMessage from "./FormInlineMessage";
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

const initialData = {
  id: null,
  name: "",
  description: "",
  price: 0,
  duration: 0,
  players: "",
  featured: false,
  // tags: [],
  // genre: [],
  publisher: 0,
  thumbnail: ""
};

class GameForm extends Component {
  state = {
    data: initialData,
    errors: {},
    createbuttonName: "Create"
  };

  componentDidMount() {
    if (this.props.game.id) {
      this.setState({ data: this.props.game, createbuttonName: "Update"  });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game.id && nextProps.game.id !== this.state.data.id) {
      this.setState({ data: nextProps.game, createbuttonName: "Update" });
    }
    if (!nextProps.game.id) {
      this.setState({ data: initialData, createbuttonName: "Create" });
    }
  }

  validate(data) {
    const errors = {};
    if (!data.name) errors.name = "This field can't be blank";
    if (!data.description) errors.description = "This field can't be blank";
    if (!data.players) errors.players = "This field can't be blank";
    if (!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if (data.duration <= 0) errors.duration = "Too cheap,don't you think?";
    if (data.publisher === 0) errors.publisher = "Have you choosen publisher?";
    if (data.price <= 0) errors.price = "Too short, isn't it?";
    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors: errors });
    if (Object.keys(errors).length === 0) this.props.submit(this.state.data);
  };

  handleStringchange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  handleNumberchange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });

  handlecheckboxchange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked }
    });

  // toggleTag = tag =>
  //   this.state.tags.includes(tag.Id)
  //     ? this.setState({ tags: this.state.tags.filter(Id => Id !== tag.Id) })
  //     : this.setState({ tags: [...this.state.tags, tag.Id] });

  // toggleGenre = gen => this.setState({ genre: gen.Id });

  render() {
    const { data, errors } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="eleven wide column">
            <div className={errors.name ? "error field" : "field"}>
              <label htmlFor="name">Game name</label>
              <input
                type="text"
                name="name"
                placeholder="Game name"
                value={data.name}
                onChange={this.handleStringchange}
              />
              <FormInlineMessage content={errors.name} type="error" />
            </div>
            <div className={errors.description ? "error field" : "field"}>
              <label htmlFor="description">Game description</label>
              <textarea
                type="text"
                name="description"
                placeholder="Game title"
                value={data.description}
                onChange={this.handleStringchange}
              />
              <FormInlineMessage content={errors.description} type="error" />
            </div>
          </div>
          <div className="five wide column">
            <ReactImageFallback
              src={data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnaill"
              className="ui image"
            />
          </div>
        </div>

        <div className={errors.thumbnail ? "error field" : "field"}>
          <label htmlFor="thumbnail">Thumbnail </label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Image URL"
            value={data.thumbnail}
            onChange={this.handleStringchange}
          />
          <FormInlineMessage content={errors.thumbnail} type="error" />
        </div>

        <div className="three fields">
          <div className={errors.price ? "error field" : "field"}>
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={data.price}
              onChange={this.handleNumberchange}
            />
            <FormInlineMessage content={errors.price} type="error" />
          </div>

          <div className={errors.duration ? "error field" : "field"}>
            <label htmlFor="duration">Duration (in second)</label>
            <input
              type="number"
              name="duration"
              placeholder="duration"
              value={data.duration}
              onChange={this.handleNumberchange}
            />
            <FormInlineMessage content={errors.duration} type="error" />
          </div>

          <div className={errors.players ? "error field" : "field"}>
            <label htmlFor="players">Players</label>
            <input
              type="text"
              name="players"
              placeholder="players"
              value={data.players}
              onChange={this.handleStringchange}
            />
            <FormInlineMessage content={errors.players} type="error" />
          </div>
        </div>

        <div className="field">
          <div className="inline field">
            <label htmlFor="featured">Fetured?</label>
            <input
              type="checkbox"
              name="featured"
              placeholder="featured"
              checked={data.featured}
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
                checked={data.tags.includes(tag.Id)}
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
                checked={data.genre === genre.Id}
                onChange={() => this.toggleGenre(genre)}
              />
            </div>
          ))}
        </div> */}

        <div className={errors.publisher ? "error field" : "field"}>
          <label>Publishers</label>
          <select
            name="publisher"
            value={data.publisher}
            onChange={this.handleNumberchange}
          >
            <option value="0">Choose publisher</option>

            {this.props.publishers.map(p => (
              <option value={p.id} key={p.id}>
                {p.Name}
              </option>
            ))}
          </select>
          <FormInlineMessage content={errors.publisher} type="error" />
        </div>

        <div className="ui fluid buttons">
          <button className="ui button" onClick={this.props.cancelGameForm}>
            Cancel
          </button>
          <div className="or" />
          <button className="ui primary button" type="submit">
            {this.state.createbuttonName}
          </button>
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
  cancelGameForm: PropType.func.isRequired,
  submit: PropType.func.isRequired,
  game: PropType.shape({
    name: PropType.string.isRequired,
    thumbnail: PropType.string.isRequired,
    players: PropType.string.isRequired,
    price: PropType.number.isRequired,
    duration: PropType.number.isRequired,
    featured: PropType.bool.isRequired
  }).isRequired
};
GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
