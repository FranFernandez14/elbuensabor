package com.utn.elbuensabor.repositories.pedidos;

import com.utn.elbuensabor.entities.pedidos.Pedido;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends BaseRepository<Pedido, Long> {
}
