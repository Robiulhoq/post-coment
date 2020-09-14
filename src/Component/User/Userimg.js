import React from 'react';

const Userimg = (props) => {
    const {img} = props.ig;
    const mainStyle ={
        borderRadius : '50px',
        height: '60px',
        weight: '200px'
    }
    return (
        <div>
            <img style={mainStyle} src={img} alt=""/>
        </div>
    );
};

export default Userimg;