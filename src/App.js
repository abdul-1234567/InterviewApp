import "./App.css";
import { useStyles } from './styles';
import { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";
import ImageContainer from "./components/ImagesContainer";
import { getEvents } from './api';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(true);
  const [error, setError] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getEvents(setImages, setError);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((index) => (index + 1) % filteredImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((index) => (index - 1 + images.length) % filteredImages.length);
  };

  const handleToggle = (event) => {
    setShowAllImages(event.target.checked);
  };

  const filteredImages = showAllImages ? images : images.filter(image => image.detectionsList.length !== 0);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <div className={classes.contentContainer}>
        {error ? (
          <div>{error}</div>
        ) : (
          <>
            <FormControlLabel
              control={<Switch checked={showAllImages} onChange={handleToggle} />}
              label="Show Images Without Detection"
            />
            {images.length > 0 && (
              <>
              <div className={classes.buttonContainer}>
                <button type="button" onClick={prevImage}>Previous Image</button>
                <button type="button" onClick={nextImage}>Next Image</button>
              </div>
              <ImageContainer images={filteredImages} currentImageIndex={currentImageIndex}/>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
