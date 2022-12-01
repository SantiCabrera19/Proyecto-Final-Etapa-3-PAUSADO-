import React, { Component } from "react";

class Buscador extends Component {

    render() {
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca Noticias"></input>
                    </div>
                    <div className="form-group col-md-1">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar.." placeholder="Busca Noticias"></input>
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador