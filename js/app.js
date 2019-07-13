$(document).ready(function() {
	time();
});

function time() {
	let today = new Date();
	let weekday = new Array(7);
	weekday[0] = "Chủ nhật";
	weekday[1] = "Thứ hai";
	weekday[2] = "Thứ ba";
	weekday[3] = "Thứ tư";
	weekday[4] = "Thứ năm";
	weekday[5] = "Thứ sáu";
	weekday[6] = "Thứ bảy";

	let day = weekday[today.getDay()];
	let dd = today.getDate();
	let mm = today.getMonth() + 1;
	let yyyy = today.getFullYear();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
   	s = checkTime(s);

	let nowTime = h + ':' + m + ':' + s;
	if(dd < 10) {
		dd = '0' + dd;
	}
	if(mm < 10) {
		mm = '0' + mm;
	}
	today = day + ', ngày ' + dd + ' tháng ' + mm + ' năm ' + yyyy;

	let tmp='<span class="date">' + today + ' | ' + nowTime + '</span>';

	let clocktime = setTimeout("time()", "1000", "JavaScript");

	$('.date').html(tmp);

}
function checkTime(i) {
	if(i < 10) {
		i="0" + i;
	}
	return i;
}