// Code goes here

var work = function() {
  console.log("working hard");
};

var dowork = function(f) {
  console.log("starting");
  try { 
    f();
  } catch (ex) {
    console.log("Personal catch"+ex);

  }
  console.log("ending");

}
dowork(work);