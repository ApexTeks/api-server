const Job = require('../models/jobModel');
const User = require('../models/userModel');
const Employer = require('../models/employerModel');
const Contract = require('../models/contractModel');
const Application = require('../models/applicationModel');
const Admin = require("../models/adminModel");
const Notification = require('../models/notificationModel')
const notificationController = require('../controllers/notificationController');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);

/*
CREATE
READ
UPDATE
DELETE
*/


exports.getAdmin = async (req, res) => {
    try {
      if(req.user){
        const user = req.user;
        res.status(200).json({ user });
    } 
    }catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};

// get all documents.count...
exports.getAllRecordsCount = async (req, res) => {
    try{
        const users = await User.find();
        const employers = await Employer.find();
        const jobs = await Job.find();
        const applications = await Application.find();
        const contracts = await Contract.find();
        const administrator = await Admin.find();
        
        const count = {
            users: users.length,
            employers: employers.length,
            jobs: jobs.length,
            applications: applications.length,
            contracts: contracts.length,
            administrators: administrator.length
            
        }

        res.status(200).json({ count });


    }catch(error){
        console.log("error retrieving totla doc count: ", error);
        res.status(500).json({ message: "internal server error" });
    }
}

// GET ALL CONTRACTS...
exports.getAllContracts = async(req, res) => {
    try{
     
        const contracts = await Contract.find()
        .populate({
            path: "employer",
            select: "firstname lastname profile" // Specify the properties you want to populate
        })
        .populate({
            path: "employer",
            select: "firstname lastname profile" // Specify the properties you want to populate
        })
        .populate({
            path: "job"
        });

        return res.status(200).json({ contracts });
               
    }catch(error){
        console.log(error)
    }
}

// GET ALL EMPLOYER RECORDS...
exports.getAllEmployers = async (req, res) => {
    try{
      const employers = await Employer.find();
      res.status(200).json({ employers });
    }catch(error){
      console.log(error);
      res.status(500).json({ message: 'internal server error' })
    }
  }

// GET ALL USER RECORDS...
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };