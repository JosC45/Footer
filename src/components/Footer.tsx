import React from "react";
import '../styles/index.css';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-center lg:items-start justify-center mb-4 md:mb-0">
          <div className="w-40 h-40 bg-cover bg-center rounded-full overflow-hidden mb-4">
            <img
              src="img/villa_29.jpg"
              alt="Villa 29 Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Menú de navegación */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Menú</h3>
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-100">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-100">Nosotros</a></li>
              <li><a href="#" className="hover:text-gray-100">Los más pedidos</a></li>
              <li><a href="#" className="hover:text-gray-100">Promociones</a></li>
              <li><a href="#" className="hover:text-gray-100">Ubicaciones</a></li>
              <li><a href="#" className="hover:text-gray-100">Carta</a></li>
            </ul>
          </nav>
        </div>

        {/* Horarios de Atención */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Horarios de Atención:</h3>
          <ul className="space-y-1">
            <li>Lunes a Domingo</li>
            <li>7:00 PM - 11:00 PM</li>
          </ul>
        </div>

        {/* Cómo llegar */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Cómo llegar:</h3>
          <p>Sec 3- Gru 29- Man F- Lote 3</p>
          <p>Villa El Salvador, Lima</p><br />
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Referencia:</h3>
          <p>Av. Mariano Pastor Sevilla</p>
          <p>Entre Av. José Olaya y Balandra y Av. José Carlos Mariátegui</p>
        </div>

        {/* Contacto y redes sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Contáctanos:</h3>
          <p>987 280 900</p>
          <br />
          {/* Iconos de redes sociales */}
          <div className="flex space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaInstagram size={30} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[#000000]">
              <FaTiktok size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;