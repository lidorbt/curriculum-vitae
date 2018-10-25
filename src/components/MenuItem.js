import React, {Component} from 'react'; 

export default class MenuItem extends Component
{
    render()
    {
        const { targetInfo, style, ...reset } = this.props;
        let activeStyle = null;
        if (targetInfo.active) {
            activeStyle = Styles.active;
        }
        return (<div style={{
           ...Styles.link,
           ...style,
           ...activeStyle
        }} {...reset}  />);
    }
}

const Styles = {
    link: {
        display: "inline-block",
        padding: "0.3rem 0.5rem",
        fontSize: "2rem",
        color: "#fff",
        marginRight: 10,
        opacity: "0.5",
        cursor: "pointer",
    },
    active: {
        opacity: 1
    },
};