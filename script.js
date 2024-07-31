document.addEventListener("DOMContentLoaded", function() {
    const talksTable = document.getElementById('talksTable').getElementsByTagName('tbody')[0];

    talks.forEach(talk => {
        let row = talksTable.insertRow();
        
        let cellAnno = row.insertCell(0);
        let cellTitolo = row.insertCell(1);
        let cellEvento = row.insertCell(2);
        let cellOrganizzatore = row.insertCell(3);
        let cellLink = row.insertCell(4);
        let cellVideo = row.insertCell(5);
        let cellSlide = row.insertCell(6);
        
        cellAnno.textContent = talk.Anno;
        cellTitolo.textContent = talk.Titolo;
        cellEvento.textContent = talk.Evento;
        cellOrganizzatore.textContent = talk.Organizzatore;
        cellLink.innerHTML = talk.Link.length>0 ? `<a href="${talk.Link}" target="_blank">Link</a>` : ``;
        cellVideo.innerHTML = talk.Video.length>0 ? `<a href="${talk.Video}" target="_blank">Video</a>` : ``;
        cellSlide.innerHTML = talk.Slide.length>0 ? `<a href="${talk.Slide}" target="_blank">Slide</a>` : `` ;
    });
});
