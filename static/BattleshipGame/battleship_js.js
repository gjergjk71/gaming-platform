	var array1=[Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1)];
var turn= 0 ;
var scoreA=0;
var scoreB=0;
document.getElementById('pl1').innerHTML=+scoreA;
document.getElementById('pl2').innerHTML=+scoreB;
function side1_if() {
	if (array1[0]==array1[1] || array1[0]==array1[2] || array1[0]==array1[3] || array1[1]==array1[2] || array1[1]==array1[3] || array1[2]==array1[3]) 
		{
			array1[0]=Math.floor((Math.random()*16)+1);
			array1[1]=Math.floor((Math.random()*16)+1);
			array1[2]=Math.floor((Math.random()*16)+1);
			array1[3]=Math.floor((Math.random()*16)+1);
			side1_if();
		}
}    
side1_if();

function side1(id) {	
		if (id=='a'+array1[0] || id=='a'+array1[1] || id=='a'+array1[2] || id=='a'+array1[3]) {
			if (turn==1) {
				document.getElementById(id).style.backgroundColor='red';
				document.getElementById(id).disabled = true;
				scoreA=scoreA+1
				document.getElementById('pl2').innerHTML=scoreA ;
				turn=turn-1;
				if (scoreA==4) 
				{
					for (i = 1; i < 17; i++)
					{ 
						document.getElementById('a'+i).disabled = true;
						document.getElementById('b'+i).disabled = true;
					}
					document.getElementById('p2').innerHTML='';
					document.getElementById('pl2').innerHTML='Player 2 wins!';
					
				}
	
			}}

		else if ((id!='a'+array1[0] || id!='a'+array1[1] || id!='a'+array1[2] || id!='a'+array1[3]) && turn==1){
			document.getElementById(id).style.backgroundColor='blue';
			document.getElementById(id).disabled = true;
			turn=turn-1;
		}
      } 

var array2=[Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1),
	Math.floor((Math.random()*16)+1)];

function side2_if() {
	if (array2[0]==array2[1] || array2[0]==array2[2] || array2[0]==array2[3] || array2[1]==array2[2] || array2[1]==array2[3] || array2[2]==array2[3]) 
		{
			array2[0]=Math.floor((Math.random()*16)+1);
			array2[1]=Math.floor((Math.random()*16)+1);
			array2[2]=Math.floor((Math.random()*16)+1);
			array2[3]=Math.floor((Math.random()*16)+1);
			side2_if();
		}
}    
side2_if();
function side2(id) {

		if (id=='b'+array2[0] || id=='b'+array2[1] || id=='b'+array2[2] || id=='b'+array2[3]) {
			if (turn == 0) {
				document.getElementById(id).style.backgroundColor='red';
				document.getElementById(id).disabled = true;
				scoreB=scoreB+1
				document.getElementById('pl1').innerHTML=+scoreB ;
				turn=turn+1;
				if (scoreB==4) 
				{
					for (j = 1; j < 17; j++)
					{ 
						document.getElementById('a'+j).disabled = true;
						document.getElementById('b'+j).disabled = true;
					}
					document.getElementById('p1').innerHTML='';
					document.getElementById('pl1').innerHTML='Player 1 wins!';
				}
	
			}}
		else if ((id!='b'+array2[0] || id!='b'+array2[1] || id!='b'+array2[2] || id!='b'+array2[3]) && turn==0){
			document.getElementById(id).style.backgroundColor='blue';
			document.getElementById(id).disabled = true;
			turn=turn+1;
		}
		
      }


function refresh()
{
location.reload();
}





