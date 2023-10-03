package com.utn.elbuensabor.entities.productos;

import com.utn.elbuensabor.entities.Base;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.math.BigDecimal;

@Entity
@Table(name = "insumo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Insumo extends Base {

    @NotNull
    private String denominacion;

    @Column(name = "url_imagen")
    private String urlImagen;

    @NotNull
    @Column(name = "precio_compra", precision = 10, scale = 2)
    private BigDecimal precioCompra;

    @NotNull
    @Column(name = "stock_actual", precision = 10, scale = 2)
    private BigDecimal stockActual;

    @NotNull
    @Column(name = "stock_minimo", precision = 10, scale = 2)
    private BigDecimal stockMinimo;

    @NotNull
    @ManyToOne()
    @JoinColumn(name = "id_unidad_medida")
    private UnidadMedida unidadMedida;

    @NotNull
    @ManyToOne()
    @JoinColumn(name = "id_rubro_insumo")
    private RubroInsumo rubroInsumo;


}
