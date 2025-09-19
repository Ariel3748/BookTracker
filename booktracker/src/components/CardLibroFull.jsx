export function CardLibroFull(){

  //Agregar el boton para modificar o borrar o en el CRUD seleccionar por id y hacerlo desde ahi

    return(
        <>
            <Card className="mb-4 shadow-sm">
      <Row className="g-0">
        {/* Columna de la izquierda (imagen + botones) */}
        <Col
          md={4}
          className="d-flex flex-column align-items-center justify-content-center p-3"
        >
          <Card.Img
            src="https://via.placeholder.com/150"
            alt="Portada libro"
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
          <div className="d-flex gap-2 mt-3">
            <Button variant="success">👍</Button>
            <Button variant="danger">👎</Button>
          </div>
        </Col>

        {/* Columna derecha (tabla + clasificación + notas) */}
        <Col md={8} className="p-3">
          <Card.Title className="mb-3">Título del libro</Card.Title>

          {/* Tabla con datos */}
          <Table bordered size="sm" responsive>
            <tbody>
              <tr>
                <td>Autor</td>
                <td>Ejemplo Autor</td>
              </tr>
              <tr>
                <td>Género</td>
                <td>Ejemplo Género</td>
              </tr>
              <tr>
                <td>Saga</td>
                <td>Ejemplo Saga</td>
              </tr>
              <tr>
                <td>Volumen</td>
                <td>Ejemplo Volumen</td>
              </tr>
              <tr>
                <td>Páginas</td>
                <td>123</td>
              </tr>
              <tr>
                <td>Editorial</td>
                <td>Ejemplo Editorial</td>
              </tr>
            </tbody>
          </Table>

          {/* Clasificación */}
          <div className="mb-3">
            <strong>Clasificación:</strong> ⭐⭐⭐⭐⭐
          </div>

          {/* Notas */}
          <Button variant="light" className="border">
            Notas
          </Button>
        </Col>
      </Row>
    </Card>
        
        </>
    )
}