(function($) {
    var baseUrl = "http://schlingel.bplaced.net",
        articlesUrl = baseUrl + "/articles.json";

    loadArticlesJson().done(processArticlesData).fail(processErrorResponse);

    function loadArticlesJson() {
        return $.ajax({
            url : articlesUrl,
            dataType : "json"
        });
    };

    function processArticlesData(articlesData) {
        var template = '<li><a href="%LINK%" alt="%DESCRIPTION%">%DATE%, %TITLE%</li>',
            html = '';

        articlesData.articles.forEach(function(article) {
            html += template.replace("%LINK%", article.link)
                            .replace("%DESCRIPTION%", article.description)
                            .replace("%DATE%", article.date)
                            .replace("%TITLE%", article.title);
        });

        $('ul').html(html);
    }

    function processErrorResponse() {
        alert('ERROR!');
    }
})($);