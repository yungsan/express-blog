class SiteController{
    
    // [GET] /
    index(req, res){
        res.render('index', { title: 'home'});
    }

    // [GET] /about
    about(req, res){
        res.render('about', {title: "about"});
    }

    // [GET] /login
    login(req, res){
        res.render('login', {title: 'Login'})
    }

    // [GET] /register
    register(req, res){
        res.send('register')
    }

}

module.exports = new SiteController;