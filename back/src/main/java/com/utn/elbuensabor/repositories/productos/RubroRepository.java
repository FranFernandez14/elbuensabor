package com.utn.elbuensabor.repositories.productos;

import com.utn.elbuensabor.entities.productos.Rubro;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RubroRepository extends BaseRepository<Rubro, Long> {
}
