import React from 'react';
import { useStyles } from '../styles';

const ImageContainer = ({ images, currentImageIndex }) => {
  const classes = useStyles();

  const displayDetections = (detections) => {
    return detections.map((det, index) => (
      <div key={index}>
        <div>Detection ID: {det.uuid}</div>
        <div>Mean Confidence: {det.meanconf.toFixed(2)}</div>
        <div>Sum Confidence: {det.sumconf.toFixed(2)}</div>
        <div>Mean Colour Density: {det.meancoldens.toFixed(2)}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className={classes.imageContainer}>
        <div> {images.length} total images </div>
        <div> Index: {currentImageIndex} </div>
      </div>
      {images.length > 0 && <img src={images[currentImageIndex].jpg}/>}
      {images[currentImageIndex] && (
        <>
          {images[currentImageIndex]?.createdOn && (
            <div>Scan Timestamp: {images[currentImageIndex].createdOn} </div>
          )}
          {images[currentImageIndex]?.noiseFloorMetric !== null && (
            <div>Noise Floor Metric: {images[currentImageIndex].noiseFloorMetric.toFixed(2)} </div>
          )}
          {images[currentImageIndex]?.overallConf !== null && (
            <div>Overall Confidence: {images[currentImageIndex].overallConf.toFixed(2)} </div>
          )}
          {images[currentImageIndex]?.detectionsList.length > 0 ? (
            <div>
              <h4>Detections:</h4>
              {displayDetections(images[currentImageIndex].detectionsList)}
            </div>
          ) : (
            <div>No Detections</div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageContainer;
