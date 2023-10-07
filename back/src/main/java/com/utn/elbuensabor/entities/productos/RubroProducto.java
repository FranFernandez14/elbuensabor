package com.utn.elbuensabor.entities.productos;

import com.utn.elbuensabor.entities.Base;
import com.utn.elbuensabor.entities.enums.TipoRubro;
import jakarta.persistence.*;

import lombok.*;

import java.util.*;

@Entity
@Table(name = "rubro_producto")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RubroProducto extends Rubro {

    @OneToMany(mappedBy = "id_rubro_producto", cascade = CascadeType.REFRESH)
    private List<Producto> productos = new ArrayList();


}
