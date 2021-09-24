import React, { Component } from "react";
import datatype from 'prop-types';

class R018_PropsDataType extends Component {

    render() {
        let {
            String, Number, Boolean, Array, Json, Function
        } = this.props;

        return (
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean}</span>
                <p>ArraysProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(Json)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )

    }
}

R018_PropsDataType.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    Json: datatype.object,
    Function: datatype.func,
}


export default R018_PropsDataType;