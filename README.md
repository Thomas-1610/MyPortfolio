# Thomas Castro - Portfólio

## Estrutura do Projeto

Este projeto segue a arquitetura ASP.NET Core MVC adaptada para HTML/CSS/JS puros:

```
/Views
  /Shared
    _Layout.cshtml        → Layout principal (HTML base)
    _Navbar.cshtml        → Componente reutilizável de navegação
    _Footer.cshtml        → Componente reutilizável de rodapé
  /Home
    Index.cshtml          → Página inicial (View específica)

/wwwroot
  /css
    site.css             → Estilos globais
    home.css             → Estilos específicos da página Home
  /js
    site.js              → JavaScript global
    home.js              → JavaScript específico da página Home
  /assets
    /images              → Imagens do projeto
    /icons               → Ícones do projeto
```

## Arquitetura Conceitual

- **Views**: Estrutura visual e conteúdo (HTML)
- **CSS**: Camada visual desacoplada (estilos globais e específicos)
- **JavaScript**: Comportamento interativo (global e por página)

## Como Usar

### Execute com ASP.NET Core
```bash
dotnet watch run
```

Acesse: https://localhost:XXXX

### Estrutura ASP.NET Core MVC
- **Controllers/** - Lógica de controle (HomeController)
- **Views/** - Razor Views (HTML com sintaxe Razor)
- **wwwroot/** - Arquivos estáticos (CSS, JS, imagens)
- **Program.cs** - Configuração da aplicação
- **Portfolio.csproj** - Arquivo de projeto .NET

## Funcionalidades

- Navegação suave entre seções
- Animações nos cards de projetos
- Design responsivo
- Arquitetura modular e escalável
