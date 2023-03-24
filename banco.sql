## TABELA USUARIO
CREATE TABLE `usuario` (
	`id_usuario` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`email` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`sobrenome` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`senha` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`deleted_at` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`id_usuario`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

