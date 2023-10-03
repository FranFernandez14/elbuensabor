package com.utn.elbuensabor.entities.usuarios;

import com.utn.elbuensabor.entities.pedidos.Pedido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cliente")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Cliente extends Usuario {

    @OneToMany (mappedBy = "id_cliente", cascade = CascadeType.ALL)
    private List<Pedido> pedidos = new ArrayList<>();

}
