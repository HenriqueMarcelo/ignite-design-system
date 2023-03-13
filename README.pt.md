[English 🇬🇧](README.md)

# Ignite Design System

O Ignite Design System é um projeto completo de Design System construído dentro do curso Ignite da Rocketseat. Ele é composto de 3 pacotes que fornecem aos desenvolvedores a capacidade de construir interfaces consistentes e de alta qualidade usando o mesmo conjunto de valores, cores e informações compartilhadas.

O pacote pode ser acessado no NPM em: https://www.npmjs.com/settings/hrq-ignite-ui/packages
A documentação pode ser acessada em: https://henriquemarcelo.github.io/ignite-design-system/?path=/story/home--page

## Pacotes

### @hrq-ignite-ui/tokens

Este pacote contém um conjunto de tokens que definem os valores, cores e informações que são usados em todo o Design System. Os tokens são exportados e podem ser facilmente utilizados em qualquer projeto.

### @hrq-ignite-ui/react

Este pacote exporta componentes React que utilizam o design system. Os componentes são construídos com React, Typescript, Stitches, Phosphor Icons e Radix. Eles são altamente personalizáveis e podem ser facilmente adaptados para atender às necessidades específicas de cada projeto.
    
### @hrq-ignite-ui/docs

Este pacote contém uma documentação completa que explica como utilizar e mostra exemplos dos componentes do design system. Ele foi construído utilizando o StoryBook e é uma ótima maneira de entender como utilizar o Design System em seu projeto.
    
## Ferramentas

Para organizar o projeto como um todo, utilizamos a biblioteca turborepo e changesets. Isso nos permite gerenciar várias dependências em um único repositório e garantir que cada pacote esteja sincronizado com as versões mais recentes.

## Aprendizados

Com o Ignite Design System, pude aprender conceitos importantes, como criação de Design System, administração de monorepo, deploy para NPM e deploy para o Github Pages utilizando Github Actions. Além disso, aprendi como criar componentes personalizados com React e como construir uma documentação completa para o Design System.

## Contribuindo

Ficaremos felizes em receber contribuições de outros desenvolvedores. Sinta-se à vontade para abrir uma issue ou enviar um pull request em nosso repositório no Github.

## Comandos importantes

`npm run changeset`
`npm run version-packages`
`// npm run release // the release will be running by the CI`
`git push origin master`
