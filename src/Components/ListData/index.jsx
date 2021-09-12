import React, { Fragment } from 'react'
import Styles from "./style.module.css";

const ListData = (props) => {
    let { Tempdata, error } = props

    return (
        <Fragment>
            {error && <div className={Styles.error}>{error}</div>}
            <div className="text-center mt-5">
                {Tempdata.temperature && <p className={Styles.dataStyle}><b>Temperature: </b>{Tempdata.temperature}<span>°c</span></p>}
                {Tempdata.city && <p className={Styles.dataStyle} ><b>City: </b>{Tempdata.city}</p>}
                {Tempdata.country && <p className={Styles.dataStyle}><b>Country: </b>{Tempdata.country}</p>}
                {Tempdata.humidity && <p className={Styles.dataStyle}><b>Humidity: </b>{Tempdata.humidity}</p>}
                {Tempdata.description && <p className={Styles.dataStyle}><b>Description: </b>{Tempdata.description}</p>}

            </div>
        </Fragment>
    )

}
export default ListData