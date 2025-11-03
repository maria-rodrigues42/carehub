-- ---
-- Tabela Central de Usuários (Cuidadores, Familiares)
-- ---
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('Familiar', 'Cuidador') NOT NULL,
    telefone VARCHAR(20) NULL,
    foto_url VARCHAR(255) NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---
-- Tabela de Pacientes (As pessoas que estão sendo cuidadas)
-- ---
CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    foto_url VARCHAR(255) NULL,
    informacoes_medicas TEXT NULL, -- 'TEXT' é melhor que 'VARCHAR' para informações longas
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ---
-- Tabela "Pivô": Quem cuida de quem?
-- (Linka 'usuarios' com 'pacientes')
-- ---
CREATE TABLE paciente_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_paciente_id INT NOT NULL,
    fk_usuario_id INT NOT NULL,
    relacao VARCHAR(100) NULL COMMENT 'Ex: Filho, Enfermeira, Neto',
    
    -- Regras de Relacionamento (Chaves Estrangeiras)
    FOREIGN KEY (fk_paciente_id) REFERENCES pacientes(id)
        ON DELETE CASCADE, -- Se o paciente for deletado, esse link some
    FOREIGN KEY (fk_usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE, -- Se o usuário for deletado, esse link some
        
    -- Garante que o mesmo usuário não seja linkado duas vezes ao mesmo paciente
    UNIQUE KEY (fk_paciente_id, fk_usuario_id)
);

-- ---
-- Tabela de Perfil Específico para Cuidadores (1-para-1 com 'usuarios')
-- ---
CREATE TABLE perfil_cuidadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario_id INT NOT NULL UNIQUE, -- 'UNIQUE' garante a relação 1-para-1
    telefone VARCHAR(20) NULL,
    especialidade VARCHAR(100) NULL,
    localizacao VARCHAR(255) NULL,
    
    FOREIGN KEY (fk_usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE -- Se o usuário for deletado, o perfil dele também é
);

-- ---
-- Tabela de Medicamentos (Ligada ao Paciente)
-- ---
CREATE TABLE medicamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_paciente_id INT NOT NULL,
    fk_registrado_por_id INT NULL, -- Quem cadastrou o remédio
    
    nome_medicamento VARCHAR(255) NOT NULL,
    dosagem VARCHAR(100) NULL,
    frequencia VARCHAR(100) NULL COMMENT 'Ex: 8 em 8 horas, 1x ao dia',
    instrucoes TEXT NULL, -- 'TEXT' para instruções longas (tomar com comida, etc)
    data_inicio DATE NULL,
    data_termino DATE NULL,
    
    FOREIGN KEY (fk_paciente_id) REFERENCES pacientes(id)
        ON DELETE CASCADE, -- Se o paciente for deletado, seus remédios também são
    FOREIGN KEY (fk_registrado_por_id) REFERENCES usuarios(id)
        ON DELETE SET NULL -- Se o usuário que cadastrou for deletado, o remédio FICA, mas o link 'registrado_por' fica nulo
);

-- ---
-- Tabela de Tarefas (Ligada ao Paciente e a um Responsável)
-- ---
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_paciente_id INT NOT NULL,
    fk_responsavel_id INT NULL, -- O 'usuario' responsável pela tarefa (pode ser nulo)
    
    titulo VARCHAR(255) NOT NULL,
    status ENUM('Pendente', 'Concluída', 'Atrasada') NOT NULL DEFAULT 'Pendente',
    tipo_recorrencia ENUM('Única', 'Diária', 'Semanal', 'Mensal') NOT NULL DEFAULT 'Única',
    horario_tarefa TIME NULL,
    repete_ate DATE NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (fk_paciente_id) REFERENCES pacientes(id)
        ON DELETE CASCADE, -- Se o paciente for deletado, suas tarefas somem
    FOREIGN KEY (fk_responsavel_id) REFERENCES usuarios(id)
        ON DELETE SET NULL -- Se o usuário responsável for deletado, a tarefa fica 'Pendente' (SET NULL)
);

-- ---
-- Tabela de Registros / Diário (O "feed" de acontecimentos)
-- ---
CREATE TABLE registros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_paciente_id INT NOT NULL,
    fk_registrado_por_id INT NOT NULL, -- Um registro TEM que ter um autor
    
    -- 'ENUM' é perfeito para o 'tipo_registro' que você descreveu
    tipo_registro ENUM('Humor', 'Refeição', 'Sintoma', 'Atividade', 'Botão Pânico', 'Outro') NOT NULL,
    
    comentario TEXT NOT NULL,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (fk_paciente_id) REFERENCES pacientes(id)
        ON DELETE CASCADE,
    FOREIGN KEY (fk_registrado_por_id) REFERENCES usuarios(id)
        ON DELETE CASCADE -- Se o usuário que fez o registro for deletado, o registro também é (MUDANÇA: Podemos mudar para SET NULL se quisermos manter o histórico)
        -- Nota: Mudei para ON DELETE CASCADE aqui, mas podemos discutir se o melhor seria SET NULL.
);

-- ---
-- Tabela de Artigos (Conteúdo educacional, como você definiu)
-- ---
CREATE TABLE artigos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo MEDIUMTEXT NOT NULL, -- 'MEDIUMTEXT' para artigos bem longos
    autor VARCHAR(255) NULL,
    categoria VARCHAR(100) NULL,
    data_publicacao DATE NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);