module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'New component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
            },
        ],
        actions: [
            {
                type: 'add',
                path: './src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: '.plop/plop-templates/component.hbs',
            },
            {
                type: 'add',
                path: './src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                templateFile: '.plop/plop-templates/styles.hbs',
            },
            {
                type: 'add',
                path: './src/components/{{pascalCase name}}/index.ts',
                templateFile: '.plop/plop-templates/index.hbs',
            },
            {
                type: 'add',
                path: './src/components/{{pascalCase name}}/interfaces.ts',
                templateFile: '.plop/plop-templates/interfaces.hbs',
            },
        ],
    })
}
