var express = require('express'),
    articles = require('./routes/articles');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/articles', articles.findAll);
app.get('/articles/:id', articles.findById);
app.post('/articles', articles.addArticle);
app.put('/articles/:id', articles.updateArticle);
app.delete('/articles/:id', articles.deleteArticle);
 
app.listen(3000);
console.log('Fapping on your image and listening on port 3000...');