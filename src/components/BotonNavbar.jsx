import Button from 'react-bootstrap/Button';

const BotonNavbar = ({ colorBorde = 'white', texto, colorTexto }) => {
  return (
    <Button className="me-2"
    style={{
        borderColor: colorBorde,
        color: colorTexto,
        backgroundColor: 'transparent'
    }}>
      {texto}
    </Button>
  );
};

export default BotonNavbar;