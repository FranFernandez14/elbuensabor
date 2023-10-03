package com.utn.elbuensabor.repositories.productos;

import com.utn.elbuensabor.entities.productos.Producto;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends BaseRepository<Producto, Long> {
}
