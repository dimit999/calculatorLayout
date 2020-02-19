module.export = {
    clearMocks: true, // при каждом запуске теста очищать моки
    collectCoverageFrom: ['src/**/*.js'], // откуда собирать инфу для отчета по покрытию тестами (все файлы с расширением js)
    coverageDirectory: 'coverage', // где должен храниться отчет по покрытию - папка
    moduleFileExtensions: ['js'], // указываем расширение файлов, которые будем тестировать
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'], // указываем где могут находитьяс теста - файлы или папки
    testPathIgnorePatterns: ['\\\\node_modules\\\\'], // укаpsdftv где тесты не надо искать
    transformIgnorePatterns: ['<rootDir>/node_modules/'], // указыает на то где нам не нужно файлы для трансформации
    transform: {
        '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest',
    // eslint-disable-next-line max-len
    }, // указыаем как работать с теми или иными файлами - для стилей - картнок и шрифтов - использовать пакет jest-transform-stub
    // verbose: false, // мы не хотим подробный отчет видеть
};
