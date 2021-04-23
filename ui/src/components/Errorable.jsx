import React from "react"

export default class Errorable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    static getDerivedStateFromError(error, errorInfo) {
        return { error, errorInfo };
    }

    render() {
        return this.state.error || this.state.errorInfo ? <div className="">
            程序运行错误!
        </div> : this.props.children
    }
}