import React, { useState } from 'react';
import data from '../Data/data.json'
import Userimg from '../User/Userimg';

const Commentditails = (props) => {
    const {name, email ,body} = props.comment;
    const userimg = data;
    const [img, setimg] = useState(userimg);
    console.log(img)

    const commentStyle = {
        margin: '10px',
        padding: '10px',
        boxShadow: '10px 10px 30px lightgray',
        borderRadius : '10px'
    }
    return (
        <div style={commentStyle}>
           <div>
           {
                img.map(images => <Userimg ig={images}></Userimg>)
            }
           </div>
            <h3>Name: {name}</h3>
            <h6>Mail: {email}</h6>
            <p>Comment: {body}</p>
        </div>
    );
};

export default Commentditails;