
function showURLPop() {
    //alert(0)
    document.getElementById('url-pop').setAttribute('opened', 'true')
}

function closePop(id, type) {
    //alert(0)
    document.getElementById(id).setAttribute('opened', 'false');

    if (type == 'add') {
        //alert(0)
        var URL = document.getElementById('torrent-url').value;

        if (URL != "") {
            window.createTorrentCLient(URL);

            const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
            snackbar.open();
            document.getElementById('torrent-url').value = "";
        }else{
            showSnackBar("Please enter a torrent file URL or magnet link !")
        }
    }
}

function showSnackBar(msg) {
    document.getElementById('snackbar_msg').innerHTML = msg;
    const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.open();
}

function pauseTorrent(e) {
    var id = e.target.id.split("_")[2];
    console.log(id)
    window.torrentDict[id].pause();
}

function destroyTorrent(){
    
    var id = document.getElementById('torrent-hash').value;
    window.torrentDict[id].destroy();
    clearIntervalList(id);
    document.getElementById('tr_'+id).remove();
}

function destroyPopup(e){

    var infoHash = e.target.id.split("_")[2];

    var name = window.torrentDict[infoHash].name;
    document.getElementById('db-name').innerHTML = name;
    document.getElementById('torrent-hash').value = infoHash;
    document.getElementById('destroy-pop').setAttribute('opened', 'true');
}

function logoutPopup(){
    document.getElementById('logout-pop').setAttribute('opened', 'true');
}

function profilePopup(){
    document.getElementById('profile-pop').setAttribute('opened', 'true');
}

function clearIntervalList(infoHash){
    window.intervalList[infoHash].forEach(element=>{
        clearInterval(element);
    })
}


