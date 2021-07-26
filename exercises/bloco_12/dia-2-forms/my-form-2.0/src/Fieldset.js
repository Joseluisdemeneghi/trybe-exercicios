import React, { Component } from 'react';

class Fieldset extends Component {
  render() {

    return (
      <fieldset>
        <input type="text" name="name" maxLength="40" required />
        <input type="email" name="email" maxLength="50" required />
        <input type="text" name="cpf" maxLength="11" required />
        <input type="text" name="endereço" maxLength="200" required />
        <input type="text" name="cidade" maxLength="28" required />
      </fieldset>
    )
  }
}

export default Fieldset;
