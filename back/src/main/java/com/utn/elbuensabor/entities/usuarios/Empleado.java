package com.utn.elbuensabor.entities.usuarios;

import com.utn.elbuensabor.entities.enums.RolEmpleado;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
@Table(name = "empleado")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Empleado extends Usuario {

    @NotNull
    @Column(name="rol")
    @Enumerated(EnumType.STRING)
    private RolEmpleado rolEmpleado;

}
