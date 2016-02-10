Meteor.startup(() => {
  if (Patches.find().count() === 0) {
    Patches.insert({
      name: 'Biene',
      oscType: 'sine',
      oscTuning: 5,
      lfoType: 'sine',
      lfoRate: 10,
      lfoLevel: 10,
    });
    Patches.insert({
      name: 'Achtung',
      oscType: 'sawtooth',
      oscTuning: 24,
      lfoType: 'triangle',
      lfoRate: 35,
      lfoLevel: 28,
    });
    Patches.insert({
      name: 'Fahrzeug',
      oscType: 'triangle',
      oscTuning: 2,
      lfoType: 'square',
      lfoRate: 2,
      lfoLevel: 81,
    });
  }
});
