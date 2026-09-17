/* ── TYPEWRITER ── */
(function() {
  const phrases = [
    'não espera por ninguém.',
    'precisa de ti agora.',
    'está cheio de oportunidades.',
    'começa com uma formação.',
  ];
  let pi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typewriter-text');

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1);
      ci++;
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      // small random jitter so it feels like a real person typing
      const speed = 60 + Math.random() * 55;
      setTimeout(tick, speed);
    } else {
      el.textContent = phrase.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 420);
        return;
      }
      setTimeout(tick, 32 + Math.random() * 20);
    }
  }
  setTimeout(tick, 900);
})();

/* ── COURSE DATA ── */
const courses = {
  redes: {
    isNew: true,
    icon: 'bi-hdd-network',
    title: 'Redes de Computadores',
    subtitle: 'Formação Completa — CCNA Ready',
    intro: 'Em Luanda, cada empresa, escritório ou instituição depende de uma rede a funcionar. Mas <strong>profissionais capacitados são poucos</strong>. Esta formação prepara-te para instalar, configurar e manter redes com confiança — e entrares num dos mercados com mais demanda em Angola.',
    preco: '40.000 KZ',
    duracao: '3 Meses',
    aulas: 'Práticas e presenciais',
    modules: [
      { num: '01', title: 'Fundamentos de Redes', desc: 'Como a internet funciona de verdade. Protocolos, modelos OSI e TCP/IP explicados sem complicação — desde o início.' },
      { num: '02', title: 'Cabeamento Estruturado', desc: 'Aprende a montar e organizar cabos de rede de forma profissional. Ferramentas, normas e boas práticas do mercado.' },
      { num: '03', title: 'Endereçamento IP', desc: 'IPv4, sub-redes, máscaras — tudo com exercícios práticos. Vais resolver os cenários que aparecem no dia-a-dia.' },
      { num: '04', title: 'Configuração Prática', desc: 'Trabalhas com switches e routers de verdade. Configuração de VLANs, roteamento estático e muito mais.' },
      { num: '05', title: 'Gerenciamento e Segurança de Redes', desc: 'Como proteger e monitorizar uma rede. Firewall, controlo de acesso e boas práticas de segurança.' },
    ],
    tags: ['CCNA Prep', 'Cisco', 'Switches', 'Routers', 'TCP/IP', 'Firewall', 'VLANs', 'Cabeamento'],
  },
  frontend: {
    isNew: false,
    icon: 'bi-code-slash',
    title: 'Desenvolvimento Frontend',
    subtitle: 'Formação Completa — Do zero ao portfólio',
    intro: 'Toda empresa quer ter presença na internet. Quem sabe construir páginas web <strong>tem trabalho garantido</strong>. Nesta formação sais a criar sites modernos do zero — com código limpo e visual que impressiona qualquer cliente.',
    preco: '40.000 KZ',
    duracao: '3 Meses',
    aulas: 'Práticas e presenciais',
    modules: [
      { num: '01', title: 'HTML5 — A estrutura de tudo', desc: 'Aprendes a estruturar qualquer página web. Tags, formulários, listas, tabelas — a base que nunca muda.' },
      { num: '02', title: 'CSS3 — O visual que atrai', desc: 'Dás vida ao design. Cores, fontes, layouts responsivos com Flexbox e Grid. O site fica bonito em qualquer ecrã.' },
      { num: '03', title: 'JavaScript — A lógica por trás', desc: 'Aqui o site começa a interagir. Botões que fazem coisas, validações, animações, requisições. O salto para o próximo nível.' },
      { num: '04', title: 'Bootstrap — Velocidade no trabalho', desc: 'Framework CSS que te dá componentes prontos. Crias páginas profissionais em muito menos tempo.' },
      { num: '05', title: 'Git e GitHub — Trabalho em equipa', desc: 'Controlo de versões e colaboração. Sabes guardar o teu código, recuperar versões e trabalhar em equipa como os profissionais.' },
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git', 'GitHub', 'Responsive Design', 'Flexbox'],
  },


django: {
  isNew: false,
  icon: 'bi-code-slash',
  title: 'Python + Django',
  subtitle: 'Formação Completa — Desenvolvedor Web Profissional',
  intro: 'Python e Django são uma combinação poderosa para criar sistemas web modernos, seguros e escaláveis. Se queres desenvolver plataformas de gestão, sistemas acadêmicos ou aplicações web profissionais, <strong>este é o caminho certo</strong>.',
  preco: '40.000 KZ',
  duracao: '3 Meses',
  aulas: 'Práticas e presenciais',
  modules: [
    {
      num: '01',
      title: 'Fundamentos de Python',
      desc: 'Aprendes Python desde a base até à programação orientada a objetos. Variáveis, estruturas de controlo, funções, módulos e os conceitos essenciais para desenvolver aplicações.'
    },
    {
      num: '02',
      title: 'Desenvolvimento Web com Django',
      desc: 'Entras no Django e aprendes a criar aplicações web completas. Rotas, views, templates, models e a arquitetura MVT que sustenta os teus projetos.'
    },
    {
      num: '03',
      title: 'Bases de Dados e Autenticação',
      desc: 'Aprendes a trabalhar com bases de dados usando o Django ORM e MySQL. Desenvolves sistemas de login, registo de utilizadores, permissões e gestão de perfis.'
    },
    {
      num: '04',
      title: 'Projeto Real e Portfólio',
      desc: 'Colocas os conhecimentos em prática através do desenvolvimento de um sistema web completo. No final, terás um projeto funcional para apresentar no teu portfólio profissional.'
    },
  ],
  tags: [
    'Python',
    'Django',
    'Django ORM',
    'MySQL',
    'HTML/CSS',
    'Bootstrap',
    'MVT',
    'Autenticação',
    'APIs',
    'Portfólio'
  ],
},
  
  laravel: {
    isNew: false,
    icon: 'bi-gear-wide-connected',
    title: 'Laravel',
    subtitle: 'Formação Completa — Desenvolvedor de alto nível',
    intro: 'Laravel é uma das frameworks mais usadas no mundo para criar sistemas web completos. Se queres desenvolver plataformas, sistemas de gestão, ou apps web com backend a sério, <strong>este é o caminho certo</strong>.',
    preco: '40.000 KZ',
    duracao: '3 Meses',
    aulas: 'Práticas e presenciais',
    modules: [
      { num: '01', title: 'Fundamentos PHP e Laravel', desc: 'Começas do zero no PHP e entras no Laravel com calma. Rotas, controllers, views — a arquitectura que sustenta tudo.' },
      { num: '02', title: 'Base de Dados com Eloquent e Migrations', desc: 'Crias e geres bases de dados de forma elegante. Eloquent ORM deixa o código limpo e as migrations organizam tudo.' },
      { num: '03', title: 'Autenticação e Segurança', desc: 'Sistema de login, registo, perfis de utilizador. O teu sistema fica protegido desde o início.' },
      { num: '04', title: 'Projetos Reais', desc: 'Não sais com exercícios fictícios. Desenvolves aplicações completas para o teu portfólio — algo que podes mostrar a um empregador amanhã.' },
    ],
    tags: ['PHP', 'Laravel', 'Eloquent', 'MySQL', 'APIs', 'MVC', 'Autenticação', 'Portfólio'],
  },
  dados: {
    isNew: false,
    icon: 'bi-database',
    title: 'Base de Dados',
    subtitle: 'Formação Completa — SQL e gestão de dados',
    intro: 'Dados são o recurso mais valioso de qualquer organização. <strong>Quem sabe gerir bases de dados trabalha em bancos, telecoms, governo e empresas privadas.</strong> Nesta formação aprendes a criar, consultar e proteger bases de dados de forma profissional.',
    preco: '30.000 KZ',
    duracao: '3 Meses',
    aulas: 'Práticas e presenciais',
    modules: [
      { num: '01', title: 'Fundamentos de Banco de Dados', desc: 'O que é uma base de dados, tipos de sistemas (SGBD), e como pensar em dados de forma estruturada. Base sólida antes de qualquer ferramenta.' },
      { num: '02', title: 'Modelagem de Dados', desc: 'Aprendes a desenhar a estrutura de uma base de dados antes de a criar. Diagramas ER, entidades, atributos e relacionamentos.' },
      { num: '03', title: 'Linguagem SQL e Consultas', desc: 'O coração do curso. SELECT, INSERT, UPDATE, DELETE — e muito mais. Fazes consultas complexas com joins, filtros e agrupamentos.' },
      { num: '04', title: 'Normalização e Relacionamentos', desc: 'Organizas os dados para evitar redundâncias e inconsistências. Base de dados limpa, rápida e confiável.' },
      { num: '05', title: 'Backup, Segurança e Boas Práticas', desc: 'Garantir que os dados não se perdem e estão protegidos. Rotinas de backup, permissões de acesso e auditoria.' },
    ],
    tags: ['SQL', 'MySQL', 'PostgreSQL', 'Modelagem', 'Normalização', 'Backup', 'Segurança', 'SGBD'],
  },
  informatica: {
    isNew: false,
    icon: 'bi-pc-display',
    title: 'Informática na Óptica do Utilizador',
    subtitle: 'Formação Completa — Office + IA aplicada',
    intro: 'Hoje em dia, saber usar o computador bem <strong>é um requisito básico em quase qualquer emprego</strong>. Nesta formação aprendes as ferramentas que aparecem em todos os escritórios de Angola — e ainda dás um passo à frente com IA.',
    preco: '30.000 KZ',
    duracao: '3 Meses',
    aulas: 'Práticas e presenciais',
    modules: [
      { num: '01', title: 'Utilização do Windows', desc: 'Gestão de ficheiros, atalhos, configurações do sistema. Trabalhas com o Windows como um profissional — sem perder tempo com coisas básicas.' },
      { num: '02', title: 'Microsoft Word', desc: 'Criação de documentos profissionais, relatórios, cartas e tabelas. Formatos, estilos e como poupar horas de trabalho.' },
      { num: '03', title: 'Microsoft Excel', desc: 'Folhas de cálculo, fórmulas, gráficos e tabelas dinâmicas. Ferramenta essencial em qualquer empresa angolana.' },
      { num: '04', title: 'PowerPoint e Google Docs', desc: 'Apresentações visuais que convencem. E os documentos online que cada vez mais empresas adoptam no dia-a-dia.' },
      { num: '05', title: 'Conceito sobre Inteligência Artificial', desc: 'Uma introdução prática ao que a IA pode fazer pelo teu trabalho — ferramentas, exemplos e como não ficar para trás.' },
    ],
    tags: ['Windows', 'Word', 'Excel', 'PowerPoint', 'Google Docs', 'IA', 'Produtividade', 'Office'],
  },
};

/* ── MODAL LOGIC ── */
function openModal(id) {
  const c = courses[id];
  const overlay = document.getElementById('modalOverlay');
  const box = document.getElementById('modalBox');

  // toggle new style
  box.classList.toggle('is-new', !!c.isNew);

  document.getElementById('mEmoji').innerHTML = `<i class="bi ${c.icon}"></i>`;
  document.getElementById('mTitle').textContent = c.title;
  document.getElementById('mSubtitle').textContent = c.subtitle;
  document.getElementById('mIntro').innerHTML = c.intro;

  // info chips
  document.getElementById('mInfoRow').innerHTML = `
    <div class="info-chip">
      <span class="ic-label">Investimento</span>
      <span class="ic-val">${c.preco}</span>
    </div>
    <div class="info-chip">
      <span class="ic-label">Duração</span>
      <span class="ic-val blue">${c.duracao}</span>
    </div>
    <div class="info-chip">
      <span class="ic-label">Modalidade</span>
      <span class="ic-val blue" style="font-size:.9rem;font-family:'Outfit',sans-serif;font-weight:600;">${c.aulas}</span>
    </div>
  `;

  // modules
  document.getElementById('mModules').innerHTML = c.modules.map(m => `
    <div class="module-item">
      <span class="mod-num">${m.num}</span>
      <div class="mod-content">
        <h4>${m.title}</h4>
        <p>${m.desc}</p>
      </div>
    </div>
  `).join('');

  // tags
  document.getElementById('mTags').innerHTML = c.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  // open
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  box.scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });