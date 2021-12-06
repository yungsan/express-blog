class SiteController{
    
    // [GET] /
    index(req, res){
        res.render('index', { title: 'home', message: 'homepage'});
    }

    // [GET] /about
    about(req, res){
        res.render('about', {title: "about", message: "about page"});
    }

}

module.exports = new SiteController;