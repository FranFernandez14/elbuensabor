package com.utn.elbuensabor.repositories.pedidos;

import com.utn.elbuensabor.entities.pedidos.*;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoEstadoRepository extends BaseRepository<PedidoEstado, Long> {
}
