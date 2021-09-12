import React, { Component, Fragment } from 'react';
import AddForm from '../AddIForm';
import ListData from '../ListData';
import axios from "axios";
import Styles from "./style.module.css";

const API_KEY = "0e7deec2410b304f98f7e78457b47932";
export default class Main extends Component {
    state = {
        Tempdata: {
            temperature: '',
            city: '',
            country: '',
            humidity: '',
            description: '',
        },
        error: ''
    }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        let city = e.target.city.value;
        let country = e.target.country.value;
        if (city && country) {
            let { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
            this.setState({
                Tempdata: {
                    temperature: Math.round(data.main.temp - 273.15),
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                },
                error: ''
            })
        } else {
            this.setState({
                Tempdata: {
                    temperature: '',
                    city: '',
                    country: '',
                    humidity: '',
                    description: '',
                },
                error: 'Please Enter City and Country'
            })
        }
    }

    render() {
        let { Tempdata, error } = this.state;
        return (
            <Fragment>
                <div className={Styles.mainStyle}>
                    <div className={Styles.app_wrap}>
                        <AddForm handleFormSubmit={this.handleFormSubmit} />
                        <ListData Tempdata={Tempdata} error={error} />

                    </div>
                </div>
            </Fragment>
        )
    }
}
