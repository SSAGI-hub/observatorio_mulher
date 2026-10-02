# 🟣 Observatório da Mulher de Niterói — Iniciativas Municipais

Este repositório contém a interface web do mapeamento e acompanhamento de iniciativas, programas e políticas públicas voltadas para as mulheres no município de Niterói.

---

## 📌 Funcionalidades

- **Visão em Cards:** Exibição das iniciativas em formato de grelha (*grid*), com detalhes do órgão responsável, ano de início, e tags categorizadas por Eixo Temático e Tipo de Impacto.
- **Linha do Tempo Cronológica:** Visualização agrupada por ano de início da iniciativa.
- **Mapa de Equipamentos (SIGeo Niterói):** Integração interativa via [Leaflet](https://leafletjs.com/) consumindo a API GeoJSON da **Prefeitura de Niterói / SIGeo** para localização dos pontos de atendimento.
- **Filtros Dinâmicos:** Filtragem por múltiplos Eixos Temáticos (Enfrentamento à Violência, Saúde, Educação, Autonomia Econômica, etc.) e Tipos de Impacto (Direto / Indireto).
- **Modal de Ficha Técnica:** Ficha detalhada para cada iniciativa, contendo descrição, público prioritário, orçamento estimado, situação atual e números de destaque.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3:** Layout responsivo, variáveis CSS, CSS Grid e Flexbox.
- **JavaScript (ES6+):** Manipulação de DOM, consumo de APIs assíncronas (`fetch`) e lógica de filtragem dinâmica.
- **Leaflet.js:** Renderização e interatividade do mapa de equipamentos.
- **Tipografia:** Google Fonts (*Bricolage Grotesque* & *Readex Pro*).

---

## 📁 Estrutura de Pastas

```text
├── index.html               # Página principal das Iniciativas Municipais
├── css/
│   └── style.css            # Estilos globais e componentes da página
├── components/
│   ├── header.html          # Cabeçalho modular
│   └── footer.html          # Rodapé modular
├── data/
│   └── iniciativas.json     # Base de dados estruturada das iniciativas
└── README.md                # Documentação do projeto
