// 9.A-assignment.js
//
// Componentizing a collection
// 

// Table-row component

Vue.component('table-row', {
  template: `<tr>
  <td>{{song}}</td>
  <td>{{artist}}</td>
  <td><img v-bind:src="image" v-bind:alt="label" /></td>
  <td>{{recordNo}}</td>
  <td>{{year}}</td>
  </tr>`,
  props: ['song', 'artist', 'image', 'label', 'recordNo', 'year']
});


// Record data stored as objects in array
let recordsArray = [
  {
  song: "Rhapsody in Blue",
  artist: "George Gershwin with Paul Whiteman and His Orchestra",
  image: "/images/RhapsodyGershwin-200x200.png",
  label: "Victor",
  recordNo: "55225",
  year: "1924"
  },
  
  {
  song: "Jazz Me Blues",
  artist: "Bix Beiderbecke and his Gang",
  image: "/images/JazzMeBeiderbecke-200x200.png",
  label: "Vocalion",
  recordNo: "3042",
  year: "1927"
},
    
  {
  song: "Mood Indigo",
  artist: "Duke Ellington & His Famous Orchestra (vocal by Ivie Anderson)",
  image: "/images/MoodIndigoEllington-200x200.png",
  label: "Columbia",
  recordNo: "35427",
  year: "1940"
  },
  
  {
  song: "More Than You Know",
  artist: "Billie Holiday",
  image: "/images/MoreThanYouKnowHoliday-200x200.png",
  label: "Columbia",
  recordNo: "36117",
  year: "1941"
  },
  
  {
  song: "Down For Double",
  artist: "Count Basie and His Orchestra",
  image: "/images/DownForDoubleBasie-200x200.png",
  label: "Okeh",
  recordNo: "6584",
  year: "1942"
  }  

];

// Vue object uses external array
const vm = new Vue({
  el: "#myRecords",
  data: {
    newRecordsObj: {
      song: '',
      artist: '',
      image: '',
      label: '',
      recordNo: '',
      year: '',
    },
    records: recordsArray
  },
  methods: {
    // on submit, check that form fields are not blank, starting with song:
    checkSong: function () {
      if(vm.newRecordsObj.song !== "") {
    // if song is not blank, go on to check artist:
        vm.checkArtist();
      } else {
    // if song is blank, show alert and wait until submit is clicked again.
        alert("Song name not given")
      }
    },
    // check that artist field is not blank, following same logic as above:
    // if artist is not blank, go on to check next field;
    // if artist is blank, show alert and wait until submit is clicked again.
    checkArtist: function () {
      if(vm.newRecordsObj.artist !== "") {
        vm.checkLabel();
      } else {
        alert("Artist name not given")
      }
    },
    // check that label isn't blank:
    // (image is the only field that is allowed to be blank)
    checkLabel: function () {
      if(vm.newRecordsObj.label !== "") {
        vm.checkRecordNo();
      } else {
        alert("Label not given")
      }
    },
    // check that recordNo isn't blank:
    checkRecordNo: function () {
      if(vm.newRecordsObj.recordNo !== "") {
        vm.checkYear();
      } else {
        alert("Record No. not given")
      }
    },
    // check that year isn't blank:
    checkYear: function () {
      if(vm.newRecordsObj.year !== "") {
        vm.submitHandler();
      } else {
        alert("Year not given")
      }
    },
    // if all fields have been checked and are not blank, control passes to submitHandler:
    submitHandler: function () {
    // add new record to table:
      vm.records = vm.records.concat(vm.newRecordsObj);
    // reset form for further input:
      vm.resetForm();
    },
      resetForm: function () {
      vm.newRecordsObj = {
      song: '',
      artist: '',
      image: '',
      label: '',
      recordNo: '',
      year: '',
      };
    }
  }
});