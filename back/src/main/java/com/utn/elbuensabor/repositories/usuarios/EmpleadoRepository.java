package com.utn.elbuensabor.repositories.usuarios;

import com.utn.elbuensabor.entities.usuarios.Empleado;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends BaseRepository<Empleado, Long> {
}
