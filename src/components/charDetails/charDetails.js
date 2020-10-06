import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
// import { NULL } from 'node-sass';

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.state.char !== prevProps.char) {
            this.updateChar();
        }
    }

    updateChar() {
        let {charId} = this.props;

        if (!charId) {
            return
        }

        this.gotService.getCharaster(charId)
            .then((char) => {
                this.setState({char})
            })
    }
    render() {

        if (!this.state.char) {
            return <span className='select-error'>Please select a character</span>
        }

        let {name, gender, born, died, culture} = this.state.char;

        if (name === '') name = "no data...";
        if (gender === '') gender = "no data...";
        if (born === '') born = "no data...";
        if (died === '') died = "no data...";
        if (culture === '') culture = "no data...";

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}