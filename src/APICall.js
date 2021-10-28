import react from "react"

async function fetchText() {
    let response = await fetch('https://api.fbi.gov/wanted/v1/list');
    let data = await response.json();
    console.log(data);
  }