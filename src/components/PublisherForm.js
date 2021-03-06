import React from "react";
// import PropTypes from 'prop-types';

class PublisherForm extends React.Component {
  render() {
    return (
      <form class="ui form">
        <div class="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div class="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

PublisherForm.propTypes = {};

export default PublisherForm;
