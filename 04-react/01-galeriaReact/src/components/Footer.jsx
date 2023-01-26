import React from "react"
import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <Alert variant="dark" className="galleryFooter">
          <Alert.Heading>Muchas gracias por ver esta galería</Alert.Heading>
          <p>
            Para más información del mundo de Hunter x Hunter puedes ver{' '}
            <Alert.Link href="https://hunterxhunter.fandom.com/es" target="_blank" rel="noopener noreferrer">el siguiente enlace</Alert.Link>
          </p>
        </Alert>
      );
}

export default Footer;