"use strict";

const mongoose = require("mongoose");
const Movie = require("../model/movie");

exports.movies = (req, res) => {
  Movie.find({}, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

exports.getMovie = (req, res) => {
  const id = req.query.movieId;
  Movie.findById(id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

exports.add = (req, res) => {
  const newMovie = new Movie(req.body);
  newMovie.save((err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

exports.update = (req, res) => {
  const id = mongoose.Types.ObjectId(req.query.movieId);
  Movie.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

exports.delete = (req, res) => {
  const id = mongoose.Types.ObjectId(req.query.movieId);
  Movie.remove({ _id: id }, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Movie deleted from db" });
  });
};

exports.initial = (req, res) => {
  res
    .status(200)
    .send({
      backend: "Working",
      MongoDB: "Connected",
      hostedIn: "Heroku",
      author: "Karthikeyan S",
      srcCode: "https://github.com/karthi-21/CRUD-Test",
      authorProfile: "https://github.com/karthi-21",
      isAutomaticDeploymentEnabled: "true",
      ForAvailableURLS: "https://github.com/karthi-21/CRUD-Test/blob/master/README.md",
    });
};
