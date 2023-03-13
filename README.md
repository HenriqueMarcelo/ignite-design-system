[Português 🇧🇷](README.pt.md)

# Ignite Design System

The Ignite Design System is a complete Design System project built within Rocketseat's Ignite course. It consists of 3 packages that provide developers with the ability to build consistent, high-quality interfaces using the same set of shared values, colors, and information.

The package can be accessed in NPM at https://www.npmjs.com/settings/hrq-ignite-ui/packages

## Packages

### @hrq-ignite-ui/tokens

This package contains a set of tokens that define the values, colors, and information that are used throughout the Design System. The tokens are exported and can easily be used in any design.

### @hrq-ignite-ui/react

This package exports React components that use the Design System. The components are built with React, Typescript, Stitches, Phosphor Icons and Radix. They are highly customizable and can be easily adapted to meet the specific needs of each project.
    
### @hrq-ignite-ui/docs

This package contains complete documentation that explains how to use and shows examples of the design system components. It was built using StoryBook and is a great way to understand how to use the Design System in your project.
    
## Tools

To organize the project as a whole we use the turborepo library and changesets. This allows us to manage multiple dependencies in a single repository and ensure that each package is synchronized with the latest versions.

## Learnings

With Ignite Design System, I was able to learn important concepts such as creating Design System, managing monorepo, deploying to NPM and deploying to Github Pages using Github Actions. In addition, I learned how to create custom components with React and how to build a complete documentation for the Design System.

## Contributing

We would be happy to receive contributions from other developers. Feel free to open an issue or submit a pull request on our Github repository.

## Important Commands

`npm run changeset`
`npm run version-packages`
`// npm run release // the release will be running by the CI`
`git push origin master`
