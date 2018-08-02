import React, { Component } from 'react';
import API from '../../src/utils/inputsAPI';

class StringBox extends Component {

    state = {
        string: '',
        reversedString: []
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let str = { postedStr: this.state.string }
        API.stringInputReversal(str)
            .catch(err => {
                return err
            })
            .then(
                res => {
                    this.setState({
                        reversedString: res.data.string
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className='offset-s2 col s8'>
                        <div className="row">
                            <form>
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" name='string'
                                        value={this.state.value}
                                        onChange={this.handleInputChange}>
                                    </textarea>
                                    <label for="textarea1">String Input</label>
                                </div>
                            </form>
                            <button
                                class="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                                onClick={this.handleSubmit}>Submit
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <div className='row'>
                            <p>Reversed String: {this.state.reversedString}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default StringBox;