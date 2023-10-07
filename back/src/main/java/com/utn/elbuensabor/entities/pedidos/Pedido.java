package com.utn.elbuensabor.entities.pedidos;

import com.utn.elbuensabor.entities.Base;
import com.utn.elbuensabor.entities.enums.EstadoPedido;
import com.utn.elbuensabor.entities.enums.FormaPago;
import com.utn.elbuensabor.entities.enums.TipoEnvio;
import com.utn.elbuensabor.entities.usuarios.Domicilio;
import com.utn.elbuensabor.entities.usuarios.Usuario;
import jakarta.persistence.*;


import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "pedido")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Pedido extends Base {

    @NotNull
    @Column(name = "fecha_pedido")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaPedido;

    @NotNull
    @Column(name = "hora_estimada_finalizacion")
    @Temporal(TemporalType.TIMESTAMP)
    private LocalDateTime horaEstimadaFinalizacion;

    @NotNull
    @Column(name = "total", precision = 10, scale = 2)
    private BigDecimal total;

    @NotNull
    @Column(name = "total_costo", precision = 10, scale = 2)
    private BigDecimal totalCosto;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EstadoPedido estadoActual;

    @OneToMany(mappedBy = "id_pedido", cascade = CascadeType.REFRESH)
    private List<PedidoEstado> estados = new ArrayList();

    @NotNull
    @Column(name = "tipo_envio")
    @Enumerated(EnumType.STRING)
    private TipoEnvio tipoEnvio;

    @NotNull
    @Column(name = "forma_pago")
    @Enumerated(EnumType.STRING)
    private FormaPago formaPago;

    @ManyToOne()
    @JoinColumn(name = "id_domicilio_entrega")
    private Domicilio domicilioEntrega;

    @NotNull
    @ManyToOne()
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

}
