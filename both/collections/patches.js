Patches = new Mongo.Collection('patches');

Patches.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// SCHEMA
const PatchesSchema = new SimpleSchema({

  name: {
    type: String,
    label: 'Name',
  },

  oscType: {
    type: String,
    label: 'Osc Type',
  },

  oscTuning: {
    type: Number,
    label: 'Osc Tuning',
  },

  lfoType: {
    type: String,
    label: 'LFO Type',
  },

  lfoRate: {
    type: Number,
    label: 'LFO Rate',
  },

  lfoLevel: {
    type: Number,
    label: 'LFO Level',
  },

  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue() {
      const timestamp = new Date();
      if (this.isInsert) {
        return new Date();
      } else if (!this.isUpsert) {
        this.unset();
      } else {
        return {
          $setOnInsert: timestamp,
        };
      }
    },
  },

});

Patches.attachSchema(PatchesSchema);
