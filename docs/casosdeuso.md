## 4. Diagrama de Caso de Uso
<img src="./imagens_diversas/Casos_de_uso_Vision.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 100%;">
<div style="text-align: center; width: 100%;">
<a href="https://drive.google.com/file/d/1emnoF4LvVgUk0F7hGSyu3LprZ97KdqcM/view?usp=sharing" style="display: inline-block; background-color: white; color: #C11515; padding: 8px 12px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 15px;">Link do diagrama de casos de uso
</a>
</div>


### 4.1 Descrição de caso de uso
<table>
        <tr>
            <th colspan="2">Consultar informações institucionais</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Apresentar ao público o histórico da escola, localização física, canais de atendimento e outras informações</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Usuário sem login.</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>O usuário deve acessar a página inicial pública da escola Vision.</td>
        </tr>
        <tr>
            <th>Fluxo</th>
            <td>
                <ol>
                    <li><strong>Usuário:</strong> Navrga pela página inicial.</li>
                    <li><strong>Sistema:</strong> Exibe histórico, missão e infraestrutura.</li>
                    <li><strong>Usuário:</strong> Rola até o rodapé ou acessa o menu "Contato".</li>
                    <li><strong>Sistema:</strong> Exibe endereço, telefone, e-mail e redes sociais.</li>
                    <li><strong>Usuário:</strong> Obtém as informações desejadas.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>O sistema permanece exibindo as informações institucionais de contato e localização.</td>
        </tr>
    </table>

<table>
        <tr>
            <th colspan="2">Consultar material didático</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Permitir que o aluno visualize os recursos digitais disponíveis para o seu curso.</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Aluno</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>O aluno deve estar autenticado no sistema com seu login e senha.</td>
        </tr>
        <tr>
            <th>Fluxo</th>
            <td>
                <ol>
                    <li><strong>Aluno</strong> Acessa a opção "Material Didático".</li>
                    <li><strong>Sistema:</strong> Identifica o idioma e nível da(s) turma(s) do aluno.</li>
                    <li><strong>Sistema:</strong> Busca arquivos e mídias vinculados á turma.</li>
                    <li><strong>Sistema:</strong> Exibe a lista de recuros digitais.</li>
                    <li><strong>Aluno:</strong> Visualiza os títulos e tópicos.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>O sistema mantém a lista de materiais aberta na tela para navegação do aluno.</td>
        </tr>
    </table>

<table>
        <tr>
            <th colspan="2">Pagar</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Permitir que o aluno acesse o painel financeiro e realize o pagamento de mensalidades em aberto utilizando o método de sua preferência (Pix ou Boleto).</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Aluno, Banco / Gateway de pagamento (secundário)</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>O aluno deve estar autenticado no sistema e possuir mensalidades abertas.</td>
        </tr>
        <tr>
            <th>Fluxo Principal</th>
            <td>
                <ol>
                    <li><strong>Aluno</strong> Acessa a opção "Controle de Mensalidades".</li>
                    <li><strong>Sistema:</strong> Consulta o histórico financeiro do aluno</li>
                    <li><strong>Sistema:</strong> Exibe lista de mensalidades "Pagas" e "Em aberto".</li>
                    <li><strong>Aluno:</strong> Seleciona uma mensalidade pendente e clica em "Pagar".</li>
                    <li><strong>Sistema:</strong>Direciona para tela de escolha de forma de pagamento.</li>
                    <li><strong>Aluno:</strong> Seleciona o método de pagamento desejado.</li>
                    <li>Caso o aluno escolha Pix, será direcionado para o fluxo A. Caso escolha boleto, será direcionado ao fluxo B</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Fluxo alternativo A</th>
            <td>
                <ol>
                    <li><strong>Sistema</strong>Envia a requisição de cobrança para o banco.</li>
                    <li><strong>Banco:</strong>Gera chave Pix e o QR Code</li>
                    <li><strong>Sistema:</strong> Exibe o QR Code e o código Pix.</li>
                    <li><strong>Aluno:</strong>Realiza o pagamento pelo aplicativo do banco.</li>
                    <li><strong>Banco:</strong>Notifica o Sistema sobre a confirmação.</li>
                    <li><strong>Sistema:</strong>Altera o status da mensalidade para “Paga”.</li>
                    <li><strong>Sistema:</strong>Exibe mensagem de confirmação.</li>
                </ol>
            </td>
        </tr>
        <tr>
         <tr>
            <th>Fluxo alternativo B</th>
            <td>
                <ol>
                    <li><strong>Sistema</strong>Envia os dados do aluno e o valor para o Banco.</li>
                    <li><strong>Banco:</strong>Registra o boleto e retorna a linha digitável e o link.</li>
                    <li><strong>Sistema:</strong>Exibe o código de barras e o botão "Baixar PDF".</li>
                    <li><strong>Aluno:</strong>Copia o código ou baixa o boleto.</li>
                </ol>
            </td>
        </tr>
              <th>Fluxo alternativo C - Pagamento recusado</th>
            <td>
                <ol>
                    <li><strong>Sistema</strong>Recebe a notificação de transação não concluída do banco</li>
                    <li><strong>Sistema:</strong>Exibe a mensagem: "Pagamento recusado. Por favor, tente novamente."</li>
                    <li><strong>Sistema:</strong>Mantém o status da mensalidade como "Em aberto".</li>
                    <li><strong>Sistema:</strong>Redireciona o aluno de volta para a tela de escolha de forma de pagamento.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>A mensalidade é marcada como "Paga", caso o Pix seja aprovado, permanece "Em aberto", aguardando compensação (o pagamento do boleto ou caso o pagamento seja recusado).</td>
        </tr>
    </table>

<table>
        <tr>
            <th colspan="2">Consultar calendário geral</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Permitir que o aluno visualize as datas letivas, recessos e cronogramas gerais da escola Vision.</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Aluno</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>O aluno deve estar autenticado no sistema com seu login e senha.</td>
        </tr>
        <tr>
            <th>Fluxo</th>
            <td>
                <ol>
                    <li><strong>Aluno</strong>Acessa a opção "Calendário Geral".</li>
                    <li><strong>Sistema:</strong>Busca as informações do calendário institucional.</li>
                    <li><strong>Sistema:</strong>Renderiza uma interface de calendário.</li>
                    <li><strong>Aluno:</strong>Navega pelos meses para planejar suas atividades.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>O calendário permanece disponível para visualização e consulta.</td>
        </tr>
    </table>
<table>
        <tr>
            <th colspan="2">Inscrever-se em evento cultural</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Realizar a inscrição do aluno em eventos e eventos culturais promovidos de forma presencial pela escola.</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Aluno</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>Deve haver um evento cultural cadastrado e com vagas abertas no sistema.</td>
        </tr>
        <tr>
            <th>Fluxo</th>
            <td>
                <ol>
                    <li><strong>Aluno</strong>Acessa a opção "Eventos Culturais".</li>
                    <li><strong>Sistema:</strong>Exibe os eventos disponíveis.</li>
                    <li><strong>Aluno:</strong>Seleciona o evento e clica em "Inscreva-se".</li>
                    <li><strong>Sistema:</strong>Verifica se há vagas.</li>
                    <li><strong>Sistema:</strong>Registra o nome do aluno na lista de participantes.</li>
                    <li><strong>Sistema:</strong>Exibe a mensagem "Inscrição confirmada!".</li>
                    <li><strong>Sistema:</strong>Abate uma vaga</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>O aluno passa a constar na lista oficial de presença do evento cultural.</td>
        </tr>
    </table>
<table>
        <tr>
            <th colspan="2">Consultar notas das aulas</th>
        </tr>
        <tr>
            <th>Objetivo</th>
            <td>Permitir ao aluno o acompanhamento do seu progresso pedagógico e rendimento escolar no idioma.</td>
        </tr>
        <tr>
            <th>Atores</th>
            <td>Aluno</td>
        </tr>
        <tr>
            <th>Pré-condição</th>
            <td>O aluno deve estar autenticado no sistema com seu login e senha.</td>
        </tr>
        <tr>
            <th>Fluxo</th>
            <td>
                <ol>
                    <li><strong>Aluno</strong>Acessa a opção "Informações do aluno".</li>
                    <li><strong>Sistema:</strong>Exibe as opções "Notas","Avaliações" e "Frequência".</li>
                    <li><strong>Aluno:</strong>Seleciona a opção "Notas".</li>
                    <li><strong>Sistema:</strong>Consulta notas do aluno.</li>
                    <li><strong>Sistema:</strong>Exibe os dados obtidos.</li>
                    <li><strong>Aluno:</strong>Visualiza suas notas.</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Pós-condição</th>
            <td>As notas do aluno permanecem disponíveis visualização.</td>
        </tr>
    </table>