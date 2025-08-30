import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
};

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
};
const slideImages = [
    {
        url: 'https://th.bing.com/th/id/R.07bfaaf8697e82bcaa27a2cc266a9426?rik=HDTYZEZKw7cyEw&riu=http%3a%2f%2fbncamazonas.com.br%2fwp-content%2fuploads%2f2017%2f07%2fUNICAMP.jpg&ehk=LkQT7ktuLaVKDXi7VjHn5eD09fKfiLh3EtWLxQwUmdY%3d&risl=&pid=ImgRaw&r=0',
        caption: 'Slide 1'
    },
    {
        url: 'https://ubrabio.com.br/wp-content/uploads/2019/07/vista-aerea-unicamp-1200x675.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'https://ubrabio.com.br/wp-content/uploads/2019/07/vista-aerea-unicamp-1200x675.jpg',
        caption: 'Slide 3'
    },
];

function SlideShowHomePage() {

    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
}

export default SlideShowHomePage;
