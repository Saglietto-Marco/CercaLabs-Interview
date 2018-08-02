const axios = require('axios');

module.exports = {
    
    reverseString: (req, res) => {
        let reversed = '';
        let str = req.body.postedStr;
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        let reversedObj = {
            string: reversed,
            success: true
        }
        res.json(reversedObj);
    },

    URLRequest: (req, res) => {
        let URL = req.body.URLInput;
        let method = req.body.methodInput;
        if (method === "post") {
            axios.post(URL)
                .then(response => res.json(response.data))
                .catch(err => res.status(422).json(err));
        } else {
            axios.get(URL)
                .then(response => res.json(response.data))
                .catch(err => res.status(422).json(err));
        }

    }
};