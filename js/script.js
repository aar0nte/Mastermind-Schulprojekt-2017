//#######################################################################################
//################################ Variablen ############################################
//#######################################################################################

var alle_farben = new Array("blau","gruen","lila","rot","pink","gelb");
var x = 0;
var i = 0;

//#######################################################################################
//########################### Random Zahlen/Farben ######################################
//#######################################################################################

if(i==0){
	rdm_farbe_0 = Math.floor (Math.random() *6);; i++;
}

if(i==1){
	rdm_farbe_1 = Math.floor (Math.random() *6);
	while(rdm_farbe_1 == rdm_farbe_0){
		rdm_farbe_1 = Math.floor (Math.random() *6);
	}
	i++;
}

if(i==2){
	rdm_farbe_2 = Math.floor (Math.random() *6);
	while(rdm_farbe_2 == rdm_farbe_0 || rdm_farbe_2 == rdm_farbe_1){
		rdm_farbe_2 = Math.floor (Math.random() *6);
	}
	i++;
}

if(i==3){
	rdm_farbe_3 = Math.floor (Math.random() *6);
	while(rdm_farbe_3 == rdm_farbe_0 || rdm_farbe_3 == rdm_farbe_1 || rdm_farbe_3 == rdm_farbe_2){
		rdm_farbe_3 = Math.floor (Math.random() *6);
	}
	i++;
}
//#######################################################################################
//############################# Farbe platzieren ########################################
//#######################################################################################

	function pick_blau()	{ball_ausgewaehlt = 0};
	function pick_gruen()	{ball_ausgewaehlt = 1};
	function pick_lila()	{ball_ausgewaehlt = 2};
	function pick_rot()		{ball_ausgewaehlt = 3};
	function pick_pink()	{ball_ausgewaehlt = 4};
	function pick_gelb()	{ball_ausgewaehlt = 5};

//#######################################################################################
//############################## Reihe 1 (0) ############################################
//#######################################################################################

	function feld_0_0() {
		if(x==0){
		document.getElementById("ball0.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball0.0" class="ball_all">';
		platziert_0_0 = ball_ausgewaehlt}
	}
	function feld_0_1()	{
		if(x==0){
		document.getElementById("ball0.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball0.1" class="ball_all">';
		platziert_0_1 = ball_ausgewaehlt}
	}
	function feld_0_2()	{
		if(x==0){
		document.getElementById("ball0.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball0.2" class="ball_all">';
		platziert_0_2 = ball_ausgewaehlt}
	}
	function feld_0_3()	{
		if(x==0){
		document.getElementById("ball0.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball0.3" class="ball_all">';
		platziert_0_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//############################## Reihe 2 (1) ############################################
//#######################################################################################

	function feld_1_0() {
		if(x==1){
		document.getElementById("ball1.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball1.0" class="ball_all">';
		platziert_1_0 = ball_ausgewaehlt}
	}
	function feld_1_1()	{
		if(x==1){
		document.getElementById("ball1.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball1.1" class="ball_all">';
		platziert_1_1 = ball_ausgewaehlt}
	}
	function feld_1_2()	{
		if(x==1){
		document.getElementById("ball1.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball1.2" class="ball_all">';
		platziert_1_2 = ball_ausgewaehlt}
	}
	function feld_1_3()	{
		if(x==1){
		document.getElementById("ball1.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball1.3" class="ball_all">';
		platziert_1_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//############################## Reihe 3 (2) ############################################
//#######################################################################################

	function feld_2_0() {
		if(x==2){
		document.getElementById("ball2.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball2.0" class="ball_all">';
		platziert_2_0 = ball_ausgewaehlt}
	}
	function feld_2_1()	{
		if(x==2){
		document.getElementById("ball2.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball2.1" class="ball_all">';
		platziert_2_1 = ball_ausgewaehlt}
	}
	function feld_2_2()	{
		if(x==2){
		document.getElementById("ball2.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball2.2" class="ball_all">';
		platziert_2_2 = ball_ausgewaehlt}
	}
	function feld_2_3()	{
		if(x==2){
		document.getElementById("ball2.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball2.3" class="ball_all">';
		platziert_2_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//############################## Reihe 4 (3) ############################################
//#######################################################################################

	function feld_3_0() {
		if(x==3){
		document.getElementById("ball3.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball3.0" class="ball_all">';
		platziert_3_0 = ball_ausgewaehlt}
	}
	function feld_3_1()	{
		if(x==3){
		document.getElementById("ball3.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball3.1" class="ball_all">';
		platziert_3_1 = ball_ausgewaehlt}
	}
	function feld_3_2()	{
		if(x==3){
		document.getElementById("ball3.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball3.2" class="ball_all">';
		platziert_3_2 = ball_ausgewaehlt}
	}
	function feld_3_3()	{
		if(x==3){
		document.getElementById("ball3.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball3.3" class="ball_all">';
		platziert_3_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//############################## Reihe 5 (4) ############################################
//#######################################################################################

	function feld_4_0() {
		if(x==4){
		document.getElementById("ball4.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball4.0" class="ball_all">';
		platziert_4_0 = ball_ausgewaehlt}
	}
	function feld_4_1()	{
		if(x==4){
		document.getElementById("ball4.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball4.1" class="ball_all">';
		platziert_4_1 = ball_ausgewaehlt}
	}
	function feld_4_2()	{
		if(x==4){
		document.getElementById("ball4.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball4.2" class="ball_all">';
		platziert_4_2 = ball_ausgewaehlt}
	}
	function feld_4_3()	{
		if(x==4){
		document.getElementById("ball4.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball4.3" class="ball_all">';
		platziert_4_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//############################## Reihe 6 (5) ############################################
//#######################################################################################

	function feld_5_0() {
		if(x==5){
		document.getElementById("ball5.0").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball5.0" class="ball_all">';
		platziert_5_0 = ball_ausgewaehlt}
	}
	function feld_5_1()	{
		if(x==5){
		document.getElementById("ball5.1").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball5.1" class="ball_all">';
		platziert_5_1 = ball_ausgewaehlt}
	}
	function feld_5_2()	{
		if(x==5){
		document.getElementById("ball5.2").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball5.2" class="ball_all">';
		platziert_5_2 = ball_ausgewaehlt}
	}
	function feld_5_3()	{
		if(x==5){
		document.getElementById("ball5.3").innerHTML = '<img src="balls/' + alle_farben[ball_ausgewaehlt] + '.png" id="ball5.3" class="ball_all">';
		platziert_5_3 = ball_ausgewaehlt}
	}

//#######################################################################################
//################################# farbe checken #######################################
//#######################################################################################

function fortfahren() {
	//erster Durchgang
	if(x==0){
		if(platziert_0_0 >= 0 && platziert_0_1 >= 0 && platziert_0_2 >= 0 && platziert_0_3 >= 0){
			if(rdm_farbe_0 == platziert_0_0){
				document.getElementById("ball_sw0.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_0_1 || rdm_farbe_0 == platziert_0_2 || rdm_farbe_0 == platziert_0_3){
				document.getElementById("ball_sw0.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_0_1){
				document.getElementById("ball_sw0.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_0_0 || rdm_farbe_1 == platziert_0_2 || rdm_farbe_1 == platziert_0_3){
				document.getElementById("ball_sw0.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_0_2){
				document.getElementById("ball_sw0.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_0_1 || rdm_farbe_2 == platziert_0_0 || rdm_farbe_2 == platziert_0_3){
				document.getElementById("ball_sw0.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_0_3){
				document.getElementById("ball_sw0.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_0_1 || rdm_farbe_3 == platziert_0_2 || rdm_farbe_3 == platziert_0_3){
				document.getElementById("ball_sw0.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_0_0 == rdm_farbe_0 && platziert_0_1 == rdm_farbe_1 && 
			platziert_0_2 == rdm_farbe_2 && platziert_0_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
	//zweiter Durchgang
	else if(x==1){
		if(platziert_1_0 >= 0 && platziert_1_1 >= 0 && platziert_1_2 >= 0 && platziert_1_3 >= 0){
			if(rdm_farbe_0 == platziert_1_0){
				document.getElementById("ball_sw1.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_1_1 || rdm_farbe_0 == platziert_1_2 || rdm_farbe_0 == platziert_1_3){
				document.getElementById("ball_sw1.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_1_1){
				document.getElementById("ball_sw1.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_1_0 || rdm_farbe_1 == platziert_1_2 || rdm_farbe_1 == platziert_1_3){
				document.getElementById("ball_sw1.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_1_2){
				document.getElementById("ball_sw1.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_1_1 || rdm_farbe_2 == platziert_1_0 || rdm_farbe_2 == platziert_1_3){
				document.getElementById("ball_sw1.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_1_3){
				document.getElementById("ball_sw1.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_1_1 || rdm_farbe_3 == platziert_1_2 || rdm_farbe_3 == platziert_1_3){
				document.getElementById("ball_sw1.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_1_0 == rdm_farbe_0 && platziert_1_1 == rdm_farbe_1 && platziert_1_2 == rdm_farbe_2 && platziert_1_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
	//dritter Durchgang
	else if(x==2){
		if(platziert_2_0 >= 0 && platziert_2_1 >= 0 && platziert_2_2 >= 0 && platziert_2_3 >= 0){
			if(rdm_farbe_0 == platziert_2_0){
				document.getElementById("ball_sw2.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_2_1 || rdm_farbe_0 == platziert_2_2 || rdm_farbe_0 == platziert_2_3){
				document.getElementById("ball_sw2.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_2_1){
				document.getElementById("ball_sw2.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_2_0 || rdm_farbe_1 == platziert_2_2 || rdm_farbe_1 == platziert_2_3){
				document.getElementById("ball_sw2.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_2_2){
				document.getElementById("ball_sw2.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_2_1 || rdm_farbe_2 == platziert_2_0 || rdm_farbe_2 == platziert_2_3){
				document.getElementById("ball_sw2.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_2_3){
				document.getElementById("ball_sw2.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_2_1 || rdm_farbe_3 == platziert_2_2 || rdm_farbe_3 == platziert_2_3){
				document.getElementById("ball_sw2.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_2_0 == rdm_farbe_0 && platziert_2_1 == rdm_farbe_1 && platziert_2_2 == rdm_farbe_2 && platziert_2_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
	//vierter Durchgang
	else if(x==3){
		if(platziert_3_0 >= 0 && platziert_3_1 >= 0 && platziert_3_2 >= 0 && platziert_3_3 >= 0){
			if(rdm_farbe_0 == platziert_3_0){
				document.getElementById("ball_sw3.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_3_1 || rdm_farbe_0 == platziert_3_2 || rdm_farbe_0 == platziert_0_3){
				document.getElementById("ball_sw3.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_3_1){
				document.getElementById("ball_sw3.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_3_0 || rdm_farbe_1 == platziert_3_2 || rdm_farbe_1 == platziert_3_3){
				document.getElementById("ball_sw3.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_3_2){
				document.getElementById("ball_sw3.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_3_1 || rdm_farbe_2 == platziert_3_0 || rdm_farbe_2 == platziert_3_3){
				document.getElementById("ball_sw3.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_3_3){
				document.getElementById("ball_sw0.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_3_1 || rdm_farbe_3 == platziert_3_2 || rdm_farbe_3 == platziert_3_3){
				document.getElementById("ball_sw3.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_3_0 == rdm_farbe_0 && platziert_3_1 == rdm_farbe_1 && platziert_3_2 == rdm_farbe_2 && platziert_3_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
	//fünfter Durchgang
	else if(x==4){
		if(platziert_4_0 >= 0 && platziert_4_1 >= 0 && platziert_4_2 >= 0 && platziert_4_3 >= 0){
			if(rdm_farbe_0 == platziert_4_0){
				document.getElementById("ball_sw4.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_4_1 || rdm_farbe_0 == platziert_4_2 || rdm_farbe_0 == platziert_4_3){
				document.getElementById("ball_sw4.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_4_1){
				document.getElementById("ball_sw4.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_4_0 || rdm_farbe_1 == platziert_4_2 || rdm_farbe_1 == platziert_4_3){
				document.getElementById("ball_sw4.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_4_2){
				document.getElementById("ball_sw4.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_4_1 || rdm_farbe_2 == platziert_4_0 || rdm_farbe_2 == platziert_4_3){
				document.getElementById("ball_sw4.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_4_3){
				document.getElementById("ball_sw4.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_4_1 || rdm_farbe_3 == platziert_4_2 || rdm_farbe_3 == platziert_4_3){
				document.getElementById("ball_sw4.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_4_0 == rdm_farbe_0 && platziert_4_1 == rdm_farbe_1 && platziert_4_2 == rdm_farbe_2 && platziert_4_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
	//sechster Durchgang
	else if(x==5){
		if(platziert_5_0 >= 0 && platziert_5_1 >= 0 && platziert_5_2 >= 0 && platziert_5_3 >= 0){
			if(rdm_farbe_0 == platziert_5_0){
				document.getElementById("ball_sw5.0").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_0 == platziert_5_1 || rdm_farbe_0 == platziert_5_2 || rdm_farbe_0 == platziert_5_3){
				document.getElementById("ball_sw5.0").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_1 == platziert_5_1){
				document.getElementById("ball_sw5.1").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_1 == platziert_5_0 || rdm_farbe_1 == platziert_5_2 || rdm_farbe_1 == platziert_5_3){
				document.getElementById("ball_sw5.1").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_2 == platziert_5_2){
				document.getElementById("ball_sw5.2").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_2 == platziert_5_1 || rdm_farbe_2 == platziert_5_0 || rdm_farbe_2 == platziert_5_3){
				document.getElementById("ball_sw5.2").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(rdm_farbe_3 == platziert_5_3){
				document.getElementById("ball_sw5.3").innerHTML = '<img src="balls/schwarz.png" class="ball_sw_platziert">'
			}
			else if(rdm_farbe_3 == platziert_5_1 || rdm_farbe_3 == platziert_5_2 || rdm_farbe_3 == platziert_5_3){
				document.getElementById("ball_sw5.3").innerHTML = '<img src="balls/weiss.png" class="ball_sw_platziert">'
			}


			if(platziert_5_0 == rdm_farbe_0 && platziert_5_1 == rdm_farbe_1 && platziert_5_2 == rdm_farbe_2 && platziert_5_3 == rdm_farbe_3){
				alert("Herzlichen Glückwunsch! Du hast alle Farben erraten!");
			}
		}
		x++;
	}
};