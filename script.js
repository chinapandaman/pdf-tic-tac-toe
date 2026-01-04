if (!event.target.value) {
	event.target.value = this.getField("turn").value;

	if (checkWinCondition(event.target) && this.getField("win_lock").value == "u") {
		this.getField( this.getField("turn").value + "_won" ).value = this.getField( this.getField("turn").value + "_won" ).value + 1;
		this.getField("win_lock").value = "l";
	}

	this.getField("turn").value = this.getField("turn").value == "X" ? "O" : "X";
}

function checkWinCondition(target) {
	var val = target.value;
	switch (target.name) {
		case "-1--1":
			return (
				this.getField("-1-0").value == val && this.getField("-1-1").value == val // vertical
			) || (
				this.getField("0--1").value == val && this.getField("1--1").value == val // horizontal
			) || (
				this.getField("0-0").value == val && this.getField("1-1").value == val   // diagonal
			);
		case "0--1":
			return (
				this.getField("0-0").value == val && this.getField("0-1").value == val // vertical
			) || (
				this.getField("-1--1").value == val && this.getField("1--1").value == val // horizontal
			)
		case "1--1":
			return (
				this.getField("1-0").value == val && this.getField("1-1").value == val // vertical
			) || (
				this.getField("0--1").value == val && this.getField("-1--1").value == val // horizontal
			) || (
				this.getField("0-0").value == val && this.getField("-1-1").value == val   // diagonal
			);
		case "-1-0":
			return (
				this.getField("-1--1").value == val && this.getField("-1-1").value == val // vertical
			) || (
				this.getField("0-0").value == val && this.getField("1-0").value == val // horizontal
			)
		case "0-0":
			return (
				this.getField("0--1").value == val && this.getField("0-1").value == val // vertical
			) || (
				this.getField("-1-0").value == val && this.getField("1-0").value == val // horizontal
			) || (
				this.getField("-1-1").value == val && this.getField("1--1").value == val   // diagonal
			) || (
				this.getField("-1--1").value == val && this.getField("1-1").value == val   // diagonal
			)
		case "1-0":
			return (
				this.getField("1--1").value == val && this.getField("1-1").value == val // vertical
			) || (
				this.getField("0-0").value == val && this.getField("-1-0").value == val // horizontal
			)
		case "-1-1":
			return (
				this.getField("-1-0").value == val && this.getField("-1--1").value == val // vertical
			) || (
				this.getField("0-1").value == val && this.getField("1-1").value == val // horizontal
			) || (
				this.getField("0-0").value == val && this.getField("1--1").value == val   // diagonal
			);
		case "0-1":
			return (
				this.getField("0-0").value == val && this.getField("0--1").value == val // vertical
			) || (
				this.getField("-1-1").value == val && this.getField("1-1").value == val // horizontal
			)
		case "1-1":
			return (
				this.getField("1-0").value == val && this.getField("1--1").value == val // vertical
			) || (
				this.getField("0-1").value == val && this.getField("-1-1").value == val // horizontal
			) || (
				this.getField("0-0").value == val && this.getField("-1--1").value == val   // diagonal
			);
		default:
			return false
	}
}
