package com.utn.elbuensabor.repositories.usuarios;

import com.utn.elbuensabor.entities.usuarios.Usuario;
import com.utn.elbuensabor.repositories.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends BaseRepository<Usuario, Long> {
}
