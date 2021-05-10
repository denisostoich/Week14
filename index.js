const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log('Server started')
})

var handleRegister = function (req, res) {
    console.log(req.body)
    const newUser = {
        fullName: req.body.fullName,
        email: req.body.email,
        pass: req.body.pass,
    };
    if (!newUser.fullName || !newUser.email || !newUser.pass) {
        return res.status(400).json({ msg: 'Please provide name, email and password'});
    }
    else {
        return res.json({result: 'Data sent successfully'});
    }
}

var handleLogin = function (req, res) {
    console.log(req.body)
    const registeredUser = {
        email: req.body.email,
        pass: req.body.pass
    };
    if (registeredUser.email && registeredUser.pass) {
        return res.json({result: 'Data sent successfully'});
    }
    else {
        return res.status(400).json({ msg: 'User does not exist'});
    }
}

app.post('/register', handleRegister);

app.put('/login', handleLogin);