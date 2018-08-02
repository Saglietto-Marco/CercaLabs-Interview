import React, { Component } from 'react';
import API from '../../src/utils/inputsAPI';

class URLBox extends Component {

    state = {
        URL: '',
        method: 'post',
        response: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let userInputs = {
            URLInput: this.state.URL,
            methodInput: this.state.method
        }
        API.URLInput(userInputs)
            .catch(err => {
                return err
            })
            .then(
                res => {
                    this.setState({
                        response: JSON.stringify(res.data)
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
                            <div className="input-field col s2">
                                <select className='browser-default'
                                    name='method'
                                    value={this.state.value}
                                    onChange={this.handleInputChange} 
                                >
                                    <option value="" disabled>Choose your option</option>
                                    <option value="post" selected>post</option>
                                    <option value="get">get</option>
                                </select>
                            </div>
                            <form className="col s10">
                                <div className="input-field col s12">
                                    <textarea
                                        id="textarea1"
                                        className="materialize-textarea"
                                        name='URL'
                                        value={this.state.value}
                                        onChange={this.handleInputChange}></textarea>
                                    <label for="textarea1">URL Input</label>
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
                            <p>Data: {this.state.response}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default URLBox;