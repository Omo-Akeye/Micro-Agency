interface Image {
    id: any;
    image: string;
  }
  
  interface InfiniteScrollingProps {
    images: Image[];
    speed?: number;
  }
  
const InfiniteScrolling = ({ images, speed = 5000 }:InfiniteScrollingProps) => {
    return (
      <div className="inner ">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  




  const InfiniteScrollImages = () => {
    const images = [
        "/reviews.svg","/reviews.svg","/reviews.svg","/reviews.svg","/reviews.svg","/reviews.svg","/reviews.svg","/reviews.svg",
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));
    return (
      <div className=" w-full">
     <InfiniteScrolling images={images} speed={50000} />
      </div>
    );
  };



  export default InfiniteScrollImages