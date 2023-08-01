
    function getVaqt() { 
            let selectElement = document.getElementById("shaharselect");
            let selectedCity = selectElement.value;
            let apiUrl = 'https://islomapi.uz/api/present/day?region=' + selectedCity;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('resultbomdod').innerHTML=`Bomdod : ${data.times.tong_saharlik}`;
                    
                    document.getElementById('resultquyosh').innerHTML=`Quyosh : ${data.times.quyosh}`;
                    document.getElementById('resultpeshin').innerHTML=`Peshin : ${data.times.peshin}`;
                    document.getElementById('resultasr').innerHTML=`Asr : ${data.times.asr}`;
                    document.getElementById('resultshom').innerHTML=`Shom : ${data.times.shom_iftor}`;
                    document.getElementById('resultxufton').innerHTML=` Xufton : ${data.times.hufton}`;
                    
                })
                .catch(error => console.error('Xato yuz berdi: ', error));
        }
        let shaharselect = document.getElementById("shaharselect");
        shaharselect.onchange = getVaqt;
        
    
        getVaqt();

