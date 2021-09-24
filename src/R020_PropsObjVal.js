import React, { Component } from "react";
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
    render() {
        let {
            Json
        } = this.props

        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(Json)}
            </div>
        )
    }
}


R020_PropsObjVal.propTypes = {
    Json: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;