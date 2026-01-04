this.getField("-1--1").value = "";
this.getField("-1-0").value = "";
this.getField("-1-1").value = "";
this.getField("0--1").value = "";
this.getField("0-0").value = "";
this.getField("0-1").value = "";
this.getField("1--1").value = "";
this.getField("1-0").value = "";
this.getField("1-1").value = "";

if ((+this.getField("X_won").value + this.getField("O_won").value) % 2 == 0) {
	this.getField("turn").value = "X";
} else {
	this.getField("turn").value = "O";
}

this.getField("win_lock").value = "u";
