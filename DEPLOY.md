# 🚀 Guia de Publicação no GitHub

Este guia explica como publicar o projeto FARMACO-IA no GitHub.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no computador
- Projeto FARMACO-IA completo

## 🔧 Passos para Publicação

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository" (botão verde)
3. Configure o repositório:
   - **Nome**: `farmaco-ia` ou `farmaco-ia-portal`
   - **Descrição**: "Portal de Farmacologia Avançada para Odontologia"
   - **Visibilidade**: Public (para GitHub Pages gratuito)
   - **Inicializar**: NÃO marque "Add a README file"

### 2. Preparar o Projeto Local

```bash
# Navegar para a pasta do projeto
cd farmaco-ia-project

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: FARMACO-IA Portal"

# Adicionar origem remota (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/farmaco-ia.git

# Enviar para o GitHub
git push -u origin main
```

### 3. Configurar GitHub Pages

1. No repositório do GitHub, vá em **Settings**
2. Role até a seção **Pages**
3. Em **Source**, selecione "Deploy from a branch"
4. Em **Branch**, selecione "main"
5. Em **Folder**, selecione "/ (root)"
6. Clique em **Save**

### 4. Acessar o Site

Após alguns minutos, o site estará disponível em:
```
https://SEU-USUARIO.github.io/farmaco-ia/
```

## 📁 Estrutura Final do Repositório

```
farmaco-ia/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript
├── README.md               # Documentação
├── .gitignore              # Arquivos ignorados
├── DEPLOY.md               # Este guia
├── images/                 # Pasta de imagens
│   └── README.md
├── pdfs/                   # Pasta de PDFs
│   └── README.md
└── videos/                 # Pasta de vídeos
    └── README.md
```

## 🔄 Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações nos arquivos
# Adicionar mudanças
git add .

# Commit das mudanças
git commit -m "Descrição das mudanças"

# Enviar para o GitHub
git push origin main
```

## 📝 Comandos Git Úteis

```bash
# Verificar status
git status

# Ver histórico
git log --oneline

# Criar nova branch
git checkout -b nova-funcionalidade

# Voltar para main
git checkout main

# Mesclar branch
git merge nova-funcionalidade
```

## 🛠️ Solução de Problemas

### Erro de Autenticação
Se houver erro de autenticação, configure:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Site não Carrega
- Verifique se o GitHub Pages está ativado
- Aguarde alguns minutos para propagação
- Verifique se o arquivo `index.html` está na raiz

### Imagens não Aparecem
- Verifique se os caminhos estão corretos
- Use caminhos relativos (ex: `images/foto.jpg`)
- Certifique-se de que as imagens foram commitadas

## 🎯 Próximos Passos

1. **Adicionar Conteúdo**: Incluir PDFs e imagens reais
2. **SEO**: Otimizar meta tags e descrições
3. **Analytics**: Adicionar Google Analytics
4. **Domínio Customizado**: Configurar domínio próprio
5. **SSL**: Verificar certificado HTTPS

## 📞 Suporte

Para dúvidas sobre Git/GitHub:
- [Documentação Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub Pages](https://pages.github.com)

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado com sucesso
- [ ] GitHub Pages configurado
- [ ] Site acessível via URL
- [ ] Todas as funcionalidades testadas
- [ ] README.md atualizado
- [ ] Links funcionando corretamente

---

**🎉 Parabéns! Seu projeto FARMACO-IA está agora publicado no GitHub!**

