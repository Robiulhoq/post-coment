import React from 'react';
import { Link } from 'react-router-dom';

const Postlist = (props) => {
    const {title, body, id} = props.ditails;
    console.log(props.ditails);
    const style = {
        borderBottom: '1px solid #51e2f5',
        boxShadow:'10px 10px 10px lightgray'
    };
    const mainStyle = {
        margin: '5px',
        padding: '15px'
    };
    const bold = {
        fontWeight: 'bold'
    };
    const button = {
        backgroundColor: '#68d388',
        height: '30px',
        weight: '50px',
        borderRadius : '10px'
    }
    return (
        <div style={mainStyle}>
            <h3 style={style}> TITLE: {title} </h3>
            <p><span style={bold}> Description </span>: {body}</p>
            <Link to={`postditails/${id}`}> <button style={button}>See More.</button></Link>
        </div>
    );
};

export default Postlist;