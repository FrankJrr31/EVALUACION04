const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {productos: []};
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});

	}
	render() {
		return (
			<>
				<h1>Demo App!</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Productos" emoji="🍉" />
						<ProductoList productos={this.state.productos} />
						<Link to="/nuevo-producto">Nuevo Producto</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>precio</th>
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}


class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.precio}</td>
			</tr>
		)
	}
}

module.exports = PageHome;