// db.js
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSC = new mongoose.Schema({
  user: {type: String, lowercase: true, trim: true, unique: true, required: [true, "can't be blank"], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], index: true},
  password: { type: String, required: true},
});

UserSC.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSC.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSC.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


UserSC.statics.authenticate = function (email, password, callback) {
  mongoose.model('User', UserSC).findOne({ email: email })
  .exec(function (err, user) {
  if (err) {
    console.log("NOT WORKS")
    return callback(err)
  } else if (!user) {
    var err = new Error('User not found.');
    err.status = 401;
    return callback(err);
  }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        console.log("WORKS")
        return callback(null, user);
      } else {
        console.log("NOT WORKS")
        return callback();
        }
    })
  });
}

const TeleSchema = new mongoose.Schema({
	teleRequestor: String,
	teleRequestorPhoneNumber: String,
  teleRequestorEmail: String,
	teleDepartmentName: String,
	teleRecipient: String,
	teleRecipientPhoneNumber: String,
	teleServiceDescription: String,
	teleRequestCompletionDate:String,
	teleServ: String,
	id: String,
});

const TechSchema = new mongoose.Schema({
	requestor:String,
	RequestorPhoneNumber:String,
	RequestorEmail:String,
	DepartmentName:String,
	Recipient:String,
	RecipientPhoneNumber:String,
	ServiceDescription:String,
	RequestCompletionDate:String,
	ServiceType:String,
	Category:String,
	id: String,
});

mongoose.model('User', UserSC);

mongoose.model('Tele', TeleSchema);

mongoose.model('Tech', TechSchema);


mongoose.connect('mongodb://localhost/servicelink');
