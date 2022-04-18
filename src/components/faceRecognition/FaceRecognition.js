import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({image, borderBox}) => {
    return (
        <div className='img-wrapper'>
            <div className="img-container">
                {image && <img className='face-img' src={image} alt="could not find image"/>}
                {borderBox && <div 
                    className='border-box'
                    style={{
                        top: `${borderBox.top_row * 100}%`,
                        right: `${(1 - borderBox.right_col) * 100}%`,
                        left: `${borderBox.left_col * 100}%`,
                        bottom: `${(1 - borderBox.bottom_row) * 100}%`,
                    }}
                />}
            </div>
        </div>
    )
}

export default FaceRecognition