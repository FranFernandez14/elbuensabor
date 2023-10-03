package com.utn.elbuensabor.repositories.facturacion;

import com.utn.elbuensabor.entities.facturacion.Factura;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacturaRepository extends BaseRepository<Factura, Long> {
}
