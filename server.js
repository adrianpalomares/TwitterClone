const express = require("express");
const favicon = require("express-favicon");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

// app.use(favicon(__dirname + "/client/build/favicon.ico"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/tweeter", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// User schema
const User = mongoose.model("User", {
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String
});

// Post schema
const Post = mongoose.model("Post", {
    user_id: String,
    username: String,
    content: String,
    date: Date
});

app.get("/users", function(request, response) {
    User.find({}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            response.json(docs);
        }
    });
});

app.get("/users/:username", function(request, response) {
    console.log(request.params.username);
    User.find({ username: request.params.username }, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log(docs.length === 0);
            response.json(docs[0]);
        }
    });
});

app.post("/users", function(request, response) {
    let hashedPass = bcrypt.hashSync(request.body.password, 7);
    User.create({
            username: request.body.username,
            password: hashedPass,
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email
        },
        function(err) {
            if (err) {
                console.log(err);
            } else {
                response.json({ result: "User created" });
            }
        }
    );
});

// Test this route
app.put("/users/:id", function(request, response) {
    User.findById(request.params.id, function(err, user) {
        if (err) {
            console.log(err);
        }
        // Finish this method
        user.username = request.body.username;
        user.firstname = request.body.firstname;
        user.lastname = request.body.lastname;
        user.email = request.body.email;

        user.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                response.sendStatus(200);
            }
        });
    });
});

// Test this route
app.delete("/users/:id", function(request, response) {
    User.deleteOne({ _id: request.params.id }, function(err) {
        if (err) {
            console.log(err);
        } else {
            response.sendStatus(200);
        }
    });
});

app.post("/auth", function(request, response) {
    // Make request to get password from database
    User.find({ username: request.body.username }, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            let hashedPassword = docs[0].password;
            let result = bcrypt.compareSync(request.body.password, hashedPassword);
            response.json({ result: result });
        }
    });
});

app.get("/posts", function(request, response) {
    Post.find({}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            response.json(docs);
        }
    });
});

app.get("/posts/:id", function(request, response) {});

app.post("/posts", function(request, response) {
    Post.create({
            user_id: request.body.user_id,
            username: request.body.username,
            content: request.body.content,
            // Date has to be in from "1995-12-17T03:24:00"
            // Date also includes time
            date: request.body.date === undefined ?
                new Date() :
                new Date(request.body.date)
        },
        function(err, post) {
            if (err) {
                console.log(err);
            } else {
                response.json(post);
            }
        }
    );
});

app.put("/posts/:id", function(request, response) {
    Post.findById(request.params.id, function(err, post) {
        if (err) {
            console.log(err);
        }
        post.content = request.body.content;
        post.date = new Date();

        post.save(function(err) {
            if (err) {
                console.log(err);
            } else {
                response.sendStatus(200);
            }
        });
    });
});

app.delete("/posts/:id", function(request, response) {
    Post.deleteOne({ _id: request.params.id }, function(err) {
        if (err) {
            console.log(err);
        } else {
            response.sendStatus(200);
        }
    });
});

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, '/client/build')));

app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "/client/build", "index.html"));
})

app.listen(PORT, function() {
    console.log(`SERVING ON PORT: ${PORT}`);
})