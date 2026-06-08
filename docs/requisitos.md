## **3. Principais recursos e funcionalidades**

### **3.1 Requisitos Funcionais**

RF-001 – **Exibição de Informações Institucionais**: O sistema deve exibir n a página inicial as informações gerais da escola, incluindo cursos fornecidos, horários de funcionamento, histórico da empresa, endereço completo e informações de contato. O sistema deve garantir que essas informações sejam de acesso público e de fácil visualização.

RF-002 – **Pagamento de Mensalidade via PIX**: O sistema deve permitir que o aluno realize o pagamento de mensalidades através de PIX. O sistema deve validar o status do pagamento e atualizar o histórico do aluno automaticamente após a confirmação.

RF-003 – **Pagamento de Mensalidade via Boleto**: O sistema deve permitir que o aluno realize o pagamento de mensalidades através de boleto bancário. O sistema deve registrar o boleto junto à instituição financeira cadastrada.

RF-004 – **Cadastrar Histórico Financeiro**: O sistema deve permitir o controle dos pagamentos realizados pelo aluno, bem como visualizar o seu histórico financeiro. Podendo o aluno consultar os status de cada mensalidade(pago, pendente e atrasado).

RF-005 – **Consulta de Recursos Digitais**: O sistema deve permitir que o aluno consulte e faça o download dos recursos digitais do material didático. O sistema deve filtrar e exibir os materiais correspondentes apenas aos cursos e turmas em que o aluno está ativamente matriculado.

RF-006 – **Inscrição a Eventos**: O sistema permite ao aluno realizar inscrições nos eventos culturais promovidos pela instituição, precisando informar se possui convidados extras ou restrições alimentares. O sistema deve validar se o evento ainda possui vagas disponíveis e enviar uma confirmação de inscrição para o perfil do aluno.

RF-007 – **Consulta de Notas**: O sistema deve disponibilizar ao aluno uma área para a visualização de suas notas lançadas em cada avaliação.

RF-008 – **Consulta de Frequência**: O sistema deve disponibilizar ao aluno o seu registro de frequência, exibindo o número de presenças, faltas e a porcentagem.

RF-009 – **Canal de Avisos do Aluno**: O sistema deve apresentar um mural ou canal de avisos integrado ao portal do aluno, exibindo comunicados institucionais, alertas urgentes e recados enviados pela coordenação ou professores.

RF-010 – **Atualização de Registros de Avaliações**: O sistema deve permitir que o professor atualize as informações de registros de avaliações presentes no seu plano de ensino, incluindo o tipo de avaliação (prova, trabalho, simulado), critérios de correção e datas de aplicação para as suas respectivas turmas. Essa alteração gerará um notícia no sistema.

RF-011 – **Consulta de Calendário Personalizado de Aulas**: O sistema deve gerar e exibir um calendário personalizado para o professor, agrupando cronologicamente todas as suas aulas alocadas, horários e salas de aula correspondentes.

RF-012 – **Registro de Frequência dos Alunos**: O sistema deve permitir que o professor registre a frequência dos alunos (presença ou falta) para cada aula ministrada. O sistema deve carregar a lista de chamadas automática com base nos alunos matriculados na respectiva turma e atualizar a frequência do aluno.

RF-013 – **Registro de Notas dos Alunos**: O sistema deve permitir que o professor registre as notas dos alunos nas avaliações aplicadas. O sistema deve validar se a nota inserida está dentro do intervalo numérico permitido pela instituição e atualizar nas avaliações do aluno.

RF-014 – **Registro de Alterações de Aulas pelo Professor**: O sistema deve permitir que o professor registre alterações pontuais em suas aulas (como alteração de conteúdo ou avisos de imprevistos), enviando os dados para o mural de avisos do aluno.

RF-015 – **Cadastro de Simulados**: O sistema deve permitir que o professor cadastre simulados de avaliação para suas turmas, incluindo o banco de questões, gabarito e o prazo para realização.

RF-016 – **Cadastro de Alunos e Funcionários**: O sistema permite o cadastro com informações completas, incluindo nome, CPF, data de nascimento, telefone, endereço, categoria(aluno, professor, administrador e sócio) e identificador único. O sistema deve validar dados obrigatórios e evitar duplicidade de cadastro.

RF-017 – **Relação de Contatos por Turma**: O sistema deve exibir a listagem completa de contatos dos alunos e seus responsáveis, obrigatoriamente dividida e filtrada por turma para facilitar a comunicação.

RF-018 – **Gerenciamento da Grade de Funcionários**: O sistema deve permitir a visualização, edição e alteração da escala de trabalho, horários e funções de toda a grade de funcionários da instituição.

RF-019 – **Cadastro de Materiais Didáticos**: O sistema deve permitir o cadastro de novos materiais didáticos, exigindo nome do material, autor, edição e o upload do arquivo ou link digital.

RF-020 – **Organização do Calendário Geral e Salas**: O sistema deve permitir o gerenciamento do calendário geral da escola, definindo os horários das disciplinas e alocando as salas físicas, com validação para impedir choque de horários ou salas duplicadas. O calendário geral poderá ser visualizado por alunos, professores, administradores e sócios. 

RF-021 – **Cancelamento de Matrículas**: O sistema deve permitir que a administração cancele a matrícula de alunos, registrando a data e interrompendo cobranças futuras.

RF-022 – **Registro de Substituição de Professores**: O sistema deve permitir que a administração altere o professor responsável por uma determinada aula ou período no caso de substituições e coberturas de faltas.

RF-023 – **Registro de Compras e Insumos**: O sistema deve permitir o registro financeiro de compra de insumos escolares, exigindo descrição do item, quantidade, valor pago e data da compra.

RF-024 – **Registro de Manutenções**: O sistema deve permitir o registro de despesas com manutenção da infraestrutura, solicitando a descrição do serviço, valor, fornecedor e data para fins de balanço.

RF-025 – **Cadastro de Eventos Culturais**: O sistema deve permitir o cadastro de eventos culturais na agenda da escola, exigindo nome do evento, data, horário, local e limite de participantes.

RF-026 – **Registro de Descontos e Fidelidade**: O sistema deve permitir a aplicação de descontos manuais ou automáticos nas mensalidades dos alunos e gerenciar as regras dos programas de fidelidade da escola.

RF-027 – **Unificação de Acessos dos Sócios**: O sistema deve garantir ao perfil de "Sócio" o acesso integral a todas as funcionalidades de visualização e edição contidas no módulo de Controle Administrativo.

RF-028 – **Emissão de Relatórios Gerenciais**: O sistema deve permitir que os sócios emitam relatórios gerenciais consolidados da empresa, englobando dados de faturamento, gráficos de inadimplência, evasão escolar e balanço financeiro geral.

  

**3.2 Requisitos Não Funcionais**

RNF-001 – **Segurança e Proteção de Dados**: O sistema deve garantir a proteção de dados dos usuários por meio de autenticação segura, bem como seguir as normas da LGPD (Lei Geral de Proteção de Dados), aplicando criptografia de dados sensíveis e controle de acesso baseado em perfis (Sócio e Administrador).

RNF-002 – **Controle de Acesso Baseado em Perfis**: O sistema deve restringir o acesso às funcionalidades e dados por meio de níveis de permissão (Aluno, Professor, Administrador e Sócio), garantindo que um perfil não acesse informações ou endpoints de outra categoria sem autorização explícita.

RNF-003 – **Capacidade de Conexões Simultâneas**: O sistema deve suportar até 150 conexões simultâneas de usuários ativos sem apresentar lentidão. A API deve ser capaz de processar até 100 requisições por minuto (RPM) durante os horários de pico.

RNF-004 – **Armazenamento de Arquivos Digitais**: O banco de dados e o sistema de arquivos em nuvem devem ter capacidade inicial para armazenar até 500 GB de materiais didáticos e comprovantes fiscais, prevendo uma arquitetura de expansão automática (auto-scaling de armazenamento) para suportar um crescimento de até 20% ao ano.

RNF-005 – **Suporte a Volume de Cadastros**: O sistema deve ter capacidade de processamento para manter em sua base de dados o registro ativo de até 1.000 alunos e 50 funcionários simultaneamente, sem degradação do banco de dados.

RNF-006 – **Compatibilidade com Navegadores**: O sistema deve ser totalmente funcional e compatível com as três últimas versões estáveis dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari.

RNF-007 – **Compatibilidade com Sistema Operacional**: O sistema deve ser compatível com as versões do sistema operacional mobile a partir do Android 13 e iOS 16.

RNF-008 – **Compatibilidade de Hardware**: A aplicação desktop não deve consumir mais que 4 GB de memória RAM e deve rodar em processadores com arquitetura x64.

RNF-009 – **Disponibilidade Geral**: O sistema deve estar operacional e disponível para os usuários finais 24 horas por dia, 7 dias por semana, com um índice de disponibilidade mensal de 99,9%.

RNF-010 – **Tempo de Recuperação (MTTR)**: O sistema deve possuir um Tempo Médio de Reparo (MTTR) máximo de 15 minutos para restaurar os serviços essenciais após uma falha crítica de infraestrutura.

RNF-011 – **Tolerância a Falhas**: A arquitetura deve possuir redundância ativa para suportar a queda simultânea de até 2 nós do servidor de banco de dados sem interrupção do serviço ou corrupção de dados.

RNF-012 – **Preservação de Estado**: Em caso de queda inesperada do cliente ou do servidor, o sistema deve salvar o estado da sessão do usuário para impedir o reinício forçado de processos longos.

RNF-013 – **Interface e Usabilidade**: O sistema deve possuir uma interface intuitiva e responsiva, permitindo que qualquer usuário possa se localizar no sistema e navegar por ele para realizar reservas, pagamentos e consultas com facilidade, sem a necessidade de treinamento avançado.

RNF-014 – **Tempo de Resposta da Interface:** O sistema deve processar e carregar as requisições de páginas e consultas simples (como visualização de notas ou carregamento do mural de avisos) em um tempo máximo de 2 segundos sob condições normais de rede.

RNF-015 – **Tempo de Processamento Financeiro:** A geração do QR Code do PIX ou a emissão do boleto bancário de mensalidade não deve ultrapassar o tempo limite de 5 segundos após a requisição do usuário.

RNF-016 – **Anonimização de Dados Inativos (LGPD)**: O sistema deve anonimizar todos os dados pessoais de usuários inativos há mais de 365 dias. Como métrica de sucesso, o relatório de auditoria gerado pelo sistema deve comprovar que nenhuma informação de identificação pessoal (PII) é mantida após o período limite.

RNF-017 – **Acessibilidade Digital (WCAG)**: A interface web do sistema deve cumprir integralmente o nível AA de acessibilidade do WCAG 2.2. Como métrica de sucesso, a aplicação deve atingir 100% de aprovação em ferramentas de validação automatizada de acessibilidade (como o Lighthouse).
