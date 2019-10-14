import React from 'react';

function Formulario() {
    
    const handleChange = e => {
        // Cambiar el state
    }
    
    return (
        <form>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                 />
                 <label htmlFor="ciudad" >Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">El Salvador</option>
                    <option value="MX">México</option>
                    <option value="CO">Colombia</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar clima" />
            </div>
        </form>
    );
}

export default Formulario;