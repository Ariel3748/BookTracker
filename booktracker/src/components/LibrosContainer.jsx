function LibrosContainer(){


    return(
        <>
        <div className="container my-5 pt-5" id="proyectos">
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
            {libros.map((libro) => (
              <div className="col">
                <CardLibro libro={libro} />
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}