package com.utn.elbuensabor.entities.productos;

import com.utn.elbuensabor.entities.Base;
import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

@Entity
@Table(name = "detalle_compra")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class DetalleCompra extends Base {

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Insumo insumo;

    @NotNull
    @Column(name = "cantidad", precision = 10, scale = 2)
    private BigDecimal cantidad;

    @ManyToOne
    @JoinColumn(name = "id_compra_insumo")
    private CompraInsumo compraInsumo;

}
