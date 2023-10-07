package com.utn.elbuensabor.entities.productos;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rubro_insumo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RubroInsumo extends Rubro{

    @OneToMany(mappedBy = "id_rubro_insumo", cascade = CascadeType.REFRESH)
    private List<Insumo> insumos = new ArrayList();


}
