import { useState } from "react";
import "./Gallery.css";

const events = [
  {
    id: "mas-birthday",
    title: "Ma's Birthday",
    cover: "/gallery/events/mas-birthday/1.jpg",
    images: [
      "/gallery/events/mas-birthday/1.jpg",
      "/gallery/events/mas-birthday/2.jpg",
      "/gallery/events/mas-birthday/3.jpg",
    ],
  },
  {
    id: "sports-day",
    title: "Sports Day",
    cover: "/gallery/events/sports-day/1.jpg",
    images: [
      "/gallery/events/sports-day/1.jpg",
      "/gallery/events/sports-day/2.jpg",
      "/gallery/events/sports-day/3.jpg",
    ],
  },
  {
    id: "zoo",
    title: "Zoo",
    cover: "/gallery/events/zoo/1.jpg",
    images: [
      "/gallery/events/zoo/1.jpg",
      "/gallery/events/zoo/2.jpg",
      "/gallery/events/zoo/3.jpg",
    ],
  },
  {
    id: "pyjama-party",
    title: "Pyjama Party",
    cover: "/gallery/events/pyjama-party/1.jpg",
    images: [
      "/gallery/events/pyjama-party/1.jpg",
      "/gallery/events/pyjama-party/2.jpg",
      "/gallery/events/pyjama-party/3.jpg",
    ],
  },
];

function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openEvent = (event) => {
    setSelectedEvent(event);
    setSelectedImage(0);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === selectedEvent.images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? selectedEvent.images.length - 1 : current - 1
    );
  };

  return (
    <main className="gallery-page">

      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="section-container">
          <p className="section-label">Gallery</p>

          <h1>Our Events</h1>

          <p>
            Take a look at some of the special moments and events
            shared by the children and staff at Sibahle Day Care.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="gallery-section">
        <div className="section-container">

          <div className="event-grid">
            {events.map((event) => (
              <button
                key={event.id}
                className="event-card"
                onClick={() => openEvent(event)}
              >
                <div className="event-card-image">
                  <img
                    src={event.cover}
                    alt={event.title}
                  />
                </div>

                <div className="event-card-content">
                  <h2>{event.title}</h2>
                  <span>View Photos →</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Event Lightbox */}
      {selectedEvent && selectedImage !== null && (
        <div className="lightbox">

          <button
            className="lightbox-close"
            onClick={closeEvent}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="lightbox-content">

            <img
              src={selectedEvent.images[selectedImage]}
              alt={`${selectedEvent.title} ${selectedImage + 1}`}
            />

            <p>
              {selectedEvent.title} · {selectedImage + 1} /{" "}
              {selectedEvent.images.length}
            </p>

          </div>

          <button
            className="lightbox-arrow lightbox-next"
            onClick={nextImage}
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