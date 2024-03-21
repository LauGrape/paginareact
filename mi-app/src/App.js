import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
     <div className='contenedor-principal'>
      <h1>Personajes de Bob Esponja</h1>
    <Testimonio
      nombre='Bob esponja'
      imagen='bob'
      lugar='piña'
      cargo='cocinero'
      empresa='Krustaceo Kascarudo'
      testimonio='Me encanta trabajar aqui'/>
   
  <Testimonio 
  nombre='Patricio Estrrella'
  imagen='estrella'
  lugar='roca'
  cargo='sin oficio'
  empresa='no tiene empresa'
  testimonio='Una vez gane un premio por no hacer nada'/>


  <Testimonio
  nombre='Calamardo'
  imagen= 'calamardo'
  lugar= 'Casa de calamrdo'
  cargo='Cajero'
  empresa='Krustaceo cascarudo'
  testimonio='Me gusta tocar el clarinete'/>




   </div>
    </div>

  );
}

export default App;

