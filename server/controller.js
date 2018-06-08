

module.exports = {
    registerUser: (req, res, next) => {
        const db = req.app.get('db');
        console.log('registerUser just hit')
        const {user_name, password, profile_pic} = req.body

        db.create_user([id, user_name, password, profile_pic])
            .then(users => res.status(200).send(users))
            .catch(() => res.status(500).send())
    },

    loginUser: (req, res, next) => {
        const db = req.app.get('db');
        console.log('loginUser just hit')
        const { user_name, password} = req.body

        db.login_user([user_name, password])
        .then(users => res.status(200).send(users))
        .catch(() => res.status(500).send())
    }
}
