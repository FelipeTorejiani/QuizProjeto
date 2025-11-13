export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    category: 'Hardware',
    question: 'Qual componente é responsável pelo processamento de dados no computador?',
    options: ['RAM', 'CPU', 'HD', 'GPU'],
    correctAnswer: 1,
    explanation: 'Correto! A CPU (Central Processing Unit) é o processador responsável por executar instruções e processar dados.',
    difficulty: 'easy'
  },
  {
    id: 2,
    category: 'Redes',
    question: 'Qual é o protocolo base da Internet?',
    options: ['HTTP', 'FTP', 'TCP/IP', 'SMTP'],
    correctAnswer: 2,
    explanation: 'Correto! O TCP/IP é o protocolo base da Internet, responsável pela comunicação entre dispositivos.',
    difficulty: 'easy'
  },
  {
    id: 3,
    category: 'Hardware',
    question: 'RAID 1 utiliza qual técnica para garantir redundância de dados?',
    options: ['Striping', 'Espelhamento', 'Paridade', 'Concatenação'],
    correctAnswer: 1,
    explanation: 'Correto! RAID 1 usa espelhamento (mirroring) para criar cópias idênticas dos dados em dois discos.',
    difficulty: 'medium'
  },
  {
    id: 4,
    category: 'Banco de Dados',
    question: 'Qual comando SQL é usado para recuperar dados de uma tabela?',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correctAnswer: 2,
    explanation: 'Correto! SELECT é o comando usado para consultar e recuperar dados de tabelas em um banco de dados.',
    difficulty: 'easy'
  },
  {
    id: 5,
    category: 'Segurança',
    question: 'O que é um ataque DDoS?',
    options: [
      'Um vírus que corrompe arquivos',
      'Um ataque que sobrecarrega um servidor com requisições',
      'Um software espião',
      'Uma técnica de criptografia'
    ],
    correctAnswer: 1,
    explanation: 'Correto! DDoS (Distributed Denial of Service) é um ataque que usa múltiplas fontes para sobrecarregar um servidor.',
    difficulty: 'medium'
  },
  {
    id: 6,
    category: 'Software',
    question: 'Qual é a diferença principal entre software proprietário e open source?',
    options: [
      'O preço de aquisição',
      'A qualidade do código',
      'A licença e acesso ao código-fonte',
      'A velocidade de execução'
    ],
    correctAnswer: 2,
    explanation: 'Correto! A diferença fundamental está na licença: open source permite acesso e modificação do código-fonte.',
    difficulty: 'easy'
  },
  {
    id: 7,
    category: 'Redes',
    question: 'Qual camada do modelo OSI é responsável pelo roteamento de pacotes?',
    options: ['Camada de Aplicação', 'Camada de Transporte', 'Camada de Rede', 'Camada Física'],
    correctAnswer: 2,
    explanation: 'Correto! A Camada de Rede (camada 3) é responsável pelo endereçamento lógico e roteamento de pacotes.',
    difficulty: 'medium'
  },
  {
    id: 8,
    category: 'Banco de Dados',
    question: 'O que é normalização de banco de dados?',
    options: [
      'Processo de backup dos dados',
      'Técnica para organizar dados e reduzir redundância',
      'Método de criptografia',
      'Sistema de indexação'
    ],
    correctAnswer: 1,
    explanation: 'Correto! Normalização é o processo de organizar dados para minimizar redundância e dependências.',
    difficulty: 'medium'
  },
  {
    id: 9,
    category: 'Segurança',
    question: 'Qual porta padrão é usada pelo protocolo HTTPS?',
    options: ['80', '443', '8080', '22'],
    correctAnswer: 1,
    explanation: 'Correto! HTTPS usa a porta 443 por padrão para comunicação criptografada.',
    difficulty: 'easy'
  },
  {
    id: 10,
    category: 'Hardware',
    question: 'Qual tipo de memória perde os dados quando o computador é desligado?',
    options: ['ROM', 'RAM', 'SSD', 'HD'],
    correctAnswer: 1,
    explanation: 'Correto! RAM (Random Access Memory) é uma memória volátil que perde os dados sem energia.',
    difficulty: 'easy'
  },
  {
    id: 11,
    category: 'Protocolos',
    question: 'Qual protocolo é usado para transferência de arquivos na Internet?',
    options: ['SMTP', 'FTP', 'DNS', 'DHCP'],
    correctAnswer: 1,
    explanation: 'Correto! FTP (File Transfer Protocol) é o protocolo padrão para transferência de arquivos.',
    difficulty: 'easy'
  },
  {
    id: 12,
    category: 'Infraestrutura',
    question: 'O que é um servidor DNS?',
    options: [
      'Servidor de arquivos',
      'Servidor que traduz nomes de domínio em endereços IP',
      'Servidor de e-mail',
      'Servidor de banco de dados'
    ],
    correctAnswer: 1,
    explanation: 'Correto! DNS (Domain Name System) traduz nomes de domínio legíveis em endereços IP.',
    difficulty: 'medium'
  },
  {
    id: 13,
    category: 'Software',
    question: 'O que é um sistema operacional?',
    options: [
      'Um programa de edição de texto',
      'Software que gerencia hardware e recursos do computador',
      'Um navegador web',
      'Um antivírus'
    ],
    correctAnswer: 1,
    explanation: 'Correto! O sistema operacional gerencia hardware, software e recursos, servindo de interface entre usuário e máquina.',
    difficulty: 'easy'
  },
  {
    id: 14,
    category: 'Segurança',
    question: 'O que é criptografia assimétrica?',
    options: [
      'Criptografia que usa a mesma chave para cifrar e decifrar',
      'Criptografia que usa um par de chaves pública e privada',
      'Técnica de compressão de dados',
      'Sistema de autenticação biométrica'
    ],
    correctAnswer: 1,
    explanation: 'Correto! Criptografia assimétrica usa um par de chaves: uma pública para cifrar e uma privada para decifrar.',
    difficulty: 'hard'
  },
  {
    id: 15,
    category: 'Banco de Dados',
    question: 'O que é uma chave primária (Primary Key)?',
    options: [
      'Uma senha de acesso ao banco',
      'Um identificador único para cada registro em uma tabela',
      'Um tipo de índice secundário',
      'Um comando SQL'
    ],
    correctAnswer: 1,
    explanation: 'Correto! A chave primária é um campo que identifica unicamente cada registro em uma tabela.',
    difficulty: 'easy'
  },
  {
    id: 16,
    category: 'Redes',
    question: 'Qual classe de endereço IP é 192.168.1.1?',
    options: ['Classe A', 'Classe B', 'Classe C', 'Classe D'],
    correctAnswer: 2,
    explanation: 'Correto! 192.168.1.1 é um endereço Classe C, comumente usado em redes locais privadas.',
    difficulty: 'medium'
  },
  {
    id: 17,
    category: 'Infraestrutura',
    question: 'O que é virtualização?',
    options: [
      'Técnica para criar versões virtuais de recursos físicos',
      'Um tipo de rede social',
      'Software de edição de imagens',
      'Sistema de backup'
    ],
    correctAnswer: 0,
    explanation: 'Correto! Virtualização permite criar múltiplas instâncias virtuais de sistemas em um único hardware físico.',
    difficulty: 'medium'
  },
  {
    id: 18,
    category: 'Protocolos',
    question: 'Qual protocolo é usado para envio de e-mails?',
    options: ['POP3', 'IMAP', 'SMTP', 'HTTP'],
    correctAnswer: 2,
    explanation: 'Correto! SMTP (Simple Mail Transfer Protocol) é usado para envio de e-mails entre servidores.',
    difficulty: 'easy'
  },
  {
    id: 19,
    category: 'Hardware',
    question: 'Qual a função da placa-mãe (motherboard)?',
    options: [
      'Armazenar dados permanentemente',
      'Conectar e permitir comunicação entre componentes do computador',
      'Processar gráficos 3D',
      'Resfriar o processador'
    ],
    correctAnswer: 1,
    explanation: 'Correto! A placa-mãe conecta todos os componentes do computador e permite a comunicação entre eles.',
    difficulty: 'easy'
  },
  {
    id: 20,
    category: 'Segurança',
    question: 'O que é phishing?',
    options: [
      'Um tipo de firewall',
      'Técnica de engenharia social para roubar informações',
      'Protocolo de segurança',
      'Sistema de criptografia'
    ],
    correctAnswer: 1,
    explanation: 'Correto! Phishing é uma técnica de engenharia social que tenta enganar usuários para obter dados sensíveis.',
    difficulty: 'easy'
  }
];

export const getLevelByScore = (score: number, total: number): string => {
  const percentage = (score / total) * 100;

  if (percentage >= 90) return 'Especialista';
  if (percentage >= 75) return 'Analista Sênior';
  if (percentage >= 60) return 'Analista Pleno';
  if (percentage >= 40) return 'Analista Júnior';
  return 'Iniciante';
};

export const getLevelColor = (level: string): string => {
  const colors: { [key: string]: string } = {
    'Especialista': 'text-yellow-600',
    'Analista Sênior': 'text-green-600',
    'Analista Pleno': 'text-blue-600',
    'Analista Júnior': 'text-orange-600',
    'Iniciante': 'text-gray-600'
  };

  return colors[level] || 'text-gray-600';
};
