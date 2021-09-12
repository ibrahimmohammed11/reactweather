import React, { Component, Fragment } from 'react'
import Styles from "./style.module.css";

export default class AddForm extends Component {

    render() {
        let { handleFormSubmit } = this.props;
        return (
            <Fragment>
                <form onSubmit={handleFormSubmit}>
                    <input className={Styles.inpStyle} type="text" id="city" placeholder="City..." />
                    <input className={`${Styles.inpStyle} my-4`} type="text" id="country" placeholder="Country..." />
                    <button className={`${Styles.btnStyle} btn`}>Get Weather</button>
                </form>
            </Fragment>
        )
    }
}
