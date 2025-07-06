import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1600&h=900&fit=crop')"
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl font-bold mb-4">
            Verdor
          </h1>
          <p className="text-xl mb-8 leading-relaxed">
            Bienvenido a Verdor, tu tienda especializada en plantas de interior. 
            Descubre nuestra selección cuidadosamente elegida de plantas que 
            transformarán tu hogar en un oasis verde. Desde plantas de fácil cuidado 
            hasta especies exóticas, tenemos la planta perfecta para cada espacio 
            y nivel de experiencia.
          </p>
          <Link 
            to="/productos"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors"
          >
            Comenzar
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home; 