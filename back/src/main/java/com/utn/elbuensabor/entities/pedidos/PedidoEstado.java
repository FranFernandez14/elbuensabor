package com.utn.elbuensabor.entities.pedidos;

import com.utn.elbuensabor.entities.Base;
import com.utn.elbuensabor.entities.enums.EstadoPedido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.NotFound;

import java.time.LocalDateTime;

@Entity
@Table(name = "pedido_estado")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PedidoEstado extends Base {

    @NotNull
    @Enumerated(EnumType.STRING)
    private EstadoPedido estado;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_pedido")
    private Pedido pedido;
}
