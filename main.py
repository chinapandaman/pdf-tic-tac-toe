from PyPDFForm import PdfWrapper, BlankPage, Fields, RawElements

pdf = PdfWrapper(BlankPage(), need_appearances=True)

side = 100
fields = []
for i in range(-1, 2):
    for j in range(-1, 2):
        fields.append(
                Fields.TextField(
                    f"{i}-{j}", 1, 256 + i * side, 346 + j * side,
                    width=side, height=side, bg_color=(1, 1, 1), alignment=1, font_size=100
                    )
                )

fields += [
        Fields.TextField(
            "turn", 1, 180, 645, width=20, height=20, font_size=15, alignment=1, bg_color=(1, 1, 1), border_color=(0, 0, 0, 0)
            ),
        Fields.TextField(
            "X_won", 1, 425, 645, width=25, height=20, font_size=15, alignment=1, bg_color=(1, 1, 1), border_color=(0, 0, 0, 0)
            ),
        Fields.TextField(
            "O_won", 1, 425, 600, width=25, height=20, font_size=15, alignment=1, bg_color=(1, 1, 1), border_color=(0, 0, 0, 0)
            ),
        Fields.TextField(
            "rematch", 1, 100, 600, width=75, height=20, font_size=15, alignment=1, bg_color=(1, 1, 1)
            ),
        Fields.TextField(
            "win_lock", 1, 0, 0, width=1, height=1, bg_color=(1, 1, 1), border_color=(0, 0, 0, 0)
            ),
        Fields.TextField(
            "anti_cheat", 1, 0, 0, width=1, height=1, bg_color=(1, 1, 1), border_color=(0, 0, 0, 0)
            )
        ]


pdf.bulk_create_fields(fields)
pdf.widgets["rematch"].on_mouse_pressed_javascript = "./reset.js"
pdf.widgets["rematch"].on_mouse_released_javascript = "./reset.js"
pdf.widgets["rematch"].off_focused_javascript = "this.getField('rematch').value = 'Rematch';"

texts = [
        RawElements.RawText("Yes you can play tic-tac-toe on a PDF.", 1, 100, 700, font_size=20),
        RawElements.RawText("Who's turn: ", 1, 100, 650, font_size=15),
        RawElements.RawText("X won: ", 1, 375, 650, font_size=15),
        RawElements.RawText("O won: ", 1, 375, 605, font_size=15),
        ]

pdf.draw(texts)

for k, v in pdf.widgets.items():
    v.on_focused_javascript = f"this.getField('anti_cheat').value = this.getField('{k}').value;"
    v.off_focused_javascript = f"this.getField('{k}').value = this.getField('anti_cheat').value;"
    if "-" in k:
        v.on_mouse_pressed_javascript = "./script.js"

pdf.fill(
        {
            "turn": "X",
            "X_won": "0",
            "O_won": "0",
            "rematch": "Rematch",
            "win_lock": "u",
            }
        )
pdf.write("./tic-tac-toe.pdf")
