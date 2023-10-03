package com.utn.elbuensabor.repositories.productos;


import com.utn.elbuensabor.entities.productos.Insumo;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InsumoRepository extends BaseRepository<Insumo, Long> {
}
