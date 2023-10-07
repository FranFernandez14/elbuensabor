package com.utn.elbuensabor.entities.productos;

import com.utn.elbuensabor.entities.Base;
import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.List;
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Rubro extends Base {

    @ManyToOne()
    @JoinColumn(name = "id_rubro_padre")
    private Rubro rubroProductoPadre;

    @OneToMany(mappedBy = "rubroPadre")
    private List<Rubro> subRubro;

    @NotNull
    private String denominacion;

}
