#Desafio frontend ReactJS
##Objetivo:
Desenvolver uma aplicação React que mostre o perfil do desenvolvedor e liste os seus repositórios do github. (Pode utilizar como base no create-react-app).
##User stories:
SENDO um usário na página principal, POSSO pesquisar o usuário pelo meu nome ou qualquer outro nome e pequisar no github PARA QUE obtenha os dados do perfil e os respectivos respositórios.
##Critérios de aceite
DADO QUE o usuário na home-page digitar o nome de usuário QUANDO clicar no botão Pesquisar, ENTÃO o sistema pesquisa e preenche a tela de perfil mostrando o resultado.
DADO QUE o usuário na home-page QUANDO clicar no botão Pesquisar sem preencher o campo, ENTÃO o sistema retorna a mensagem: "informe um nome de usuário válido do github".
DADO QUE o usuário na home-page e digitar o usuário "UsuarioqueProvavelmenteNãoExisteLá" QUANDO clicar no botão Pesquisar ENTÃO o sistema faz a consulta e retorna a mensagem: "Usuário não encontrado no github. Verifique se você digitou o nome corretamente"
##Orientações Técnicas:
Utilizar um biblioteca para consumo de API: sugestão Axios.
Utilizar uma biblioteca de roteamento para alternar entre as paginas: sugestão react-router-dom.
Observar a orientação a componente para reuso de código.
CSS liberado utilizar como achar melhor. Do clássico as libraries (bootstrap, material UI, etc.).
Ser Responsivo
##Instruções gerais:
Faça um fork deste projeto. (ou clone)
Crie uma branch (ou novo repositório) com o padrão seunome-desafio-react.
Ao finalizar este desafio, enviar o link via whats para o solicitante.
##Referências da API:
Documentação oficial do GitHub: https://docs.github.com/en/rest
API de busca de usuários do GitHub: https://api.github.com/users/username
API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos
##UI
Design da tela pode ser replicada a tela de perfil e repositórios do próprio github.
Exemplo na pasta images deste repositório.
##Diferenciais:
Legibilidade;
Boa documentação;