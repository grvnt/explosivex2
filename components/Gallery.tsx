import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="carousel max-w-xl max-h-xl mx-auto my-12">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/carousel/olympic-cycles-front.jpg"
            alt=""
            width={500} // replace with your desired width
            height={300} // replace with your desired height
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/carousel/popup-banner.jpg"
            alt=""
            width={500} // replace with your desired width
            height={300} // replace with your desired height
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/carousel/re-cycles.jpg"
            alt=""
            width={500} // replace with your desired width
            height={300} // replace with your desired height
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/carousel/toprope-van.jpg"
            alt=""
            width={500} // replace with your desired width
            height={300} // replace with your desired height
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
