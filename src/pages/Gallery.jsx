import "./Gallery.css";

function Gallery() {
  const galleryItems = [
    {
      title: "Our Day Care",
      image: "/images/daycare-1.jpg",
    },
    {
      title: "Learning Activities",
      image: "/images/daycare-2.jpg",
    },
    {
      title: "Creative Activities",
      image: "/images/daycare-3.jpg",
    },
    {
      title: "Play & Recreation",
      image: "/images/daycare-4.jpg",
    },
    {
      title: "Educational Activities",
      image: "/images/daycare-5.jpg",
    },
    {
      title: "Our Environment",
      image: "/images/daycare-6.jpg",
    },
  ];

  return (
    <main className="gallery-page">
      <section className="page-hero">
        <div>
          <p className="section-label">GALLERY</p>
          <h1>Life at Sibahle Day Care</h1>
          <p>
            A look at our environment and activities.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="content-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item.title}>
                <img
                  src={item.image}
                  alt={item.title}
                />
                <div className="gallery-caption">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;