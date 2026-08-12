import { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/2.jpg",
      alt: "Sibahle Day Care children during an outdoor educational outing",
    },
    {
      src: "/images/3.jpg",
      alt: "Sibahle Day Care children and staff gathered together",
    },
    {
      src: "/images/4.jpg",
      alt: "Sibahle Day Care children participating in an outdoor activity",
    },
    {
      src: "/images/5.jpg",
      alt: "Sibahle Day Care children and staff during an outdoor group activity",
    },
    {
      src: "/images/6.jpg",
      alt: "Sibahle Day Care children enjoying an outdoor recreational activity",
    },
    {
      src: "/images/7.jpg",
      alt: "Sibahle Day Care children playing on outdoor equipment",
    },
  ];

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <main className="gallery-page">

      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="section-container">
          <p className="section-label">OUR GALLERY</p>

          <h1>Life at Sibahle Day Care</h1>

          <p>
            Take a look at our environment and the activities
            offered at Sibahle Day Care.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="section-container">

          <div className="gallery-grid">
            {images.map((image, index) => (
              <button
                className="gallery-item"
                key={image.src}
                onClick={() => openImage(index)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="lightbox"
          onClick={closeImage}
        >

          <button
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
            />

            <p>
              {selectedImage + 1} / {images.length}
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>

        </div>
      )}

    </main>
  );
}

export default Gallery;