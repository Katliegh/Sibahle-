import { useState } from "react";
import "./Gallery.css";

const events = [
  {
    id: "massive-birthday",
    title: "Ma's Birthday",
    cover: "/images/gallery/events/massive-birthday/1.jpg",
    images: [
      "/images/gallery/events/massive-birthday/1.jpg",
      "/images/gallery/events/massive-birthday/2.jpg",
      "/images/gallery/events/massive-birthday/3.jpg",
      "/images/gallery/events/massive-birthday/4.jpg",
      "/images/gallery/events/massive-birthday/5.jpg",
      "/images/gallery/events/massive-birthday/6.jpg",
    ],
  },

  {
    id: "sports-day",
    title: "Sports Day",
    cover: "/images/gallery/events/sports-day/1.jpg",
    images: [
      "/images/gallery/events/sports-day/1.jpg",
      "/images/gallery/events/sports-day/2.jpg",
      "/images/gallery/events/sports-day/3.jpg",
      "/images/gallery/events/sports-day/4.jpg",
      "/images/gallery/events/sports-day/5.jpg",
      "/images/gallery/events/sports-day/6.jpg",
    ],
  },

  {
    id: "zoo",
    title: "Zoo",
    cover: "/images/gallery/events/zoo/1.jpg",
    images: [
      "/images/gallery/events/zoo/1.jpg",
      "/images/gallery/events/zoo/2.jpg",
      "/images/gallery/events/zoo/3.jpg",
      "/images/gallery/events/zoo/4.jpg",
      "/images/gallery/events/zoo/5.jpg",
      "/images/gallery/events/zoo/6.jpg",
      "/images/gallery/events/zoo/7.jpg",
      "/images/gallery/events/zoo/8.jpg",
    ],
  },

  {
    id: "classroom-activities",
    title: "Classroom Activities",
    cover: "/images/gallery/events/classroom-activities/1.jpg",
    images: [
      "/images/gallery/events/classroom-activities/1.jpg",
      "/images/gallery/events/classroom-activities/2.jpg",
      "/images/gallery/events/classroom-activities/3.jpg",
      "/images/gallery/events/classroom-activities/4.jpg",
      "/images/gallery/events/classroom-activities/5.jpg",
      "/images/gallery/events/classroom-activities/6.jpg",
      "/images/gallery/events/classroom-activities/7.jpg",
      "/images/gallery/events/classroom-activities/8.jpg",
    ],
  },

  {
    id: "principal-visit",
    title: "Principal's Visit",
    cover: "/images/gallery/events/principal/1.jpg",
    images: [
      "/images/gallery/events/principal/1.jpg",
      "/images/gallery/events/principal/2.jpg",
      "/images/gallery/events/principal/3.jpg",
      "/images/gallery/events/principal/4.jpg",
      "/images/gallery/events/principal/5.jpg",
      "/images/gallery/events/principal/6.jpg",
      "/images/gallery/events/principal/7.jpg",
      "/images/gallery/events/principal/8.jpg",
    ],
  },

  {
    id: "pyjama-party",
    title: "Pyjama Party",
    cover: "/images/gallery/events/pyjama-party/1.jpg",
    images: [
      "/images/gallery/events/pyjama-party/1.jpg",
      "/images/gallery/events/pyjama-party/2.jpg",
      "/images/gallery/events/pyjama-party/3.jpg",
      "/images/gallery/events/pyjama-party/4.jpg",
      "/images/gallery/events/pyjama-party/5.jpg",
      "/images/gallery/events/pyjama-party/6.jpg",
      "/images/gallery/events/pyjama-party/7.jpg",
      "/images/gallery/events/pyjama-party/8.jpg",
      "/images/gallery/events/pyjama-party/9.jpg",
      "/images/gallery/events/pyjama-party/10.jpg",
      "/images/gallery/events/pyjama-party/11.jpg",
      "/images/gallery/events/pyjama-party/12.jpg",
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
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
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