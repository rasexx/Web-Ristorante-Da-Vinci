import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  const [menuTitle, setMenuTitle] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const showMenu = (title, imgSrc) => {
    setMenuTitle(title);
    setMenuImage(imgSrc);
    setShowModal(true);
  };

  const closeMenu = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Head>
        <title>Ristorante Da Vinci</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous" 
        />
        <link href="/colorespersonalizados.css" rel="stylesheet" />
        <link href="/gridprincipal.css" rel="stylesheet" />
        <link href="/header.css" rel="stylesheet" />
        <link href="/nuevo.css" rel="stylesheet" />
        <link href="/tarjetas.css" rel="stylesheet" />
      </Head>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
        crossOrigin="anonymous" 
      />
      <Script src="/script.js" />

      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
              <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
            <li><a href="#" className="nav-link px-2">Contactanos</a></li>
            <li><a href="#" className="nav-link px-2">Reservar</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>

      <section className="section py-5">
        <h3 className="section-title text-center">Oferta Gastronómica</h3>
        <div className="container">
          <div className="row">
            {[
              { title: 'Entradas', img: 'croquetas.jpg' },
              { title: 'Platos Principales', img: 'mignon.jpg' },
              { title: 'Pizzas', img: 'pizza.jpg' },
              { title: 'Postres', img: 'dessert.jpg' },
              { title: 'Coctéles', img: 'margarita.jpg' },
              { title: 'Vinos', img: 'wine.jpg' }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="image-container" onClick={() => showMenu(item.title, `/images/food/${item.img}`)}>
                  <img src={`/images/food/${item.img}`} alt={item.title} className="img-fluid" />
                  <div className="image-caption">
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div id="menuModal" className="menu-modal">
          <div className="menu-modal-content">
            <span className="close" onClick={closeMenu}>&times;</span>
            <h2 id="menuTitle">{menuTitle}</h2>
            <img id="menuImage" src={menuImage} alt="Menu Image" className="img-fluid" />
          </div>
        </div>
      )}

      <section className="section py-5">
        <h3 className="section-title text-center">¿Porque nosotros?</h3>
        <div className="container">
          <div className="row">
            {[
              { title: 'Nostra Passione', img: 'croquetas.jpg', text: 'Ofrecemos una experiencia culinaria única, inspirada en la cultura italiana y la genialidad de Leonardo da Vinci.' },
              { title: 'Nostro Sogno', img: 'mignon.jpg', text: 'Queremos ser el restaurante italiano más prestigioso de Cartagena, reconocido por nuestra calidad y dedicación.' },
              { title: 'Nostra Essenza', img: 'pizza.jpg', text: 'Trabajamos con honestidad, pasión, respeto y creatividad, siempre honrando a Da Vinci y brindando un servicio excepcional.' }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card custom-card">
                  <img src={`/images/food/${item.img}`} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-3 text-center">
        <p>Ristorante Da Vinci &copy; 2022</p>
      </footer>
    </div>
  );
}
