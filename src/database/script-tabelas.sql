CREATE DATABASE solare_dance;

USE solare_dance;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100),
senha VARCHAR(100)
);


CREATE TABLE tentativa_user (
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT,
acertos INT NOT NULL,
dt_conclusao DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);



CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(500),
categoria VARCHAR(50),
CONSTRAINT ch_categoria CHECK (categoria IN('Tango', 'Hip-hop', 'Dança do ventre', 'Carimbó', 'Jazz')) 
);

CREATE TABLE alternativa (
idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(500),
correta TINYINT,
fk_pergunta INT,
FOREIGN KEY (fk_pergunta) REFERENCES pergunta(idPergunta),
CONSTRAINT ch_correta CHECK (correta IN (0, 1))
);

CREATE TABLE resposta_user (
fk_tentativa INT,
fk_pergunta INT,
fk_alternativa INT NULL,
PRIMARY KEY (fk_tentativa, fk_pergunta),
FOREIGN KEY (fk_tentativa) REFERENCES tentativa_user(idTentativa),
FOREIGN KEY (fk_pergunta) REFERENCES pergunta(idPergunta),
FOREIGN KEY (fk_alternativa) REFERENCES alternativa(idAlternativa)
);

INSERT INTO pergunta (descricao, categoria) VALUES
('Em qual cidade e país surgiu o Jazz?', 'Jazz'),
('Qual característica é marcante no estilo Jazz?', 'Jazz'),
('Em qual estado brasileiro surgiu o Carimbó?', 'Carimbó'),
('Quais são as três principais influências culturais presentes na formação do Carimbó?', 'Carimbó'),
('Em quais países surgiu o Tango?', 'Tango'),
('Em que ano o Tango foi reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade?', 'Tango'),
('Em qual década e cidade surgiu o movimento Hip-Hop?', 'Hip-hop'),
('Quais elementos artísticos fazem parte da cultura Hip-Hop apresentada no site?', 'Hip-hop'),
('Qual é o outro nome utilizado para a Dança do Ventre no Oriente?', 'Dança do ventre'),
('Em qual período a Dança do Ventre foi consolidada a partir do encontro entre culturas locais e influências externas?', 'Dança do ventre');

/*
	Alternativas - Pergunta 1
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Buenos Aires, Argentina', 0, 1),
('Nova Orleans, Estados Unidos', 1, 1),
('Paris, França', 0, 1);

/*
	Alternativas - Pergunta 2
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Improvisação e expressividade corporal', 1, 2),
('Movimentos exclusivamente sincronizados em pares', 0, 2),
('Movimentos focados apenas na utilização dos pés', 0, 2);

/*
	Alternativas - Pergunta 3
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Bahia', 0, 3),
('Amazonas', 0, 3),
('Pará', 1, 3);

/*
	Alternativas - Pergunta 4
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Africana, Europeia e Indígena', 1, 4),
('Asiática, Europeia e Americana', 0, 4),
('Africana, Asiática e Árabe', 0, 4);

/*
	Alternativas - Pergunta 5
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Brasil e Chile', 0, 5),
('Argentina e Uruguai', 1, 5),
('Espanha e Portugal', 0, 5);

/*
	Alternativas - Pergunta 6
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('2005', 0, 6),
('2014', 0, 6),
('2009', 1, 6);

/*
	Alternativas - Pergunta 7
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Década de 1970, em Nova York', 1, 7),
('Década de 1980, em Los Angeles', 0, 7),
('Década de 1960, em Chicago', 0, 7);

/*
	Alternativas - Pergunta 8
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Teatro, pintura e música clássica', 0, 8),
('Rap, Break e Grafites', 1, 8),
('Samba, Ballet e Jazz', 0, 8);

/*
	Alternativas - Pergunta 9
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('Raqs Baladi', 0, 9),
('Raqs Sharqi', 1, 9),
('Dabke', 0, 9);


/*
	Alternativas - Pergunta 10
*/

INSERT INTO alternativa (descricao, correta, fk_pergunta) VALUES
('No século XVIII', 0, 10),
('No final do século XIX e início do século XX', 1, 10),
('No século XX', 0, 10);


