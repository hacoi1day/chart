$(document).ready(function() {

new Chart(document.getElementById("line-chart"), {
	type: 'line',
	data: {
		labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
		datasets: [
			{ 
				data: [15, 86, 114, 106, 111, 133, 221, 783, 800],
				label: "Nhiệt độ",
				borderColor: "#3e95cd",
				fill: false
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Nhiệt độ đất',
			position: 'bottom',
			fontSize: 14,
			fontColor: 'blue',
			fontStyle: 'bold',
		},
		layout: {
			padding: {
				top: 20,
				bottom: 20,
			}
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Thời gian'
				}
			}],
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Nhiệt độ'
				}
			}]
		},
		legend: {
			display: false,

		}

	} 
});

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
	data: {
		labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
		datasets: [
			{
				label: "Nhiệt độ",
				data: [15, 86, 114, 106, 111, 133, 221, 783, 800],
				backgroundColor: 'green',
				fill: false
			}
		]
	},
	options: {
		legend: {
			display: false 
		},
		title: {
			display: true,
			text: 'Nhiệt độ đất',
			position: 'bottom',
			fontSize: 14,
			fontColor: 'blue',
			fontStyle: 'bold',
		},
		layout: {
			padding: {
				top: 20,
				bottom: 20
			}
		},
		scales: {
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Thời gian'
				}
			}],
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Nhiệt độ'
				}
			}]
		},
		legend: {
			display: false,

		}

	}
});


});