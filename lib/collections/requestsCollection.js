Schema = {};
Requests = new Mongo.Collection("requests");

Schema.Requests = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  patientName: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  },
  age: {
    type: Number,
    max: 150,
    optional: true
  },
  bloodGroupId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  unitRequired: {
    type: Number,
    defaultValue: 1
  },
  dateOfRequirement: {
    type: Date,
    defaultValue: new Date()
  },
  contactNo: {
    type: String,
    min: 8,
    max: 16,
    optional: true
  },
  loaction: {
    type: Object
  },
  'location.geo': {
    type: Object,
    optional: true
  },
  'location.geo.lat': {
    type: String,
  },
  'location.geo.lng': {
    type: String,
  },
  'location.address': {
    type: Object,
  },
  'location.address.hospital': {
    type: String,
    optional: true
  },
  'location.address.locality': {
    type: String,
    optional: true
  },
  'location.address.city': {
    type: String,
  },
  'location.address.state': {
    type: String,
  },
  additionalDetails: {
    type: String,
    optional: true
  },
  donationRequests: {
    type: Array,
    optional: true
  },
  'donationRequests.$': {
    type:Object
  },
  'donationRequests.$.donerId': {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  'donationRequests.$.status': {
    type: String,
    allowedValues: ['accepted', 'rejected', 'invalid'],
    optional: true
  },
  'donationRequests.$.date': {
    type: Date,
    optional: true
  },
  status: {
    type: String,
    allowedValues: ['pending', 'more', 'complete', 'emergency', 'blocked'],
    defaultValue: 'pending'
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

Requests.attachSchema(Schema.Requests);
