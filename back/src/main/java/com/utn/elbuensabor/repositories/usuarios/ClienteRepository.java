package com.utn.elbuensabor.repositories.usuarios;

import com.utn.elbuensabor.entities.usuarios.Cliente;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends BaseRepository<Cliente, Long> {
}
