<h1 style="color: #C11515; font-weight: bold;">Desenvolvimento</h1>

## **2\. Descrição do Projeto**

### **2.1 Visão Geral do Projeto**

O objetivo deste documento é fornecer uma visão geral do projeto Sistema de Gestão de Escola de Idiomas Vision. Ele descreve a finalidade do projeto, os principais stakeholders envolvidos, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema. 

O Sistema de Gestão de Escola de Idiomas Vision será responsável por fornecer informações gerais da escola a usuários não cadastrados, como meio de divulgação do negócio. Além disso, proporcionará  aos alunos uma plataforma digital de auxílio em seus estudos e informações gerais de atuação nos cursos em que estiver matriculado. Também funcionará como um meio de pagamento e controle de mensalidades em aberto para esses. Para mais, o sistema será utilizado para a divulgação e meio de inscrição em eventos culturais promovidos pela escola. Ademais, servirá como meio de organização de aulas e materiais dos professores e gestão financeira do negócio para os administradores.

### **2.1.1 Canvas do projeto**
<img src="./imagens_diversas/canvas.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">

<div style="text-align: center; width: 100%;">
<a href="https://canvas-apps.pr.sebrae.com.br/canvas?id=1608733" style="display: inline-block; background-color: white; color: #C11515; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 15px;">Link do canvas
</a>
</div>

### **2.2 Stakeholders**

-   **Alunos:** usuários a quem os serviços da empresa, que consistem em aulas de idiomas, são prestados. 
    
-   **Professores:** responsáveis pelo planejamento das aulas. 
    

-  **Administradores**: responsáveis pela gestão financeira e gerenciamento do sistema.

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

## 4. Diagrama de Caso de Uso
<img src="./imagens_diversas/Casos_de_uso_Vision.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
Para melhor visualização, o diagrama está no link do drive do trabalho.

### 4.1 Descrição de caso de uso

## 5. Diagrama de entidade e relacionamento 
<img src="./imagens_diversas/DER_Vision.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
Para melhor visualização, o diagrama está no link do drive do trabalho.

## 6. Protótipo de telas 
<img src="./figma/Desktop - 1.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 2.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 3.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 4.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 5.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 6.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 7.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 8.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 9.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<img src="./figma/Desktop - 10.png" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<div style="text-align: center; width: 100%;">
<a href="https://www.figma.com/design/j9gZLeueKMJrnZZNpiPhyl/Modelo-vision?node-id=0-1&t=ydaXek73CGh4EbnE-1" style="display: inline-block; background-color: white; color: #C11515; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 15px;">Link do figma
</a>
</div>

## 7. Cronograma e entrega 
<table>
  <thead>
    <tr>
      <th>Fase</th>
      <th>Atividade Principal</th>
      <th>Duração</th>
      <th>Início Estimado</th>
      <th>Término Estimado</th>
      <th>Marco de Entrega (Milestone)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;">1</td>
      <td>Planejamento e Visão</td>
      <td>7 dias</td>
      <td>04/05/2026</td>
      <td>11/05/2026</td>
      <td>Documento de Visão e Canvas finalizados</td>
    </tr>
    <tr>
      <td style="text-align: center;">2</td>
      <td>Modelagem e Prototipagem</td>
      <td>7 dias</td>
      <td>12/05/2026</td>
      <td>19/05/2026</td>
      <td>Diagramas ER/Casos de Uso e Telas no Figma aprovados</td>
    </tr>
    <tr>
      <td style="text-align: center;">3</td>
      <td>Desenvolvimento (Sprints 1, 2 e 3)</td>
      <td>2 meses</td>
      <td>20/05/2026</td>
      <td>20/07/2026</td>
      <td>Sistema funcional (Módulos Financeiro e Acadêmico)</td>
    </tr>
    <tr>
      <td style="text-align: center;">4</td>
      <td>Testes de Software</td>
      <td>7 dias</td>
      <td>21/07/2026</td>
      <td>28/07/2026</td>
      <td>Relatório de testes e bugs corrigidos</td>
    </tr>
    <tr>
      <td style="text-align: center;">5</td>
      <td>VitePress, Deploy Vercel e Apresentação</td>
      <td>7 dias</td>
      <td>29/07/2026</td>
      <td>05/08/2026</td>
      <td>Link do Vercel gerado e apresentação pronta</td>
    </tr>
  </tbody>
</table>

## 8\. Riscos e Mitigação

Entre os principais riscos do projeto está a dificuldade de angariar alunos devido à competitividade do setor de cursos de idiomas, somada à falta de reconhecimento do negócio no mercado. Para mitigar a problemática, a Vision busca investir em materiais didáticos de qualidade reconhecida no meio de publicações de idiomas, além de diferenciais metodológicos nas aulas, por meio do sistema a ser implementado e dos eventos promovidos, assim estabelecendo um diferencial de relacionamento com seus alunos. 

Outro risco significativo é a baixa de matrículas ao longo do ano, sendo que as adesões de novos alunos majoritariamente se concentram no início do ano letivo e, dada a possibilidade de desistências, isso poderia acarretar perda significativa no número de matrículas ao longo do ano. A fim de atenuar esse problema, a Vision contará com tempos de duração diferentes dentro dos níveis dos cursos fornecidos, estimulando, principalmente nos níveis iniciais, a realização de novas matrículas ao longo do ano. 

Destaca-se também o risco de desistência dos alunos com dificuldade de aprendizagem que, além de fazer com que a escola não cumpra o objetivo principal de seu serviço, também desestimularia o ingresso de clientes em potencial que acompanhassem tal experiência. Para diminuir essa ameaça, a Vision foca no constante acompanhamento da evolução de seus alunos, buscando recomendar lições de casa focadas na retomada de defasagens apresentadas nas avaliações ao longo do curso. Ademais, na conclusão de cada nível, a Vision realiza questionários de satisfação com seus alunos, buscando entender suas necessidades e as capacidades de melhoria do serviço prestado.


## 9. Custos e Orçamento

### Orçamento de TI 
<table>
  <thead>
    <tr>
      <th style="text-align: left;">Categoria</th>
      <th style="text-align: left;">Item</th>
      <th style="text-align: left;">Descrição</th>
      <th style="text-align: center;">Tipo</th>
      <th style="text-align: right;">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Serviços</td>
      <td>Desenvolvimento</td>
      <td>Criação do sistema base (alunos, profs, admin, s)</td>
      <td style="text-align: center;">CAPEX</td>
      <td style="text-align: right;">R$ 22.000,00</td>
    </tr>
    <tr>
      <td>Hardware</td>
      <td>Computadores</td>
      <td>Computadores para administração e laboratório</td>
      <td style="text-align: center;">CAPEX</td>
      <td style="text-align: right;">R$ 12.000,00</td>
    </tr>
    <tr>
      <td>Infraestrutura</td>
      <td>Rede</td>
      <td>Roteadores e cabeamento</td>
      <td style="text-align: center;">CAPEX</td>
      <td style="text-align: right;">R$ 3.500,00</td>
    </tr>
    <tr>
      <td>Software</td>
      <td>Licenças e APIs</td>
      <td>Integrações financeiras e ferramentas de terceiros</td>
      <td style="text-align: center;">OPEX</td>
      <td style="text-align: right;">R$ 1.500,00</td>
    </tr>
    <tr>
      <td>Serviços</td>
      <td>Suporte</td>
      <td>Suporte técnico e manutenção mensal do software</td>
      <td style="text-align: center;">OPEX</td>
      <td style="text-align: right;">R$ 1.200,00</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: right; font-weight: bold;">Total CAPEX</td>
      <td style="text-align: right; font-weight: bold;">R$ 37.500,00</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: right; font-weight: bold;">Total OPEX</td>
      <td style="text-align: right; font-weight: bold;">R$ 2.700,00</td>
    </tr>
  </tbody>
</table>

### Custos de estrutura e operação 
<table>
  <thead>
    <tr>
      <th style="text-align: left;">Categoria</th>
      <th style="text-align: left;">Item</th>
      <th style="text-align: left;">Descrição</th>
      <th style="text-align: left;">Tipo</th>
      <th style="text-align: right;">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Reforma</td>
      <td>Pintura</td>
      <td>Pintura das salas e fachada</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 8.000,00</td>
    </tr>
    <tr>
      <td>Reforma</td>
      <td>Piso</td>
      <td>Troca do piso da recepção</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 4.500,00</td>
    </tr>
    <tr>
      <td>Mobiliário</td>
      <td>Cadeiras</td>
      <td>Cadeiras para alunos</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 12.000,00</td>
    </tr>
    <tr>
      <td>Mobiliário</td>
      <td>Mesas</td>
      <td>Mesas para professores</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 3.000,00</td>
    </tr>
    <tr>
      <td>Equipamentos</td>
      <td>Ar Condicionado</td>
      <td>Instalação em 5 salas</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 15.000,00</td>
    </tr>
    <tr>
      <td>Marketing</td>
      <td>Letreiro</td>
      <td>Letreiro luminoso fachada</td>
      <td>Investimento Inicial</td>
      <td style="text-align: right;">R$ 2.500,00</td>
    </tr>
    <tr>
      <td>Operação</td>
      <td>Aluguel</td>
      <td>Aluguel do imóvel</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 6.000,00</td>
    </tr>
    <tr>
      <td>Operação</td>
      <td>Energia</td>
      <td>Conta de luz</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 1.200,00</td>
    </tr>
    <tr>
      <td>Operação</td>
      <td>Água</td>
      <td>Conta de água</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 300,00</td>
    </tr>
    <tr>
      <td>Operação</td>
      <td>Internet</td>
      <td>Link dedicado</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 400,00</td>
    </tr>
    <tr>
      <td>Pessoal</td>
      <td>Recepção</td>
      <td>Salário recepcionista</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 2.500,00</td>
    </tr>
    <tr>
      <td>Pessoal</td>
      <td>Limpeza</td>
      <td>Serviço terceirizado</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 1.800,00</td>
    </tr>
    <tr>
      <td>Marketing</td>
      <td>Anúncios</td>
      <td>Google Ads e Redes Sociais</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 1.500,00</td>
    </tr>
    <tr>
      <td>Manutenção</td>
      <td>Reparos</td>
      <td>Fundo de reserva</td>
      <td>Custos Operacionais</td>
      <td style="text-align: right;">R$ 500,00</td>
    </tr>
    <tr>
<td colspan="4" style="text-align: right; font-weight: bold;">Total Investimento Inicial</td>
      <td style="text-align: right; font-weight: bold;">R$ 45.000,00</td>
    </tr>
    <tr>
      <td colspan="4" style="text-align: right; font-weight: bold;">Total Custos Operacionais</td>
      <td style="text-align: right; font-weight: bold;">R$ 14.200,00</td>
    </tr>
  </tbody>
</table>

## 10\. Considerações Finais

Este documento de visão fornece uma visão geral do projeto Sistema de Gestão de Escola de Idiomas Vision. Ele descreve a finalidade, os principais stakeholders, os requisitos principais, os diagramas de caso de uso, diagrama de classes e protótipos de possíveis telas para o sistema. Este documento servirá como base para o desenvolvimento do projeto, auxiliando na compreensão e alinhamento das partes interessadas.

Ao estabelecer este mapeamento detalhado, a documentação não apenas mitiga riscos durante a fase de codificação, mas também funciona como um guia de validação para testes, assegurando que o produto final entregue uma experiência fluida, segura e perfeitamente alinhada às necessidades reais de alunos, professores, administradores e sócios.