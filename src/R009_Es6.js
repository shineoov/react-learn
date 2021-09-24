import React, { Component } from "react";

class R009_Es6 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let string1 = '자바스크립트'
        let string2 = '입니다\n다음줄입니다.'

        console.log(string1 + '문자열' + string2 + '~');


        let string3 = 'ES6'
        let string4 = '입니다!'

        console.log(`${string3} 문자열 ${string4}!!
        ___ 다음줄입니다.`);


        let longString = "ES6에 추가된 String 함수들입니다.";

        console.log('startsWith: ' + longString.startsWith("ES6에 추가"));
        console.log('endWith: ' + longString.endsWith('들입니다.'));
        console.log('includes: ' + longString.includes("추가된"));
    }

    render() {
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Es6;