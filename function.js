fetch('https://api.xor.cl/red/bus-stop/PC37').then(response => console.log(response))
function myFunc(success) {
  document.getElementById("UF").innerHTML = 'La ' + success + ' minutos 🚌💨⏲️';
  
  console.log(success)
  }
  fetch('https://api.xor.cl/red/bus-stop/PC37')
  .then(response => response.json())
  .then(data => {
    //console.log(data.services[0].id + ' llega en ' + data.services[0].buses[1].max_arrival_time);
    return data.services[0].id + ' llega en ' + data.services[0].buses[0].max_arrival_time;
    return data.services[0].id + ' llega en ' + data.services[0].buses[1].max_arrival_time;
  })
  .then(success => myFunc(success))
  .catch(error => console.log(error));
