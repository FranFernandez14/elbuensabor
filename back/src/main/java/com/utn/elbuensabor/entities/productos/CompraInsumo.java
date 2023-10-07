package com.utn.elbuensabor.entities.productos;


import com.utn.elbuensabor.entities.Base;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.*;

@Entity
@Table(name = "compra_insumo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class CompraInsumo extends Base {

    @OneToMany(mappedBy = "id_compra_insumo", cascade = CascadeType.ALL)
    List<DetalleCompra> detalles = new ArrayList();
}
