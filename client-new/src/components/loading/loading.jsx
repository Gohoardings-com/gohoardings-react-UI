import Spinner from 'react-bootstrap/Spinner';
import './loading.scss'

function VariantsExample() {
    return (

      < div className='loading-container'>
      <Spinner animation="border"  variant="danger" />
      <Spinner animation="border" variant="primary" size="sm" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="info" size="sm" />
      <Spinner animation="border" variant="warning" />
    

      </div>
    );
  }
  
  export default VariantsExample;