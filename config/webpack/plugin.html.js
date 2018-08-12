const paths = require('../paths');

module.exports = {
    editor: {
        inject: true,
        template: paths.editorHtml,
        filename: 'editor.html',
        chunks: ['editor'],
    },
}