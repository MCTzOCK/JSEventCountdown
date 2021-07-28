const search = new URLSearchParams(window.location.search)
if (search.has('name') && search.has('date')) {
    document.getElementById('event_creator').style.display = 'none'
    document.getElementById('event_viewer').style.display = 'block'

    document.getElementById('event_name').innerText = search.get('name')

    let countDownDate = new Date(search.get('date')).getTime();

    const x = setInterval(() => {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('event_time').innerText = days + "d" + " " +
         hours + "h" + " " + minutes + "m" + " " + seconds + "s"

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("event_time").innerHTML = "EXPIRED";
        }
    }, 1000)
} else {
    document.getElementById('event_viewer').style.display = 'none'

    document.getElementById('event_creator_create_button').addEventListener('click', () => {
        let date = new Date(document.getElementById("event_creator_date").value + " " + document.getElementById("event_creator_time").value)
        window.location.assign("?name=" + document.getElementById('event_creator_name').value + "&date=" + date)
    })
}

function parseDate(s) {
    const b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}