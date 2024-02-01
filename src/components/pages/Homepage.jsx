import './HomePage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Homepage() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  return (
    <div>
      <div className='header'>
        <img className="encabezado" src="/assets/1.jpg" alt="Encabezado" />
      </div>
      <div className='content'>
        <p className='overlay-text'>Somos un estudio de arquitectura especializado en el desarrollo de proyecto, diseño y dirección de obra. A través del diseño, buscamos potenciar el paisaje y crear un diálogo con el entorno.</p>
        <img className='fondo' src="/assets/fondo2.png" alt="fondo" />
      </div>
      <section className="section1">
        <div className='s1'>
          <p className='ts1'>PROYECTOS</p>
          <p className='proyectos'>
            Entendiendo que cada cliente es único, logramos traducir sus ideas y emociones en proyectos.
          </p>
          <button>VER TODOS</button>
        </div>
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div>
              <img className='sliderimg' src="/assets/2.jpg" alt="Slider1" />
            </div>
            <div>
              <img className='sliderimg' src="/assets/3.jpg" alt="Slider2" />
            </div>
            <div>
              <img className='sliderimg' src="/assets/4.jpg" alt="Slider3" />
            </div>
          </Slider>
        </div>
      </section>
      <div className='content2'>
        <p className='phrase'>TRANSFORMAMOS IDEAS EN REALIDAD.</p>
        <img className='idea' src="/assets/SKETCH.png" alt="idea" />
      </div>

    </div>
  );
}

export default Homepage;




