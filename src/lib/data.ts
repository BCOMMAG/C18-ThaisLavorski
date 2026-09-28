export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  oab: string;
  oabText: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Thais Iavorski Advocacia",
  shortName: "Thais Iavorski Advocacia",
  lawyer: "Dra. Thais Iavorski",
  role: "Advogada Especialista em Direito de Família e Sucessões",
  oab: "Inscrita na OAB/PR",
  oabText: "Inscrita na OAB/PR • Atuação em estrita observância ao Código de Ética e ao Provimento nº 205/2021 do CFOAB",
  tagline: "Defesa humanizada, técnica e estratégica em Direito de Família, Sucessões e Planejamento Patrimonial.",
  slogan: "Protegendo laços, garantindo direitos e construindo soluções jurídicas seguras para o seu patrimônio e sua família.",
  experienceYears: "mais de 8 anos",
  phone: "(41) 99639-2996",
  whatsapp: "5541996392996",
  whatsappNumber: "5541996392996",
  whatsappFormatted: "(41) 99639-2996",
  whatsappUrl:
    "https://wa.me/5541996392996?text=Ol%C3%A1%2C%20Dra.%20Thais%20Iavorski!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/thaisiavorski/",
  instagramHandle: "@thaisiavorski",
  linkedinUrl: "https://www.linkedin.com/in/thais-iavorski-508a741a7/?trk=public_profile_browsemap_profile-result-card_result-card_full-click",
  linkedinHandle: "thais-iavorski",
  address: "Av. Mal. Floriano Peixoto, 5854 - Sl 04 - Hauer, Curitiba - PR, 81630-000",
  addressShort: "Av. Mal. Floriano Peixoto, 5854 - Sl 04 - Hauer, Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Mal.+Floriano+Peixoto,+5854+-+Sl+04+-+Hauer,+Curitiba+-+PR,+81630-000",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.+Mal.+Floriano+Peixoto,+5854+-+Hauer,+Curitiba+-+PR,+81630-000&t=&z=16&ie=UTF8&iwloc=&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 09:00 às 17:00",
    saturday: "Sábado: Fechado (Atendimento sob agendamento prévio)",
    sunday: "Domingo: Fechado",
  },
  workingHours: {
    weekdays: "Segunda a Sexta-feira: 09:00 às 17:00",
    weekends: "Sábado e Domingo: Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Thais Iavorski",
  role: "Advogada Especialista em Direito de Família e Sucessões",
  graduation:
    "Pós-Graduada em Direito de Família e Sucessões • Bacharel em Direito pelo Centro Universitário UniDomBosco (2012 – 2016)",
  experience: "Mais de 8 anos de prática forense, consultiva e mediação jurídica",
  bio: [
    "Dra. Thais Iavorski é advogada com atuação dedicada e pós-graduação especializada em Direito de Família e Sucessões. Formada pelo Centro Universitário UniDomBosco, conquistou sua aprovação no rigoroso Exame de Ordem dos Advogados do Brasil (OAB) ainda antes da conclusão da graduação, coroando uma trajetória de perseverança iniciada com uma bolsa de estudos integral obtida por mérito acadêmico.",
    "Sua paixão e sensibilidade pelo Direito de Família brotaram de suas próprias vivências pessoais. Tendo enfrentado na juventude o divórcio dos seus pais e as profundas repercussões financeiras e emocionais que afetam um núcleo familiar durante uma ruptura, Thais assumiu precocemente o papel de amparo e sustento ao lado de sua mãe. Essa experiência prática de vida forjou uma profissional que compreende com empatia genuína as dores, as ansiedades e as necessidades de quem atravessa crises familiares.",
    "À frente de sua advocacia, Dra. Thais une empatia, discrição absoluta e profundo rigor técnico. Com escritório estruturado no bairro Hauer em Curitiba/PR e atendimento online de excelência para clientes em todo o Brasil e no exterior, sua banca atua para que processos de divórcio, inventário, partilha de bens e planejamento sucessório ocorram de forma célere, estratégica e com a menor sobrecarga emocional possível.",
  ],
  careerHighlights: [
    "Pós-Graduação especializada em Direito de Família e Sucessões.",
    "Aprovação no Exame da OAB antes do término da faculdade de Direito.",
    "Graduação em Direito cursada com bolsa de estudos integral conquistada por mérito.",
    "Mais de 8 anos de advocacia ininterrupta, atuação em audiências, acordos de partilha e inventários.",
  ],
  personalNotes: [
    "Advocacia empática e acolhedora: cada cliente é atendido com atenção individualizada e compreensão da dinâmica familiar.",
    "Foco obstinado na pacificação: sempre que possível, prioriza o acordo amigável e desburocratizado em cartório para poupar tempo e desgaste.",
    "Combatividade técnica intransigente quando a via litigiosa se faz necessária para salvaguardar os direitos de filhos e herdeiros.",
    "Comunicação direta e transparente: atualizações constantes sem juridiquês para que você saiba exatamente o que esperar de cada fase.",
  ],
  differentials: [
    "Atendimento Direto com a Titular: suporte ágil, seguro e sem intermediários via WhatsApp e reuniões personalizadas.",
    "Atuação Híbrida Completa: sede física estruturada em Curitiba/PR e atendimento online seguro para clientes em qualquer cidade ou país.",
    "Estratégia Patrimonial e Emocional: prevenção de litígios prolongados e proteção ativa dos direitos econômicos e parentais.",
    "Conformidade Ética OAB: respeito estrito às diretrizes do Código de Ética e ao Provimento 205/2021 do CFOAB.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "divorcio-partilha",
    title: "Divórcio & Dissolução de União Estável",
    shortDesc:
      "Condução humanizada e estratégica de divórcios consensuais e litigiosos, garantindo partilha justa de bens e tranquilidade patrimonial.",
    iconName: "Heart",
    featured: true,
    highlightText: "Direito potestativo incondicionado (EC 66/2010): divorcie-se com celeridade e segurança jurídica.",
    coverageList: [
      "Divórcio Consensual Extrajudicial em Cartório de Notas (Escritura Pública célere em poucos dias)",
      "Divórcio Litigioso e Decreto Liminar de Divórcio sem Partilha Imediata (Súmula 197 do STJ)",
      "Reconhecimento e Dissolução de União Estável com Partilha de Aquestos (Art. 1.723 do CC)",
      "Partilha de Bens Móveis, Imóveis, Quotas Empresariais e Blindagem contra Ocultação de Patrimônio",
      "Compensação por Desequilíbrio Econômico e Fixação de Pensão entre Ex-Cônjuges",
      "Alteração de Nome de Casado para o Nome de Solteiro e Regularização Documental",
      "Sobrepartilha de Bens Ocultados ou Sonegados no Momento da Separação",
    ],
    casesSummary:
      "Analisamos com precisão regimes de bens (comunhão parcial, separação e comunhão universal), escrituras e extratos financeiros para assegurar a legítima divisão do patrimônio comum sem prejuízos.",
  },
  {
    id: "inventario-sucessoes",
    title: "Inventário & Partilha de Herança",
    shortDesc:
      "Abertura, processamento e partilha de bens em inventários extrajudiciais em cartório e judiciais litigiosos, evitando perdas tributárias.",
    iconName: "Scale",
    featured: true,
    highlightText: "Princípio da Saisine (Art. 1.784 do CC) e partilha célere para desbloquear bens da família.",
    coverageList: [
      "Inventário Extrajudicial em Cartório (Lei 11.441/2007: rápido, amigável e desburocratizado)",
      "Inventário Judicial Contencioso com Disputa entre Herdeiros e Filhos de Diferentes Uniões",
      "Cobrança e Arbitramento de Aluguel contra Herdeiro com Uso Exclusivo do Imóvel (Jurisprudência STJ)",
      "Garantia do Direito Real de Habitação Vitalício e Gratuito do Cônjuge Sobrevivente (Art. 1.831 do CC)",
      "Sucessão Plena na União Estável Equiparada ao Casamento (Tema 809 do Supremo Tribunal Federal)",
      "Alvará Judicial Autônomo para Levantamento de Valores e Saldos Bancários (Lei 6.858/1980)",
      "Planejamento Tributário para Apuração Correta e Otimização Legítima do ITCMD Estadual",
    ],
    casesSummary:
      "Atuamos para destravar o espólio com rapidez, prevenindo desvalorização de imóveis, disputas familiares destrutivas e multas por atraso na abertura do inventário.",
  },
  {
    id: "planejamento-sucessorio",
    title: "Planejamento Sucessório & Matrimonial",
    shortDesc:
      "Estruturação preventiva em vida para proteger o patrimônio da família, reduzir custos fiscais de inventário e evitar disputas futuras.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText: "Organize a transmissão de bens em vida com validade jurídica e respeito estrito à legítima.",
    coverageList: [
      "Elaboração de Testamentos Públicos, Cerrados e Particulares com Validade Inquestionável",
      "Doações em Vida com Reserva de Usufruto Vitalício e Cláusulas Restritivas de Incomunicabilidade",
      "Cláusulas de Inalienabilidade, Impenhorabilidade e Reversão de Bens Doados",
      "Pactos Antenupciais Estratégicos com Regras Patrimoniais e Societárias Customizadas",
      "Contrato de Namoro Preventivo para Afastar Risco de União Estável Indesejada",
      "Estruturação de Holding Familiar e Protocolos de Transição de Empresas Familiares",
      "Prevenção contra Alegação de Doação Inoficiosa e Proteção da Quota dos Herdeiros Necessários",
    ],
    casesSummary:
      "Criamos soluções personalizadas que asseguram o controle do patrimônio pelos fundadores, minimizam tributos na sucessão e blindam a harmonia entre filhos e herdeiros.",
  },
  {
    id: "pensao-guarda-filhos",
    title: "Pensão Alimentícia, Guarda & Convivência",
    shortDesc:
      "Garantia dos direitos de sustento, convivência saudável e proteção integral de crianças e adolescentes com base na lei.",
    iconName: "Award",
    featured: true,
    highlightText: "Aplicação técnica do trinômio necessidade-possibilidade-proporcionalidade e melhor interesse da criança.",
    coverageList: [
      "Ação de Fixação de Pensão Alimentícia com Pedido Liminar de Alimentos Provisórios (Lei 5.478/1968)",
      "Execução Coercitiva de Alimentos Atrasados pelo Rito da Prisão Civil e Penhora de Bens e Contas",
      "Ação Revisional de Alimentos para Majoração (aumento de gastos) ou Minoração (redução de renda)",
      "Ação de Exoneração de Alimentos quando atingida a maioridade com independência financeira",
      "Regulamentação de Guarda Compartilhada (Lei 13.058/2014) e Definição da Residência-Base",
      "Estruturação de Calendário Equilibrado de Convivência Familiar (Finais de Semana, Férias e Feriados)",
      "Medidas Protetivas e Combate à Alienação Parental (Lei 12.318/2010 com alterações da Lei 14.340/2022)",
    ],
    casesSummary:
      "Protegemos o sustento vital dos filhos (escola, saúde, vestuário, moradia e lazer), assegurando que o dever de sustento seja proporcional às reais possibilidades financeiras dos genitores.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Mariana S. Albuquerque",
    rating: 5,
    timeAgo: "1 mês atrás",
    text: "A Dra. Thais foi um anjo durante o meu divórcio. Em um momento de tanta dor e insegurança, ela conduziu todo o acordo com uma serenidade e firmeza admiráveis. Conseguiu resolver tudo em cartório com rapidez e protegeu meus direitos patrimoniais. Gratidão eterna!",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Carlos Eduardo Mendes",
    rating: 5,
    timeAgo: "3 meses atrás",
    text: "Excelente advogada! Atuação impecável no inventário da minha família, que estava travado havia mais de dois anos por desentendimentos. A Dra. Thais teve a paciência e a competência de mediar o diálogo entre todos os herdeiros e finalizar a partilha. Muito transparente e humana.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Juliana Ferreira de Castro",
    rating: 5,
    timeAgo: "4 meses atrás",
    text: "Profissional extremamente competente e atenciosa. Me orientou detalhadamente sobre a fixação da pensão e a guarda compartilhada da minha filha. Sempre respondia minhas dúvidas com clareza no WhatsApp e me transmitiu muita segurança em cada audiência.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Roberto Zanin",
    rating: 5,
    timeAgo: "5 meses atrás",
    text: "Fiz o planejamento sucessório com doação de imóveis com reserva de usufruto para meus filhos. A Dra. Thais explicou cada detalhe tributário e jurídico de forma clara e simples. Um escritório sério, ético e de alto padrão em Curitiba.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Fernanda Cristina Lopes",
    rating: 5,
    timeAgo: "6 meses atrás",
    text: "Tive uma experiência maravilhosa com a Dra. Thais Iavorski. Ela é pontual, justa, acolhedora e incansável na defesa dos nossos interesses. Recomendo de olhos fechados para qualquer questão de Direito de Família.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Guilherme B. Pinheiro",
    rating: 5,
    timeAgo: "8 meses atrás",
    text: "Atendimento excepcional! Estava muito apreensivo com a divisão de bens da união estável e a Dra. Thais esclareceu todos os pontos com base na jurisprudência do STJ. Conduziu o processo com discrição e agilidade. Parabéns pelo profissionalismo!",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Luciana Portela Ribas",
    rating: 5,
    timeAgo: "9 meses atrás",
    text: "Sensibilidade e competência técnica raras de se encontrar. A Dra. Thais me auxiliou na revisão de alimentos e no cumprimento do regime de visitas. Sou muito grata pelo respeito com que ela tratou a mim e ao meu filho.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
  {
    author: "Alexandre Fontoura",
    rating: 5,
    timeAgo: "11 meses atrás",
    text: "Dra. Thais é uma advogada brilhante. Nosso inventário extrajudicial em Curitiba foi lavrado sem nenhuma complicação. O conhecimento dela sobre o ITCMD e a partilha evitou custos desnecessários para a família.",
    source: "Google Reviews",
    details: "Avaliação Google Verificada",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-divorcio-cartorio",
    number: "01",
    title: "Divórcio em Cartório ou Judicial: Como Escolher o Caminho Mais Rápido e Seguro",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary:
      "Entenda os requisitos da via extrajudicial em cartório, o fim de prazos prévios pela EC 66/2010 e quando recorrer à via judicial com pedido liminar.",
    content: [
      "Desde a promulgação da Emenda Constitucional 66/2010, o divórcio no Brasil tornou-se um direito potestativo incondicionado. Isso significa que não se exige mais separação judicial prévia nem prazo mínimo de separação de fato: basta que um dos cônjuges queira se divorciar para que o vínculo seja extinto.",
      "O divórcio extrajudicial em cartório de notas é a via mais rápida e econômica, podendo ser lavrado em poucos dias. Para tanto, é necessário haver consenso sobre a partilha de bens e inexistir filhos menores ou incapazes (embora provimentos recentes já admitam a via cartorária quando questões de guarda e pensão dos filhos tiverem sido previamente homologadas em juízo).",
      "Havendo desacordo patrimonial, a via judicial protege cada cota-parte. Além disso, a Súmula 197 do STJ assegura que o juiz decrete imediatamente o divórcio, liberando o estado civil das partes, enquanto a discussão detalhada sobre a partilha segue em fase própria.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de esclarecimento social, em estrita observância ao Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-aluguel-herdeiro-ocupante",
    number: "02",
    title: "Herdeiro Ocupando Imóvel Sozinho: É Possível Cobrar Aluguel Durante o Inventário?",
    category: "Direito Sucessório",
    readTime: "4 min de leitura",
    summary:
      "Conheça o entendimento pacificado do STJ sobre a universalidade da herança e o dever do herdeiro ocupante exclusivo indenizar os demais.",
    content: [
      "Uma das situações mais frequentes e geradoras de atrito em inventários ocorre quando um dos herdeiros permanece residindo de forma exclusiva no imóvel deixado pelo falecido, usufruindo do bem sem remunerar os outros coproprietários.",
      "Segundo o Código Civil (art. 1.791), até que a partilha seja concluída, o direito dos coerdeiros à posse e propriedade da herança é indivisível e rege-se pelas normas relativas ao condomínio tradicional.",
      "O Superior Tribunal de Justiça (STJ) pacificou que a ocupação exclusiva por apenas um herdeiro acarreta enriquecimento sem causa. Portanto, os demais herdeiros têm direito a receber aluguel mensal proporcional às suas quotas-partes, devido formalmente a partir da notificação extrajudicial ou citação no processo.",
    ],
    oabDisclaimer:
      "Artigo informativo de orientação jurídica, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-planejamento-sucessorio",
    number: "03",
    title: "Planejamento Sucessório Familiar: Como Proteger o Patrimônio e Evitar Conflitos",
    category: "Sucessões & Patrimônio",
    readTime: "4 min de leitura",
    summary:
      "Descubra como instrumentos como doação em vida com usufruto e testamentos previnem custos tributários elevados e disputas judiciais.",
    content: [
      "O planejamento sucessório consiste no conjunto de medidas jurídicas e patrimoniais adotadas em vida pelo titular para organizar e disciplinar a futura transmissão do seu patrimônio aos seus sucessores.",
      "Entre os instrumentos mais eficazes destacam-se a doação em vida com reserva de usufruto vitalício — garantindo que o doador continue usufruindo da renda e dos frutos dos imóveis até o falecimento —, aliada a cláusulas de incomunicabilidade (o bem não se comunica ao cônjuge do filho) e impenhorabilidade.",
      "A lei exige apenas o respeito à legítima (50% do patrimônio pertencente obrigatoriamente aos herdeiros necessários). O planejamento previne a morosidade e as custas processuais do inventário, garantindo a união e a segurança financeira da família.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes éticas do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-pensao-alimenticia-calculo",
    number: "04",
    title: "Pensão Alimentícia: Como é Calculado o Valor e Quais Despesas Devem Entrar?",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary:
      "A regra do trinômio necessidade-possibilidade-proporcionalidade e a verdade sobre o mito dos '30% automáticos'.",
    content: [
      "Existe no senso comum a crença de que a pensão alimentícia é fixada automaticamente em 30% do salário do alimentante. Na prática jurídica, não existe percentual fixo em lei: o juiz aplica o trinômio necessidade, possibilidade e proporcionalidade.",
      "As necessidades dos filhos englobam moradia, alimentação, educação (mensalidade, material escolar, cursos), saúde (convênio médico, terapias, remédios), vestuário e lazer adequado ao padrão familiar.",
      "Em relação ao alimentante autônomo, empresário ou profissional informal que oculte rendimentos, a Justiça autoriza a quebra de sigilo bancário, fiscal e análise de sinais exteriores de riqueza para arbitrar a pensão sobre base real.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Código de Ética da OAB.",
  },
  {
    id: "artigo-guarda-compartilhada-realidade",
    number: "05",
    title: "Guarda Compartilhada Não é Tempo Dividido Meio a Meio: Entenda a Lei 13.058/2014",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary:
      "Entenda a diferença crucial entre poder decisório conjunto e residência alternada, priorizando a rotina estável da criança.",
    content: [
      "A Lei 13.058/2014 tornou a Guarda Compartilhada a regra geral no direito brasileiro, mesmo quando há desavenças entre os pais. No entanto, muitos pais confundem guarda compartilhada com residência alternada matemática (dias contados rigorosamente meio a meio).",
      "Na guarda compartilhada, o foco principal é a divisão igualitária do poder familiar e das decisões fundamentais sobre a vida da criança: escola, tratamentos médicos, religião e viagens. A residência-base da criança é fixada com um dos genitores para preservar sua estabilidade emocional e escolar.",
      "O genitor que não reside com a criança possui direito a um regime de convivência amplo e equilibrado (finais de semana alternados, dias durante a semana, metade das férias e datas comemorativas) e permanece obrigado a prestar alimentos.",
    ],
    oabDisclaimer:
      "Artigo pedagógico de utilidade pública, nos termos do Provimento 205/2021 do CFOAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento & Escuta Humanizada",
    subtitle: "Atendimento direto com a Dra. Thais via WhatsApp",
    description:
      "Você relata sua situação em sigilo ético absoluto. Compreendemos não apenas o aspecto documental, mas as dores emocionais e preocupações práticas que envolvem sua família.",
  },
  {
    number: "02",
    title: "Diagnóstico Técnico & Análise Patrimonial",
    subtitle: "Mapeamento rigoroso de direitos e bens",
    description:
      "Avaliamos certidões imobiliárias, regime de bens do casamento ou união estável, contratos, cotas de empresas e a necessidade de filhos ou dependentes com precisão jurídica.",
  },
  {
    number: "03",
    title: "Estratégia Pacificadora ou Atuação Judicial Firme",
    subtitle: "Foco no desfecho mais seguro e econômico",
    description:
      "Priorizamos a mediação amigável e desburocratizada em cartório. Caso haja litígio ou resistência da outra parte, atuamos perante as Varas de Família e Sucessões com firmeza e combatividade técnica.",
  },
  {
    number: "04",
    title: "Acompanhamento Transparente e Sem Juridiquês",
    subtitle: "Clareza e tranquilidade do início ao fim",
    description:
      "Você recebe atualizações periódicas de cada etapa do processo e conta com suporte direto da advogada titular sempre que tiver dúvidas, até a efetiva homologação da partilha ou acordo.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "familia-divorcio",
    label: "Divórcio & União Estável",
    iconName: "Heart",
    items: [
      {
        id: "faq-div-1",
        question: "Meu cônjuge não quer assinar o divórcio. Eu ainda posso me divorciar?",
        answer:
          "Sim! Desde a Emenda Constitucional 66/2010, o divórcio é um direito potestativo incondicionado. Não é necessário consentimento da outra parte nem alegação de motivos. Se você deseja se divorciar, o juiz decreta a dissolução do casamento mesmo contra a vontade do outro cônjuge.",
      },
      {
        id: "faq-div-2",
        question: "Como funciona a partilha de bens na Comunhão Parcial de Bens?",
        answer:
          "Na comunhão parcial (o regime legal padrão no Brasil), comunicam-se todos os bens adquiridos a título oneroso durante a constância da união, divididos em 50% para cada um, independentemente de quem pagou ou em nome de quem está registrado. Bens herdados, recebidos por doação com cláusula de incomunicabilidade ou adquiridos antes do casamento permanecem particulares.",
      },
      {
        id: "faq-div-3",
        question: "Quanto tempo demora um divórcio consensual em cartório?",
        answer:
          "Havendo consenso sobre a partilha e assistência de advogado, o divórcio extrajudicial em cartório de notas pode ser lavrado por escritura pública em poucos dias úteis. É o procedimento mais rápido, privativo e econômico previsto na legislação.",
      },
      {
        id: "faq-div-4",
        question: "Vivíamos em união estável sem papel passado. Tenho direito à partilha?",
        answer:
          "Sim! A união estável de fato é reconhecida pela Constituição Federal e pelo Código Civil. Salvo contrato escrito dispondo em sentido contrário, aplicam-se à união estável as mesmas regras da comunhão parcial de bens, garantindo a meação sobre todo o patrimônio construído durante a convivência.",
      },
    ],
  },
  {
    id: "inventario-heranca",
    label: "Inventário & Sucessões",
    iconName: "Scale",
    items: [
      {
        id: "faq-inv-1",
        question: "Qual é o prazo legal para abrir o inventário e evitar multas?",
        answer:
          "O Código de Processo Civil (art. 611) estabelece o prazo de 60 dias corridos a contar da data do falecimento para a abertura do processo de inventário. Caso ultrapassado, os estados (como o Paraná) cobram multas adicionais sobre o ITCMD (imposto sobre herança).",
      },
      {
        id: "faq-inv-2",
        question: "O viúvo ou companheiro tem direito de morar no imóvel da família?",
        answer:
          "Sim! O Código Civil assegura o Direito Real de Habitação (art. 1.831), garantindo ao cônjuge ou companheiro sobrevivente o direito vitalício e gratuito de permanecer residindo no imóvel residencial do casal, independentemente do regime de bens e sem pagar aluguel aos herdeiros.",
      },
      {
        id: "faq-inv-3",
        question: "Posso vender um imóvel do falecido antes de concluir o inventário?",
        answer:
          "Sim, é possível através de um Alvará Judicial de Autorização de Venda demonstrando ao juiz justificativa plausível (por exemplo, custear as despesas do próprio inventário, tributos ou evitar deterioração do bem), com o depósito judicial do valor para posterior partilha.",
      },
      {
        id: "faq-inv-4",
        question: "O que é o planejamento sucessório e por que realizá-lo em vida?",
        answer:
          "É a organização antecipada da transmissão do patrimônio (por doações com reserva de usufruto, testamentos ou holdings familiares). O planejamento diminui drasticamente o imposto de transmissão (ITCMD), evita bloqueio de contas e previne brigas desgastantes entre herdeiros.",
      },
    ],
  },
  {
    id: "pensao-guarda",
    label: "Pensão, Guarda & Filhos",
    iconName: "Award",
    items: [
      {
        id: "faq-pen-1",
        question: "O pai ou a mãe que ganha menos tem que pagar pensão?",
        answer:
          "Ambos os pais têm o dever constitucional e legal de sustento dos filhos. O valor da pensão alimentícia é dosado com base nas necessidades da criança e na capacidade financeira de cada genitor. Quem reside com a criança já contribui substancialmente com despesas de moradia e cuidados diários.",
      },
      {
        id: "faq-pen-2",
        question: "O que fazer se o alimentante atrasar o pagamento da pensão alimentícia?",
        answer:
          "Pode-se ajuizar imediatamente a Ação de Execução de Alimentos. Para as 3 últimas parcelas atrasadas, a lei prevê o rito de prisão civil do devedor (de 1 a 3 meses em regime fechado). Para débitos mais antigos, utiliza-se a penhora de contas bancárias, veículos, imóveis e bloqueio de CNH.",
      },
      {
        id: "faq-pen-3",
        question: "A Guarda Compartilhada desobriga o pagamento da pensão alimentícia?",
        answer:
          "Não! Esse é um dos maiores equívocos. A guarda compartilhada diz respeito à responsabilidade conjunta nas decisões da vida do filho. Se houver desnível econômico entre os lares, a pensão continua sendo devida para equilibrar as condições materiais da criança.",
      },
      {
        id: "faq-pen-4",
        question: "Até que idade o filho tem direito a receber pensão alimentícia?",
        answer:
          "A pensão não se extingue automaticamente aos 18 anos (Súmula 358 do STJ). Se o filho estiver cursando faculdade, ensino técnico ou curso pré-vestibular e não possuir renda própria, o dever de alimentos costuma se estender até a conclusão dos estudos ou cerca dos 24 anos de idade.",
      },
    ],
  },
  {
    id: "atendimento-consulta",
    label: "Atendimento & Consultoria",
    iconName: "Clock",
    items: [
      {
        id: "faq-atend-1",
        question: "O atendimento pode ser presencial ou online?",
        answer:
          "Atendemos no modelo híbrido completo! Você pode agendar um atendimento presencial na nossa sede em Curitiba/PR (Av. Mal. Floriano Peixoto, 5854 - Hauer) ou realizar consultas 100% online por videoconferência e WhatsApp com segurança, agilidade e sigilo absoluto.",
      },
      {
        id: "faq-atend-2",
        question: "Como são definidos e cobrados os honorários advocatícios?",
        answer:
          "Trabalhamos com absoluta transparência contratual, respeitando rigorosamente a Tabela de Honorários da OAB/PR e o Código de Ética e Disciplina. As condições de pagamento são combinadas previamente de acordo com a complexidade de cada demanda familiar ou sucessória.",
      },
      {
        id: "faq-atend-3",
        question: "Meus documentos e informações familiares estão em sigilo?",
        answer:
          "Sim, com sigilo ético e legal absoluto. Os processos de Direito de Família tramitam sob segredo de justiça (art. 189 do CPC), e nosso escritório adota políticas rígidas de proteção de dados e privacidade para resguardar a intimidade da sua família.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;