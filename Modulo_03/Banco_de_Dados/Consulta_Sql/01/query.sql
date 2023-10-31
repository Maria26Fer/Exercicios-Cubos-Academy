select * from musicas;

-- Ex 01
select compositor, id from musicas;

--Ex 02
select composicao, tempo from musicas where tempo > 60*4;

-- Ex 03
select compositor, composicao, id from musicas where id between 47 and 123;
--selecionei os campos acima da tabela musica, usei o where filtrar os registros
-- de id entre 47 e 123 usando o predicado de comparação between, que verifica espaços
--entre um valor e outro;

--Ex 04
select * from musicas where compositor is not null and tempo < 60*5 and compositor != 'Bach'; 
--Seleceionei todos os campos da tabela musicas, filtrando todos os compositores que não sejam nulos
--verificando se o tempo é menor do que 5min e filtrando os compositores que não são 'Bach';


