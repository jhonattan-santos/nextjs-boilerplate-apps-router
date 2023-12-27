module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name? (e.g. Button, ActionButton, etc)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: './styles.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: './test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: './stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: './component.tsx.hbs'
      }
    ]
  })
}
