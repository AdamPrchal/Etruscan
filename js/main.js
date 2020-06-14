const upperCaseAlp = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'H',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

$(document).ready(function () {
    createAndAppendLetterComponent();
    createAndAppendLetterComponent();
});

function createAndAppendLetterComponent() {
    let letterIndex = 0;
    let letterComponent = $("<div></div>", {
        "class": "letters__item"
    })
        .append($("<button>Next</button>").click(function () {
            letterIndex++;
            $(this).siblings(".letters__letter").text(upperCaseAlp[letterIndex])
        }))
        .append($("<div class=\"letters__letter\"></div>")
            .text(upperCaseAlp[letterIndex]))
        .append($("<button>Prev</button>").click(function () {
            letterIndex--;
            $(this).siblings(".letters__letter").text(upperCaseAlp[letterIndex])
        }))
        .append($("<button>Delete</button>")
            .on({
                click: function () {
                    $(this).parent().remove();
                    console.log("I am deleted now")
                }
            }));

    $(".letters").append(letterComponent);
}