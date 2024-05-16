import "./App.css";
import { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";
import ImageContainer from "./components/ImagesContainer";
import { getEvents } from './api';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ContentWrapper, ButtonWrapper} from './styles';

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(true);
  const [error, setError] = useState('');

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
      <ContentWrapper>
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
              <ButtonWrapper>
                <button type="button" onClick={prevImage}>Previous Image</button>
                <button type="button" onClick={nextImage}>Next Image</button>
              </ButtonWrapper>
              <ImageContainer images={filteredImages} currentImageIndex={currentImageIndex}/>
              </>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
}

export default App;
