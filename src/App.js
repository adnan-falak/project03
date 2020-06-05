import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello World From Adnan Falak</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function showTime() {
  var sT= new Date();
  var h= sT.getHours();
  var m= sT.getMinutes();
  var s= sT.getSeconds();
  var mer="AM";
  	if (h>=12) {
  		mer="PM";
  	}
  	if (h==0) {
  		h=12;
  	}
  	if (h>12) {
  		h=h-12;
  	}
  	if (h<10) {
  		h="0"+h;
  	}
  	if (m<10) {
  		m="0"+m;
  	}
  	if (s<10) {
  		s="0"+s;
  	}
  var time=h+" "+":"+" "+m+" "+":"+" "+s;
  document.getElementById("main").innerText=time+" "+mer;
  setTimeout(showTime,1000);

}
showTime();

function alsoDate() {
	var date= new Date();
	var showDate=date.toDateString();
	document.getElementById('date').innerText=showDate;
}
alsoDate();

function line() {
	document.getElementById('java').innerText="Digital Clock In javascript";
}
line();

export default App;
