package com.utn.elbuensabor;

import com.utn.elbuensabor.entities.enums.EstadoPedido;
import com.utn.elbuensabor.entities.enums.FormaPago;
import com.utn.elbuensabor.entities.enums.Rol;
import com.utn.elbuensabor.entities.enums.TipoEnvio;
import com.utn.elbuensabor.entities.facturacion.*;
import com.utn.elbuensabor.entities.pedidos.*;
import com.utn.elbuensabor.entities.productos.*;
import com.utn.elbuensabor.entities.usuarios.*;
import com.utn.elbuensabor.repositories.facturacion.*;
import com.utn.elbuensabor.repositories.pedidos.*;
import com.utn.elbuensabor.repositories.productos.*;
import com.utn.elbuensabor.repositories.usuarios.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;

@SpringBootApplication
public class ElbuensaborApplication {
	@Autowired
	DetalleFacturaRepository detalleFacturaRepository;
	@Autowired
	FacturaRepository facturaRepository;
	@Autowired
	DetallePedidoRepository detallePedidoRepository;
	@Autowired
	PedidoEstadoRepository pedidoEstadoRepository;
	@Autowired
	PedidoRepository pedidoRepository;
	@Autowired
	CompraInsumoRepository compraInsumoRepository;
	@Autowired
	DetalleCompraRepository detalleCompraRepository;
	@Autowired
	DetalleRecetaRepository detalleRecetaRepository;
	@Autowired
	InsumoRepository insumoRepository;
	@Autowired
	ProductoRepository productoRepository;
	@Autowired
	RubroInsumoRepository rubroInsumoRepository;
	@Autowired
	RubroProductoRepository rubroProductoRepository;
	@Autowired
	RubroRepository rubroRepository;
	@Autowired
	UnidadMedidaRepository unidadMedidaRepository;
	@Autowired
	DomicilioRepository domicilioRepository;
	@Autowired
	UsuarioRepository usuarioRepository;

	public static void main(String[] args) {

		SpringApplication.run(ElbuensaborApplication.class, args);
	}
	@Bean
	CommandLineRunner init(DetalleFacturaRepository detalleFacturaRepository,
						   FacturaRepository facturaRepository,
						   DetallePedidoRepository detallePedidoRepository,
						   PedidoEstadoRepository pedidoEstadoRepository,
						   PedidoRepository pedidoRepository,
						   CompraInsumoRepository compraInsumoRepository,
						   DetalleCompraRepository detalleCompraRepository,
						   DetalleRecetaRepository detalleRecetaRepository,
						   InsumoRepository insumoRepository,
						   ProductoRepository productoRepository,
						   RubroInsumoRepository rubroInsumoRepository,
						   RubroProductoRepository rubroProductoRepository,
						   RubroRepository rubroRepository,
						   UnidadMedidaRepository unidadMedidaRepository,
						   DomicilioRepository domicilioRepository,
						   UsuarioRepository usuarioRepository
						   ) {
		return args -> {
			System.out.println("FUNCIONANDO");

			UnidadMedida gramos = UnidadMedida.builder()
					.abreviatura("g")
					.denominacion("Gramos")
					.build();
			unidadMedidaRepository.save(gramos);
			UnidadMedida milimetros = UnidadMedida.builder()
					.abreviatura("ml")
					.denominacion("Milimetros")
					.build();
			unidadMedidaRepository.save(milimetros);



			Rubro rubro = Rubro.builder()
					.denominacion("Comida rápida")
					.build();
			rubroRepository.save(rubro);

			//RubroInsumo rubroInsumo = RubroInsumo.builder()
				//	.build();


			Insumo insumo1 = Insumo.builder()
					.denominacion("tomate")
					.precioCompra(new BigDecimal(899.99))
					//.rubroInsumo()
					.stockActual(new BigDecimal(59))
					.stockMinimo(new BigDecimal(10))
					.unidadMedida(gramos)
					.urlImagen("https://images.app.goo.gl/GjWapbDT827Koxg19")
					.build();
			Insumo insumo2 = Insumo.builder()
					.denominacion("lechuga")
					.precioCompra(new BigDecimal(1099.99))
					//.rubroInsumo()
					.stockActual(new BigDecimal(30))
					.stockMinimo(new BigDecimal(10))
					.unidadMedida(gramos)
					.urlImagen("https://images.app.goo.gl/x7swa69dg18nfj7QA")
					.build();
			List<Insumo> insumos= new ArrayList<>();
			insumos.add(insumo1);
			insumos.add(insumo2);


			Domicilio domicilio1 = Domicilio.builder()
					.calle("San Martin")
					.codigoPostal(5567)
					.numero(290)
					.numeroDpto(7)
					.localidad("Ciudad")
					.pisoDpto(1)
					//.usuario(usuarios)
					.build();
			Domicilio domicilio2 = Domicilio.builder()
					.calle("Belgrano")
					.codigoPostal(5500)
					.numero(124)
					.numeroDpto(2)
					.localidad("Ciudad")
					.pisoDpto(0)
				//	.usuario()
					.build();
			List<Domicilio> domicilios = new ArrayList<>();
			domicilios.add(domicilio1);
			domicilios.add(domicilio2);





			Producto producto1 = Producto.builder()
					.costo(new BigDecimal(1100))
					.denominacion("Hamburguesa")
					.descripcion("Pan, carne, queso, lechuga y tomate")
					.precioVenta(new BigDecimal(2000))
				//	.receta()
				//	.rubroProducto()
					.tiempoEstimadoCocina(50)
					.urlImagen("")
					.build();
			Producto producto2 = Producto.builder()
					.costo(new BigDecimal(1600))
					.denominacion("Pizza")
					.descripcion("masa, muzzarella, salsa")
					.precioVenta(new BigDecimal(2100))
				//	.receta()
				//	.rubroProducto()
					.tiempoEstimadoCocina(40)
					.urlImagen("")
					.build();
			List<Producto> productos = new ArrayList<>();
			productos.add(producto1);
			productos.add(producto2);


			

			LocalDateTime fhEstimada = LocalDateTime.of(2023,10,6, 22, 30, 0);
			Pedido pedido1= Pedido.builder()
					.usuario(Usuario.builder().build())
					.domicilioEntrega(domicilio1)
					//.estadoActual()
					//.estados(EstadoPedido.COMPLETADO)
					//.fechaPedido(LocalDateTime.now())
					.formaPago(FormaPago.EFECTIVO)
					.horaEstimadaFinalizacion(fhEstimada)
					.tipoEnvio(TipoEnvio.DELIVERY)
					.total(new BigDecimal(5000))
					.totalCosto(new BigDecimal(3400))
					.build();


			PedidoEstado pedidoEstado1= PedidoEstado.builder()
					.estado(EstadoPedido.COMPLETADO)
					.pedido(pedido1)
					.build();
			List<PedidoEstado> estados = new ArrayList<>();
			estados.add(pedidoEstado1);

			DetallePedido detallePedido1 = DetallePedido.builder()
					.cantidad(1)
					.pedido(pedido1)
					.producto(producto1)
					.subtotal(new BigDecimal(4000))
					.subtotalCosto(new BigDecimal(2000))
					.build();
			DetallePedido detallePedido2 = DetallePedido.builder()
					.cantidad(1)
					.producto(producto2)
					.subtotal(new BigDecimal(5000))
					.subtotalCosto(new BigDecimal(3000))
					.build();
			List<DetallePedido> detallesPedido = new ArrayList<>();
			detallesPedido.add(detallePedido1);
			detallesPedido.add(detallePedido2);




			Usuario usuario1 = Usuario.builder()
					.apellido("Alvarez")
					.domicilios(domicilios)
					.email("estebanalvarez@gmail.com")
					.nombre("Esteban")
					.password("********")
					.pedidos((List<Pedido>) pedido1)
					.rol(Rol.CLIENTE)
					.telefono("2619302642")
					.build();

			Usuario usuario2 = Usuario.builder()
					.apellido("Fernandez")
					.domicilios(domicilios)
					.email("juanfernandez@gmail.com")
					.nombre("Juan")
					.password("********")
					.pedidos((List<Pedido>) pedido1)
					.rol(Rol.CLIENTE)
					.telefono("2615555621")
					.build();
			List<Usuario> usuarios = new ArrayList<>();
			usuarios.add(usuario1);
			usuarios.add(usuario2);



			LocalDateTime fhFacturacion = LocalDateTime.of(2023,10,6, 22, 30, 0);
			Factura factura1 = Factura.builder()
					.fechaFacturacion(fhFacturacion)
					.formaPago(FormaPago.EFECTIVO)
					.mpMerchantOrderId(9L)
					.mpPaymentId(9L)
					.mpPaymentType("c")
					.mpPreferenceId("f")
					.pedido(pedido1)
					.totalVenta(new BigDecimal(5000))
					.build();
			facturaRepository.save(factura1);




			DetalleFactura detalleFactura1 = DetalleFactura.builder()
					.cantidad(4)
					.factura(factura1)
			//		.insumo()
					.producto(producto1)
					.subtotal(detallePedido1.getSubtotal())
					.build();


			DetalleReceta detalleReceta1= DetalleReceta.builder()
				//	.cantidad()
					.costo(producto1.getCosto())
					.insumo(insumo1)
					.producto(producto1)
					.build();


			CompraInsumo compraInsumo1 = CompraInsumo.builder()
			//		.detalles()
					.build();
			CompraInsumo compraInsumo2 = CompraInsumo.builder()
			//		.detalles()
					.build();
			List<CompraInsumo> compraInsumos = new ArrayList<>();
			compraInsumos.add(compraInsumo1);
			compraInsumos.add(compraInsumo2);


			DetalleCompra detalleCompra1 = DetalleCompra.builder()
					.cantidad(new BigDecimal(1))
				//	.compraInsumo()
				//	.insumo()
					.build();



		};
	}
}
