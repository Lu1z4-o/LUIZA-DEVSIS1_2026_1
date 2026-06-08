import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Escola de Idiomas Vision',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Página inicial', link: '/index' },

      
    ], 

    sidebar: [
      {
        items: [
          { text: 'Página inicial', link: '/index'},
          {text: '1. Introdução', link: '/introducao'},
          {text: '2. Descrição geral', link: '/descricao'},
          {text: '3. Principais recursos e funcionalidades', link: '/requisitos'},
          {text: '4. Diagrama de casos de uso', link: '/casosdeuso'},
          {text: '5. Diagrama de entidade e relacionamento', link: '/der'}, 
          {text: '6. Protótipo de telas', link: '/telas'},
          {text: '7. Cronograma e entrega', link: '/cronograma'}, 
          {text: '8. Riscos e mitigações', link: '/riscos'}, 
          {text: '9. Custos e orçamento', link: '/orcamento'}, 
          {text: '10. Considerações finais', link: '/consideracoes'}
        ],
      },
    ],

 
        docFooter: {
          prev: false,
          next: false
        }
  },
});
