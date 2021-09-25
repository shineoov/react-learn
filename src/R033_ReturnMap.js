import React, {Component} from "react";

class R033_ReturnMap extends Component {

    render() {
        const elementArray = [
          <li>react</li>,
          <li>200</li>,
          <li>Array map</li>,
        ];

        return (
            <ul>
                {elementArray.map((array_val) => array_val)}
            </ul>
        )
    }
}

export default R033_ReturnMap;